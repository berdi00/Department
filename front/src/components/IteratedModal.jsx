import React from 'react'

const IteratedModal = ({data}) => {
  return (
    <tr>
          <td>{data.day}</td>
          <td>{data.subjects[0]}</td>
          <td>{data.subjects[1]}</td>
          <td>{data.subjects[2]}</td>
        </tr>
  )
}

export default IteratedModal