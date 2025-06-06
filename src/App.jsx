import useDirStore from "./app/Directorystore"
import usePageStore from "./app/Pagestore"
import Base from "./components/base/base"
import { useEffect } from "react";


function App() {

  useEffect(() => {
    useDirStore.getState().fetchDirectories();
    usePageStore.getState().fetchPages();
  }, []);
  
  return (
    <>
    <Base/>
    </>
  )
}

export default App
