import React, { useState, useEffect } from "react";
import VerticallyCenteredModal from "./VerticallyCenteredModal";
import { useCustomContext } from "../context/CustomContext";
import { useParams } from "react-router-dom";
import ModifySchedule from "./ModifySchedule";

import axios from "axios";
import { notification } from "antd";

const baseUrl = "http://172.20.10.13:3000/timetable";

const majors = [
  {
    key: "auto",
    major: "Automation and Control",
    img: "/automation.jpg",
    id: 1,
  },
  {
    key: "mecha",
    major: "Mechatronics and Electronics",
    img: "/mechatronics.jpg",
    id: 2,
  },
  {
    key: "eco",
    major: "Digital Economy",
    img: "/digEc.jpg",
    id: 3,
  },
];

function getTitle(titleName) {
  const matched = majors.find((item) => item.key === titleName);
  return matched.major;
}

// const dumData = {
//   title: "hey",
//   numbers: [1, 2, 3, 4, 5],
// };

// console.log(dumData["numbers"]);

const Schedule = ({ role }) => {
  let params = useParams();
  const { modalIsOpen, closeModal } = useCustomContext();
  const [sdata, setData] = useState(undefined);

  const arrayOfShorts = ["first", "second", "third", "fourth"];
  const arrayOfTitleSepareted = arrayOfShorts.map((name) =>
    params.gradeId.split(name)
  );
  let titleKey;
  const arr = arrayOfTitleSepareted.filter((arr) =>
    arr.length > 1 ? (titleKey = arr[1]) : null
  );

  console.log(titleKey);
  const finalTitle = getTitle(titleKey);

  useEffect(() => {
    try {
      axios.get(`${baseUrl}/${params.gradeId}`).then((res) => {
        console.log(res.data, "res data");
        setData(res.data);
      });
    } catch {
      notification.error({
        message: "Could not get",
      });
    }
  }, [params]);

  let conditionalEl =
    role === "admin" ? (
      <>
        <h1 className="m-3 text-center">{finalTitle}</h1>
        <ModifySchedule data={sdata} gradeId={params.gradeId} />
      </>
    ) : (
      <VerticallyCenteredModal
        role={role}
        show={modalIsOpen}
        onHide={() => closeModal()}
        data={sdata}
      />
    );
  return <>{conditionalEl}</>;
};

export default Schedule;
