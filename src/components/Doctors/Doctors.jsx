import React from 'react'
import SectionHeaders from "../UsableComponents/SectionHeaders/SectionHeader";

const data = [
  {id:1,title:'data1'}
]

function Doctors() {
  return (
    <>
      {data.map(doc=>(
            <SectionHeaders data={doc} section={'doctors'}/>
      ))}
    </>
  )
}

export default Doctors