import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

//get current user view
export const getCurrentUserView = createAsyncThunk(
  "views/getCurrentUserView",
  async (view) => {
    const querySnapshot = await getDocs(collection(db, "Views"));
    let views = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      view: doc.data(),
    }));

    views = views.filter((item) => {
      return item.user_id === view.user_id && item.page === view.page;
    });

    return views;
  }
);

// add view to firestore
export const addViewToFirestore = createAsyncThunk(
  "views/addLikeToFirestore",
  async (view) => {
    const querySnapshot = await getDocs(collection(db, "Views"));
    let views = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      view: doc.data(),
    }));

    views = views.filter((item) => {
      return item.user_id === view.user_id && item.page === view.page;
    });

    if (!views.length) {
      const addViewRef = await addDoc(collection(db, "Views"), view);
      const newView = {
        id: addViewRef.id,
        view,
      };
      return newView;
    }
  }
);

// fetch views
export const fetchViews = createAsyncThunk("views/fetchViews", async (page) => {
  const querySnapshot = await getDocs(collection(db, "Views"));
  let views = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    view: doc.data(),
  }));

  views = views.filter((view) => {
    return view.view.page == page;
  });

  return views;
});

export const viewsSlice = createSlice({
  name: "Views",
  initialState: {
    viewsArray: [],
    viewsUser: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserView.fulfilled, (state, action) => {
        state.viewsUser = action.payload;
      })
      .addCase(fetchViews.fulfilled, (state, action) => {
        state.viewsArray = action.payload;
      })
      .addCase(addViewToFirestore.fulfilled, (state, action) => {
        if (action.payload) {
          state.viewsArray.push(action.payload);
        }
      });
  },
});

export default viewsSlice.reducer;
