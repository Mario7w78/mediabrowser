import useDirStore from "../../app/Directorystore"
import Directory from "../directory/Directory"
import { useNavigate, useLocation } from "react-router-dom"

function VerticalBar() {

  const directories = useDirStore(state => state.directories)
  const navigate = useNavigate()
  const location = useLocation();

  const handleClick = () => {
    navigate("/media/newDirectory", { state: { backgroundLocation: location } })
    
  }

  return (
    <div className="border-gray-800 border-r-2 row-span-9 flex flex-col items-center overflow-y-auto hide-scroll">

      {directories.map(dir => (
        <Directory key={dir.id} url={dir.imgurl} name={dir.name} id={dir.id} />
      ))}

      <button className="hover:bg-gray-300 hover:text-gray-800 select-none cursor-pointer my-5 h-16 min-w-16 pb-2 text-5xl text-gray-400 bg-gray-800 rounded-full flex justify-center items-center" onClick={handleClick}>
        +
      </button>

    </div>
  )

}

export default VerticalBar