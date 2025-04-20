import { useDispatch, useSelector } from "react-redux"
import { appearCreate } from "../../features/Dir/dirCreateSlice"
import Directory from "../directory/Directory"

function VerticalBar(){
  const isOpen = useSelector(state => state.dircreate)
  const directories = useSelector(state => state.cruddir)
  const dispatch = useDispatch()
  console.log(directories)


  const handleClick = ()=> {
    dispatch(appearCreate(!isOpen))
  }
  return (
    <div className="border-gray-800 border-r-2 row-span-9 flex flex-col items-center overflow-y-auto hide-scroll ">
      
      {directories.map(dir => (
        <Directory url = {dir.imgurl} name = {dir.name}/>
      ))}

      <button className = "cursor-pointer my-5 h-16 w-16 pb-2 text-5xl text-gray-400 bg-gray-800 rounded-full flex justify-center items-center" onClick={handleClick}>+</button>

    </div>
  )
 
}

export default VerticalBar