import { useDispatch, useSelector } from "react-redux";
import { appearCreatePage } from "../../features/createPageUI";
import { savePage } from "../../features/Dir/crudDir";
import { useState } from "react";

function CreatePage() {
    const dispatch = useDispatch()
    const directories = useSelector(state => state.cruddir)
    const dirSelected = directories.find(dir => dir.selected === true)


    const [page, setPage] = useState({
        pagename: "",
        pageurl: "",
        description: "",        
    })

    const handleCancel = (e) => {
        e.preventDefault()
        dispatch(appearCreatePage(false))
    }

    const handleChange = (e) => {
        setPage({
            ...page,
            [e.target.name]: e.target.value
        })
    }

    const handleCreate = (e) => {
        e.preventDefault()
        dispatch(appearCreatePage(false))
        dispatch(savePage({id: dirSelected.id, page: page}))
    }


    

    return (
        <form onSubmit={handleCreate} className="absolute top-0 left-[30vw] z-10 p-4 font-mono flex flex-col bg-gray-800 border-2 border-gray-400 rounded-4xl gap-2">
            
            <label className="text-gray-100" htmlFor="pagename">Page Name:</label>
            <input onChange={handleChange} className="bg-gray-400 border-2 border-gray-200 px-3 rounded-4xl" required type="text" name="pagename"/>

            <label className="text-gray-100" htmlFor="pagename">Page Url:</label>
            <input onChange={handleChange} className="bg-gray-400 border-2 border-gray-200 px-3 rounded-4xl" required type="text" name="pageurl"/>

            <label className="text-gray-100" htmlFor="pagename">
                Description
                    <span className="text-[12px] text-gray-300">
                    (optional)
                    </span>:</label>
            <input onChange={handleChange} className="bg-gray-400 border-2 border-gray-200 px-3 rounded-4xl" type="text" name="description"/>

            <button  className="bg-gray-400 mt-2 rounded-4xl" >Create</button>
            <button onClick={handleCancel} className="bg-gray-400 rounded-4xl" >Cancel</button>
        </form>
    )
}

export default CreatePage;