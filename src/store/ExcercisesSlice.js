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

// add excercises to firestore
export const addExerciseToFirestore = createAsyncThunk(
  "exercises/addExerciseToFirestore",
  async (exercise) => {
    exercise = {
      ...exercise,
      created_at: serverTimestamp(),
    };

    console.log(exercise);
    const addExerciseRef = await addDoc(collection(db, "Exercises"), exercise);
    const newExercise = {
      id: addExerciseRef.id,
      exercise,
    };
    return newExercise;
  }
);

// fetch Exercise
export const fetchExercises = createAsyncThunk(
  "exercises/fetchExercises",
  async (user_id) => {
    const querySnapshot = await getDocs(
      collection(db, "Exercises"),
      orderBy("created_at")
    );
    let exercises = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      exercise: doc.data(),
    }));

    exercises = exercises.filter((exercise) => {
      return exercise.exercise.user_id == user_id;
    });

    return exercises;
  }
);

export const exercisesSlice = createSlice({
  name: "Exercises",
  initialState: {
    exercisesArray: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.exercisesArray = action.payload;
      })
      .addCase(addExerciseToFirestore.fulfilled, (state, action) => {
        state.exercisesArray.push(action.payload);
      });
  },
});

export default exercisesSlice.reducer;
