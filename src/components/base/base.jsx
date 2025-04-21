import VerticalBar from "../VerticalBar/VerticalBar"
import CreateDir from "../CreateDir/CreateDir"
import { useSelector } from "react-redux"
import Menu from "../menu/menu"


function Base(){
  const isOpen = useSelector(state => state.dircreate)
  console.log(isOpen)
  
  return (
    <div className="relative bg-gray-900 w-screen h-screen grid grid-cols-10 grid-rows-10">

      {
      isOpen &&
      <CreateDir/>
      }

      <div className="border-b-1 border-gray-600 col-span-10 grid grid-cols-10 ">

        <div className="flex justify-center items-center">
          <img className="row-start-1 col-start-1 size-10 " src="/icon.svg"/>
          </div>
        
        <input className="bg-gray-800 col-start-2 col-span-8 h-10 self-center border-1 border-gray-500 pl-2 text-gray-100" type="text" placeholder="Media-Browser/" />

      </div>
      
      <VerticalBar/>
      <Menu/>
      
    </div>
  )
}

export default Base