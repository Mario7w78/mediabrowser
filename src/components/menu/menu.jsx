import { useSelector } from "react-redux"
import File from "./file"
import { useEffect} from "react"

function Menu(){
  const directories = useSelector(state => state.cruddir)
  const dirSelected = directories.find(dir => dir.selected === true)
  return (
    <div className="row-span-9 col-span-9">

      {
      
      dirSelected.pages.map(page =>(
        <File pageurl={page.pageurl} pagename={page.pagename} />
      ))
      }

    
    <button className = "select-none cursor-pointer mx-5 my-5 h-16 w-16 pb-2 text-5xl text-gray-400 bg-gray-800 rounded-full flex justify-center items-center">
      +</button>

    </div>
  )
}

export default Menu
