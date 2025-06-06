import Row from "./row";
import usePageStore from "../../app/Pagestore";
import { useParams, useNavigate, useLocation } from "react-router-dom";

function Table() {

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

  const pages = usePageStore((state) => state.pages);
  const directoryPages = pages.filter((page) => page.directoryid === id);
  
  const headerStyle = "border text-purple-100 border-gray-400";

  const handleClick = () => {
    navigate(`/media/newPage/${id}`, { state: { backgroundLocation: location } });
  }

  return (
    <div className="relative flex w-[90vw] h-[90vh] justify-center p-10">
      <table className="w-full font-mono border-collapse border border-gray-400 text-center text-gray-200 font-weight-bold h-[20px]">
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
      </div>
  );
}

export default Table;
