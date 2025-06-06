import { create } from 'zustand';
import { getPages, addPage } from "../services/directoryData";

const usePageStore = create((set, get) => ({
  pages: [],

  fetchPages: async () => {
    const pgs = await getPages();
    set({ pages: pgs });
  },

  addPage: async (page)=> {
    await addPage(page);
    await get().fetchPages();
  }

}));

export default usePageStore;