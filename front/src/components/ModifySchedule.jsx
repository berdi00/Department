import React, { useContext, useEffect, useRef, useState } from "react";
import { Button, Form, Input, Popconfirm, Table } from "antd";
import axios from "axios";
const EditableContext = React.createContext(null);
const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};
const baseUrl = "http://172.20.10.13:3000/timetable";

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);
  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };
  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({
        ...record,
        ...values,
      });
    } catch (errInfo) {
      console.log("Save failed:", errInfo);
    }
  };
  let childNode = children;
  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }
  return <td {...restProps}>{childNode}</td>;
};
const ModifySchedule = ({ data, gradeId }) => {
  console.log(data);
  useEffect(() => {
    const mappedData = data?.map((data, index) => ({
      key: data?.day || index + 1,
      day: data?.day || index + 1,
      lesson_1: data[0],
      lesson_2: data[1],
      lesson_3: data[2],
    }));
    setDataSource(mappedData);
    console.log(mappedData);
    setCount(data?.length + 1 || 6);
  }, [data]);
  const [dataSource, setDataSource] = useState([]);
  const [count, setCount] = useState(data?.length);
  const handleDelete = (key) => {
    const newData = dataSource.filter((item) => item.key !== key);
    setDataSource(newData);
  };
  const defaultColumns = [
    {
      title: "day",
      dataIndex: "day",
      editable: true,
    },
    {
      title: "lesson_1",
      dataIndex: "lesson_1",
      width: "30%",
      editable: true,
    },
    {
      title: "lesson_2",
      dataIndex: "lesson_2",
      width: "30%",
      editable: true,
    },
    {
      title: "lesson_3",
      dataIndex: "lesson_3",
      width: "30%",
      editable: true,
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) =>
        dataSource.length >= 1 ? (
          <Popconfirm
            style={{ zIndex: "1000" }}
            title="Sure to delete?"
            onConfirm={() => handleDelete(record.key)}
          >
            <a>Delete</a>
          </Popconfirm>
        ) : null,
    },
  ];
  const handleAdd = () => {
    const newData = {
      key: count,
      day: count,
      lesson_1: `fill in first lesson`,
      lesson_2: "fill in second lesson",
      lesson_3: `fill in third lesson`,
    };
    setDataSource([...dataSource, newData]);
    setCount(count + 1);
  };
  const handleSave = (row) => {
    const newData = [...dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    setDataSource(newData);
  };

  const onSave = () => {
    try {
      const payload = {
        schedule: dataSource,
      };
      axios.post(`${baseUrl}/${gradeId}`, payload).then((res) => {
        console.log(res, "res of post");
      });
    } catch (err) {
      console.log(err);
    }
  };
  const components = {
    body: {
      row: EditableRow,
      cell: EditableCell,
    },
  };
  const columns = defaultColumns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        handleSave,
      }),
    };
  });
  return (
    <div>
      <Button
        onClick={handleAdd}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Add a row
      </Button>
      <Table
        components={components}
        rowClassName={() => "editable-row"}
        bordered
        dataSource={dataSource}
        columns={columns}
      />
      <Button type="primary" onClick={onSave}>
        Save
      </Button>
    </div>
  );
};
export default ModifySchedule;
