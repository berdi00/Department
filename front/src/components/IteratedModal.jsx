import React from "react";

const IteratedModal = ({ data, id }) => {
  return (
    <tr>
      <td>{id + 1}</td>
      <td>{data[0]}</td>
      <td>{data[1]}</td>
      <td>{data[2]}</td>
    </tr>
  );
};

export default IteratedModal;
