import { useState } from "react";
import { useParams, useNavigate} from "react-router-dom";
import usePageStore from "../../app/Pagestore";
function CreatePage() {
    
    const { id } = useParams();
    const addPage = usePageStore(state => state.addPage);
    const navigate = useNavigate();

    const [page, setPage] = useState({
        directoryid: id,
        pagename: "",
        pageurl: "",
        description: "",        
    })

    const handleCancel = (e) => {
        e.preventDefault()
        navigate(-1)
    }

    const handleChange = (e) => {
        setPage({
            ...page,
            [e.target.name]: e.target.value
        })
    }

    const handleCreate = (e) => {
        e.preventDefault()
        addPage(page)
        navigate(-1)
    }


    

    return (
        <form onSubmit={handleCreate} className="absolute z-10 p-4 font-mono flex flex-col bg-gray-800 border-2 border-gray-400 rounded-4xl gap-2 row-start-4 col-start-5 row-span-4 col-span-1">
            
            <label className="text-gray-100" htmlFor="pagename">Page Name:</label>
            <input onChange={handleChange} className="bg-gray-400 border-2 border-gray-200 px-3 rounded-4xl" required type="text" name="pagename"/>

            <label className="text-gray-100" htmlFor="pagename">Page Url:</label>
            <input onChange={handleChange} className="bg-gray-400 border-2 border-gray-200 px-3 rounded-4xl" required type="text" name="pageurl"/>

            <label className="text-gray-100" htmlFor="pagename">
                Description
                <span className="text-[12px] text-gray-300">
                (optional)
                </span>:
            </label>
            
            <input onChange={handleChange} className="bg-gray-400 border-2 border-gray-200 px-3 rounded-4xl" type="text" name="description"/>

            <button  className="bg-gray-400 mt-2 rounded-4xl" >Create</button>
            <button onClick={handleCancel} className="bg-gray-400 rounded-4xl" >Cancel</button>
        </form>
    )
}

export default CreatePage;