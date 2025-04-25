function File({pageurl, pagename}){
  
  return(
    <div className="w-45 h-45 bg-gray-400 flex flex-col rounded-4xl" >
      <a target="_blank" className="font-mono text-center" href={pageurl}>
        {pagename}
      </a>

      <a target="_blank" href={pageurl}>
        <iframe 
        src={pageurl} 
        title={pagename}
        className="w-full h-20"
        style={{ pointerEvents: "none" }}
        ></iframe>
      </a>

      </div>
  )
}


export default File