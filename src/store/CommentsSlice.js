import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

// add comment to firestore
export const addCommentToFirestore = createAsyncThunk(
  "comments/addCommentToFirestore",
  async (comment) => {
    comment = {
      ...comment,
      created_at: serverTimestamp(),
    };

    const addCommentRef = await addDoc(collection(db, "Comments"), comment);
    const newComment = {
      id: addCommentRef.id,
      comment,
    };
    return newComment;
  }
);

// fetch comments
export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async (page) => {
    const querySnapshot = await getDocs(collection(db, "Comments"));
    console.log("querySnapshot", querySnapshot);
    let comments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      comment: doc.data(),
    }));

    comments = comments.filter((comment) => {
      return comment.comment.page == page;
    });

    return comments;
  }
);

// delete comments
export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (id) => {
    const comments = await getDocs(collection(db, "Comments"));
    for (var snap of comments.docs) {
      if (snap.id === id) {
        await deleteDoc(doc(db, "Comments", snap.id));
      }
    }
    return id;
  }
);

// delete all comments
export const deleteAllComments = createAsyncThunk(
  "comments/deleteAllComments",
  async () => {
    const comments = await getDocs(collection(db, "Comments"));
    for (var snap of comments.docs) {
      await deleteDoc(doc(db, "Comments", snap.id));
    }
    return [];
  }
);

// update comment
export const updateComment = createAsyncThunk(
  "comments/updateComment",
  async (editedComment) => {
    const comments = await getDocs(collection(db, "Comments"));
    for (var snap of comments.docs) {
      if (snap.id === editedComment.id) {
        const commentRef = doc(db, "Comments", snap.id);
        await updateDoc(commentRef, editedComment.name);
      }
    }
    return editedComment;
  }
);

export const commentsSlice = createSlice({
  name: "Comments",
  initialState: {
    commentsArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.commentsArray = action.payload;
      })
      .addCase(addCommentToFirestore.fulfilled, (state, action) => {
        state.commentsArray.push(action.payload);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.commentsArray = state.commentsArray.filter(
          (comment) => comment.id !== action.payload
        );
      })
      .addCase(deleteAllComments.fulfilled, (state, action) => {
        state.commentsArray = action.payload;
      })
      .addCase(updateComment.fulfilled, (state, action) => {
        const { id, comment } = action.payload;
        const commentIndex = state.commentsArray.findIndex(
          (comment) => comment.id === id
        );
        if (commentIndex !== -1) {
          state.commentsArray[commentIndex] = { id: id, comment };
        }
      });
  },
});

export default commentsSlice.reducer;
