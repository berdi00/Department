import React, { useEffect, useState } from 'react'
import MajorsSection from '../components/MajorsSection'
import Intro from '../components/Intro'
import { getFromLocalStorage } from '../utils/useCustomFunctions'


const Home = () => {
  const [data, setData] = useState(null)
  useEffect(() => {
    const data = getFromLocalStorage('data')
    setData(data)
  }, [])


  return (
    <>
    <div style={{backgroundImage: "linear-gradient(to bottom right, #141b29, #124143, #c0f7b7, #5ac994)"}}>
      <Intro />
    </div>
    <MajorsSection />
    <div>{data ? data : "Hey"}</div>  
    </>
  )
}

export default Home