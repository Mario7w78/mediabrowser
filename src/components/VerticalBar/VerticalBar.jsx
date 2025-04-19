import { useState } from "react"
import CreateDir from "../CreateDir/CreateDir"

function VerticalBar(){
  const [isOpen, setOpen] = useState(false)
  const handleClick = ()=> {
      setOpen(!isOpen)
  }
  return (
    <div className="border-gray-600 border-r-2 row-span-9 grid grid-rows-2">

      <button onClick={handleClick}>crear carpeta</button>
      {
        isOpen &&
        <CreateDir/>
      }

    </div>
  )

}

export default VerticalBar