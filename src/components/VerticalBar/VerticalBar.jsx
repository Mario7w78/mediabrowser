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
    <div className="border-gray-600 border-r-2 row-span-9 grid grid-rows-10 justify-center gap-2 my-5">
      {directories.map(dir => (
        <Directory url = {dir.imgurl} name = {dir.name}/>
      ))}
      <button className = "cursor-pointer my-5 h-15 w-15 pb-2 text-5xl text-gray-400 bg-gray-700 rounded-full flex justify-center items-center" onClick={handleClick}>+</button>
    </div>
  )
 
}

export default VerticalBar