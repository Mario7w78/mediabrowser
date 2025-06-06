import { create } from 'zustand';
import { getDirectories, addDirectory } from "../services/directoryData";

const useDirStore = create((set, get) => ({
  directories: [],
  currentDirectory: null,
  fetchDirectories: async () => {
    const dirs = await getDirectories();
    set({ directories: dirs });
  },

  addDirectory: async (dir) => {
    await addDirectory(dir);
    await get().fetchDirectories();
  },

  setCurrentDirectory: (dir) =>{

    set({currentDirectory: dir})
  },

}));

export default useDirStore;