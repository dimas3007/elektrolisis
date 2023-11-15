import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

//get current donwload download
export const getCurrentUserDownload = createAsyncThunk(
  "downloads/getCurrentUserDownload",
  async (download) => {
    const querySnapshot = await getDocs(collection(db, "Downloads"));
    let downloads = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      download: doc.data(),
    }));

    downloads = downloads.filter((item) => {
      return item.user_id === download.user_id && item.page === download.page;
    });

    return downloads;
  }
);

// add downloads to firestore
export const addDownloadToFirestore = createAsyncThunk(
  "downloads/addDownloadToFirestore",
  async (download) => {
    const querySnapshot = await getDocs(collection(db, "Downloads"));
    let downloads = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      download: doc.data(),
    }));

    downloads = downloads.filter((item) => {
      return item.user_id === download.user_id && item.page === download.page;
    });

    if (!views.length) {
      const addDownloadRef = await addDoc(
        collection(db, "Downloads"),
        download
      );
      const newDownload = {
        id: addDownloadRef.id,
        download,
      };
      return newDownload;
    }
  }
);

// fetch download
export const fetchDownloads = createAsyncThunk(
  "downloads/fetchDownloads",
  async (page) => {
    const querySnapshot = await getDocs(collection(db, "Downloads"));
    let downloads = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      download: doc.data(),
    }));

    downloads = downloads.filter((download) => {
      return download.download.page == page;
    });
    return downloads;
  }
);

export const downloadsSlice = createSlice({
  name: "Downloads",
  initialState: {
    downloadsArray: [],
    downloadsUser: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserDownload.fulfilled, (state, action) => {
        state.downloadsUser = action.payload;
      })
      .addCase(fetchDownloads.fulfilled, (state, action) => {
        state.downloadsArray = action.payload;
      })
      .addCase(addDownloadToFirestore.fulfilled, (state, action) => {
        if (action.payload) {
          state.downloadsArray.push(action.payload);
        }
      });
  },
});

export default downloadsSlice.reducer;
