import AddButton from "./components/addButton/Addbutton"


function App() {

  return (
    <main className="bg-gray-800 w-screen h-screen grid grid-rows-10 grid-cols-15 text-white">

      <div className="border-r-1 border-gray-600 flex justify-center items-center pt-4 "><img className="w-12" src="/logo.svg" /></div>
      
      <AddButton /> 
      
      <div className="row-span-2 row-start-9 border-r-1 border-gray-600 grid grid-rows-3 justify-items-center">
        <button className=" w-10 h-10 my-10 cursor-pointer "><img itemType="svg" src="/user.svg" /></button>
      </div>
      
      <div className="col-span-14 border-b-1 border-gray-600">2</div>
      <div className="row-span-4 col-span-9">3</div>
    </main> 
  )
}

export default App
