import React, {useState, useEffect} from 'react'
import VerticallyCenteredModal from './VerticallyCenteredModal';
import { useCustomContext } from '../context/CustomContext';
import { useParams } from 'react-router-dom';
import data from "../data/schedules.json"

function getSchedule(id) {
    const matchedShedule = data.find((key) => key.id === id)
    return matchedShedule
} 

const Schedule = () => {
    
    let params = useParams()
    const {modalIsOpen, closeModal} = useCustomContext()
    const [sdata, setData] = useState(undefined)

    useEffect(() => {
        const matchedData = getSchedule(params.gradeId)
        setData(matchedData)
      }, [params]);

    console.log(params.gradeId)
    let validData;
    if (typeof sdata === "undefined") {
        validData = undefined
    }else {
        validData = sdata["schedule"]
    }
  return (
    <>
     <VerticallyCenteredModal
        show={modalIsOpen}
        onHide={() => closeModal()}
        data={validData}
      />
    </>
  )
}

export default Schedule