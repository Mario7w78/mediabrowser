import VerticalBar from "../VerticalBar/VerticalBar"
import CreateDir from "../CreateDir/CreateDir"
import { useSelector } from "react-redux"


function Base(){
  const isOpen = useSelector(state => state.dircreate)
  console.log(isOpen)
  
  return (
    <div className="relative bg-gray-800 w-screen h-screen grid grid-cols-10 grid-rows-10">
      {
      isOpen &&
      <CreateDir/>
      }
      <div className="border-1 col-span-10">1</div>
      <VerticalBar/>
      <div className="row-span-9 col-span-9">3</div>
      
    </div>
  )
}

export default Base