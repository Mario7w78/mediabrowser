import { useDispatch } from "react-redux"
import { appearCreate } from "../../features/Dir/dirCreateSlice"
import { useState } from "react";
import { addDir, turnFalse } from "../../features/Dir/crudDir";
import {v4 as uid} from 'uuid'


function CreateDir(){
  const dispatch = useDispatch()
  const [preview, setPreview] = useState("/edit.svg");

  const [dir, setDir] = useState({
    imgurl: "",
    name: "",
    id: "",
    selected: false,
    pages: []
    
  })

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(appearCreate(false))
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
    const newId = uid()
    dispatch(addDir({
      ...dir,
      id: newId,
      selected: true,
    }))
    dispatch(appearCreate(false))
    dispatch(turnFalse(newId))
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