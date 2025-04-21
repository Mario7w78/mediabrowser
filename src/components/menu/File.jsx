function File({pageurl, pagename}){
  return(
    <div className="w-32 h-32 bg-gray-400" >
      <p>{pagename}</p>
      <a target="_blank" href={pageurl}>{pagename}</a>

    </div>
  )
}


export default File