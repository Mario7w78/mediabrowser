import { useDispatch } from "react-redux";
import { turnFalse } from "../../features/Dir/crudDir";


function Directory({url, name, id}){
  if (!url){
    url = "/default.svg"
  }

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(turnFalse(id))
  }
 

  return (
      <button onClick={handleClick} id={id} title={name} className="hover:shadow-xl/30 transition delay-50 duration-300 ease-linear cursor-pointer max-h-16 max-w-16 min-h-16 min-w-16 rounded-2xl overflow-hidden my-3">
      <img className="w-full h-full object-cover" alt={name} src={url}/>
    </button>
  )
}

export default Directory;