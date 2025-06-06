import VerticalBar from "../VerticalBar/VerticalBar"
import CreateDir from "../CreateDir/CreateDir"
import { useSelector } from "react-redux"
import Menu from "../menu/menu"
import Bar from "../bar/bar"


function Base(){
  const isOpen = useSelector(state => state.dircreate)
  
  return (
      <div className="relative bg-gray-900 w-screen h-screen grid grid-cols-10 grid-rows-10">

        {
        isOpen &&
        <CreateDir/>
        }

        <Bar/>
        <VerticalBar/>
        <Menu/>

      </div>
  )
}

export default Base