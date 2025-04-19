import { useState } from "react"
import CreateDir from "../CreateDir/CreateDir"
import { useDispatch, useSelector } from "react-redux"
import { appearCreate } from "../../features/Dir/dirCreateSlice"

function VerticalBar(){
  const isOpen = useSelector(state => state.dircreate)
  const dispatch = useDispatch()


  const handleClick = ()=> {
    dispatch(appearCreate(!isOpen))
  }
  return (
    <div className="border-gray-600 border-r-2 row-span-9 grid grid-rows-2">
      <button onClick={handleClick}>crear carpeta</button>
    </div>
  )

}

export default VerticalBar