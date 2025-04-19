import VerticalBar from "../VerticalBar/VerticalBar"


function Base(){
  return (
    <div className="bg-gray-800 w-screen h-screen grid grid-cols-10 grid-rows-10">
      <div className="border-1 col-span-10">1</div>
      <VerticalBar/>
      <div className="row-span-9 col-span-9">3</div>
    </div>
  )
}

export default Base