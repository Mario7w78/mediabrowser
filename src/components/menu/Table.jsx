import { useSelector, useDispatch } from "react-redux"
import { appearCreatePage } from "../../features/createPageUI";
import CreatePage from "./CreatePage";

function Table() {

  const directories = useSelector(state => state.cruddir)
  const dirSelected = directories.find(dir => dir.selected === true)

  const dispatch = useDispatch()

  const isOpen = useSelector(state => state.createpageui)

  const handleClick = () => {
    console.log("Valor open inicial", isOpen)
    dispatch(appearCreatePage(!isOpen))
  }

  return (
    <div className="w-full relative">
    <table  className="font-mono border-collapse border border-gray-400 w-full text-center text-gray-200 font-weight-bold h-[20px]">
      <thead>
        <tr className="h-12">
          <th className="border text-purple-100 border-gray-400">Página</th>
          <th className="border text-purple-100 border-gray-400">Go</th>
          <th className="border text-purple-100 border-gray-400">Descripcion</th>
        </tr>
      </thead>
      <tbody >
        
        {dirSelected.pages.map((page, index) => (

          <tr key={index}>
            <td className="border border-gray-400 px-4 py-2 h-10">{page.pagename}</td>
            
            <td className="border flex justify-center  text-purple-500 border-gray-400 px-4 py-2 h-10">
              <a target="_blank" href={page.pageurl}>
                <img className="h-5" src="redirect.svg"/>
              </a>
            </td>

            <td className="border border-gray-400 px-4 py-2 h-10">
              {page.description}
            </td>
          </tr> 
          
        ))}

        <tr >

          <td colSpan="3" className="h-2 bg-gray-800">

          <button onClick={handleClick} className="cursor-pointer border h-full w-full text-3xl" >+</button>

          </td>
          
        </tr>

      </tbody>
    </table>

    {isOpen && (
      <CreatePage/>
    )}

    </div>
  );
}

export default Table;