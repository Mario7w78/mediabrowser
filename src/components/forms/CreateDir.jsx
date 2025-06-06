import { useState } from "react";
import useDirStore from "../../app/Directorystore";
import {v4 as uid} from 'uuid'
import { useNavigate } from "react-router-dom";



function CreateDir(){
  const [preview, setPreview] = useState("/edit.svg");
  const addDirectory = useDirStore(state => state.addDirectory);
  const directories = useDirStore(state => state.directories);
  const navigate = useNavigate();

  const [dir, setDir] = useState({
    imgurl: "",
    name: "",
    id: ""
    
  })

  const latestDir = ()=>{
    return directories[directories.length - 1];
  }

  const handleClick = (e) => {
    e.preventDefault()
    navigate(`/media/${latestDir().id}`);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreview(imageUrl);
      setDir({
        ...dir,
        imgurl: imageUrl,
      });
    }
  };


  const handleChange = (e) =>{
    setDir({
      ...dir,
      [e.target.name]: e.target.value
    })
  }

  const handleCreate = (e)=>{
    e.preventDefault()
    const newId = uid();    

    addDirectory({
      ...dir,
      id: newId,
    })

    navigate(`/media/${latestDir().id}`);
    
  }

  return (
    <form onSubmit={handleCreate} className="absolute font-mono bg-gray-800 border-2 border-gray-400 row-start-4 col-start-5 z-10 row-span-4 col-span-1  p-4 flex flex-col rounded-4xl gap-2">

      <input onChange={handleFileChange} className ="hidden" type="file" id="cover" name= "imgurl" accept=".jpg, .png" />

      <label htmlFor="cover" className="overflow-hidden cursor-pointer self-center size-20 bg-gray-700 rounded-full flex justify-center items-center">
        <img className = "w-full h-full object-cover" src={preview}  />
      </label>

      <label className="text-gray-50" htmlFor="name">Directory:</label>

      <input onChange={handleChange} className = "bg-gray-400 border-2 border-gray-200  rounded-3xl p-1 pl-1.5" type="text" name="name" required placeholder="Directory name.."/>

      <button type="submit" className="bg-gray-400 border-1 border-gray-800 rounded-3xl cursor-pointer">Create</button>

      <button onClick={handleClick} className="bg-gray-400 border-1 border-gray-800 rounded-3xl cursor-pointer">Cancel</button>

    </form>
  )
}

export default CreateDir