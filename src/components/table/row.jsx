function Row({page, rowkey}){
    return(
        <tr key={rowkey}>

            <td className="border border-gray-400 px-4 py-2 h-10">
                {page.pagename}
            </td>
            
            <td className="border flex text-purple-500 border-gray-400 h-full min-w-10">
              <a className = "w-full h-full px-3 flex justify-center items-center hover:bg-gray-700" target="_blank" rel="noopener noreferrer" href={page.pageurl}>
                <img className="h-5" src="redirect.svg"/>
              </a>
            </td>

            <td className="border border-gray-400 px-4 py-2 h-10">
              {page.description}
            </td>

        </tr> 
    )
}

export default Row