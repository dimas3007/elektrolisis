import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

//get current user like
export const getCurrentUserLike = createAsyncThunk(
  "likes/getCurrentUserLike",
  async (like) => {
    const querySnapshot = await getDocs(collection(db, "Likes"));
    let likes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      like: doc.data(),
    }));

    likes = likes.filter((item) => {
      return item.user_id === like.user_id && item.page === like.page;
    });

    return likes;
  }
);

// add likes to firestore
export const addLikeToFirestore = createAsyncThunk(
  "likes/addLikeToFirestore",
  async (like) => {
    const querySnapshot = await getDocs(collection(db, "Likes"));
    let likes = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      like: doc.data(),
    }));

    likes = likes.filter((item) => {
      return item.user_id === like.user_id && item.page === like.page;
    });

    console.log("LIKES", likes);

    if (!likes.length) {
      const addLikeRef = await addDoc(collection(db, "Likes"), like);
      const newLike = {
        id: addLikeRef.id,
        like,
      };
      return newLike;
    }
  }
);

// fetch likes
export const fetchLikes = createAsyncThunk("likes/fetchLikes", async (page) => {
  const querySnapshot = await getDocs(collection(db, "Likes"));
  let likes = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    like: doc.data(),
  }));

  likes = likes.filter((like) => {
    return like.like.page == page;
  });
  return likes;
});

export const likesSlice = createSlice({
  name: "Likes",
  initialState: {
    likesArray: [],
    likesUser: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurrentUserLike.fulfilled, (state, action) => {
        state.likesUser = action.payload;
      })
      .addCase(fetchLikes.fulfilled, (state, action) => {
        state.likesArray = action.payload;
      })
      .addCase(addLikeToFirestore.fulfilled, (state, action) => {
        if (action.payload) {
          state.likesArray.push(action.payload);
        }
      });
  },
});

export default likesSlice.reducer;
