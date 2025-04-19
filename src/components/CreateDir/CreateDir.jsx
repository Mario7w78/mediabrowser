function CreateDir(){

  return (
    <form className="absolute bg-gray-600 row-start-4 col-start-5 z-10 row-span-4 col-span-1 h-50 p-4 flex flex-col rounded-4xl gap-2">

      <input className ="hidden" type="file" id="cover" accept=".jpg, .png" />
      <label htmlFor="cover" className="self-center size-20 bg-gray-700 rounded-full flex justify-center items-center">
        <img className = "w-15 opacity-60" src="/frog.svg" alt="" /></label>
      <label htmlFor="name">Directory:</label>
      <input className = "bg-gray-400 rounded-3xl p-1" type="text" name="name" placeholder="Directory name.."/>
      

    </form>
  )
}

export default CreateDir