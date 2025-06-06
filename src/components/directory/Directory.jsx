import useDirStore from "../../app/Directorystore"
import { useNavigate } from "react-router-dom"

function Directory({url, name, id}){

    const directories = useDirStore((state)=>state.directories);
    const setCurrentDirectory = useDirStore((state)=>state.setCurrentDirectory)
  
  const navigate = useNavigate();
  if (!url){
    url = "/default.svg"
  }

  const handleClick = () => {
    setCurrentDirectory(directories.find((dir)=>dir.id === id))
    navigate(`/media/${id}`);

  }
 

  return (
      <button onClick={handleClick} id={id} title={name} className="hover:shadow-xl/30 transition delay-50 duration-300 ease-linear cursor-pointer max-h-16 max-w-16 min-h-16 min-w-16 rounded-2xl overflow-hidden my-3">
      <img className="w-full h-full object-cover" alt={name} src={url}/>
    </button>
  )
}

export default Directory;