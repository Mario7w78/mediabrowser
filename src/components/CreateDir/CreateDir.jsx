function CreateDir(){

  return (
    <form className="bg-gray-500">

      <label htmlFor="name">Name:</label>
      <input className = "bg-gray-400" type="text" name="name" />
      <input type="file" name="cover" accept=".jpg, .png" />

    </form>
  )
}

export default CreateDir