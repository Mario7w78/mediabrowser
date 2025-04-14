import React, { useState } from 'react';
export default function AddButton() {
    const [createDir, setCreateDir] = useState(false);

    const handleClick = () => {
        setCreateDir(!createDir);
    }

    return ( 
            <>
            <div className="row-start-2 row-span-7 border-r-1 border-gray-600 grid grid-row-10 relative justify-center">
                <button onClick={handleClick} className="w-15 h-15 my-10 cursor-pointer text-5xl flex justify-center items-baseline ">+</button>
                {createDir && 
                <div >
                    <form className=" absolute bg-gray-700 top-30 left-120 w-70 h-70 rounded-xl grid grid-rows-10 grid-cols-4 gap-x-2 z-10">
                        <p className='col-span-full text-center pt-1 font-bold font-mono'>Create new directory</p>
                        

                        <button type='submit' className='cursor-pointer font-bold font-mono bg-gray-500 text-gray-50 p-1 rounded-xl -row-start-3 col-start-2 flex items-center justify-center'  onClick={handleClick}>Create</button>
                        <button className='cursor-pointer font-bold font-mono bg-gray-500 text-gray-50 p-1 rounded-xl -row-start-3 col-start-3 flex items-center justify-center'  onClick={handleClick}>Cancel</button>
                    </form>
                </div>
            }
            </div> 
            
            </>
        )

}