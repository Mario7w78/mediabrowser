

function Directory({url, name}){
  if (!url){
    url = "/default.svg"
  }
  return (
      <button className="cursor-pointer max-h-16 max-w-16 min-h-16 min-w-16 rounded-2xl overflow-hidden my-3">
      <img className="w-full h-full object-cover" alt={name} src={url}/>
    </button>
  )
}

export default Directory;