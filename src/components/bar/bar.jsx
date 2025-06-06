import useDirStore from "../../app/Directorystore"

function Bar() {
    
    const currentDirectory = useDirStore((state)=>state.currentDirectory)
    return (
        <div className="border-b-1 border-gray-600 col-span-10 flex  items-center">

            <div className="flex justify-center items-center w-35 mr-7">
                <img className="row-start-1 col-start-1 size-10 " src="/icon.svg" />
            </div>

            <h1 className="text-1xl font-mono font-bold text-gray-200">
                {"Mediabrowser/"+currentDirectory?.name}
            </h1>
        </div>)
}

export default Bar