import { useSelector, useDispatch } from "react-redux";
import { appearCreatePage } from "../../features/createPageUI";
import CreatePage from "../menu/CreatePage";
import Row from "./row";

function Table() {
  const directories = useSelector((state) => state.cruddir);
  const pages = useSelector((state) => state.crudpage);
  const isOpen = useSelector((state) => state.createpageui);

  const dirSelected = directories.find((dir) => dir.selected === true);
  const directoryPages = pages.filter(
    (page) => dirSelected && page.directoryid === dirSelected.id
  );

  console.log(directoryPages)

  const dispatch = useDispatch();

  const headerStyle = "border text-purple-100 border-gray-400";

  const handleClick = () => {
    dispatch(appearCreatePage(!isOpen));
  };

  return (
    <div className="w-full relative">
      <table className="font-mono border-collapse border border-gray-400 w-full text-center text-gray-200 font-weight-bold h-[20px]">
        <thead>
          <tr className="h-12">
            <th className={headerStyle}>Page Name </th>
            <th className={headerStyle}>Go</th>
            <th className={headerStyle}>Description</th>
          </tr>
        </thead>

        <tbody>
          {directoryPages.map((page, index) => (
            <Row key={index} rowKey={index} page={page} />
          ))}

          <tr>
            <td colSpan="3" className="h-2 bg-gray-800">
              <button
                onClick={handleClick}
                className="cursor-pointer border hover:bg-gray-600 h-full w-full text-3xl"
              >
                +
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {isOpen && <CreatePage />}
    </div>
  );
}

export default Table;
