

function Directory({url, name}){
  if (!url){
    url = "/default.svg"
  }
  return (
    <div className="cursor-pointer h-15 w-15 rounded-full ">
      <img src={url}/>
    </div>
  )
}

export default Directory;