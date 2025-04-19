import { useSelector } from "react-redux"
import Base from "./components/base/base"
import CreateDir from "./components/CreateDir/CreateDir"

function App() {
  const isOpen = useSelector(state => state.dircreate)
  console.log(isOpen)
  return (
    <>
    <Base>
    {
      isOpen &&
      <CreateDir/>
    }
    </Base>
    
    </>
  )
}

export default App
