

function Directory({url, name}){
  if (!url){
    url = "/default.svg"
  }
  return (
      <div className="cursor-pointer max-h-16 max-w-16 min-h-16 min-w-16 rounded-full overflow-hidden ">
      <img className="w-full h-full object-cover" alt={name} src={url}/>
    </div>
  )
}

export default Directory;