import AddButton from "./components/addButton/Addbutton"


function App() {

  return (
    <main className="bg-gray-800 w-screen h-screen grid grid-rows-5 grid-cols-15 text-white">

      <AddButton />

      <div className=" row-span-2 row-start-4 border-r-1 border-gray-600 grid grid-rows-3 justify-items-center">
        <button className="row-start-2 w-10 h-10 my-10 cursor-pointer "><img itemType="svg" src="/user.svg" /></button>
      </div>
      <div className="col-span-14 border-b-1 border-gray-600">2</div>
      <div className="row-span-4 col-span-9">3</div>
    </main> 
  )
}

export default App
