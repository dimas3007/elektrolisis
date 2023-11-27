import { useEffect, useState } from "react";
import HeadingContent from "../../../layouts/components/HeadingContent";
import { useDispatch, useSelector } from "react-redux";
import { formatTimestamp } from "../../../helper/helper";

import { fetchExercises } from "../../../store/ExcercisesSlice";

const HasilLatihan = () => {
  const dispatch = useDispatch();
  const exercises = useSelector((state) => state.exercises.exercisesArray);

  useEffect(() => {
    dispatch(fetchExercises());
  }, [dispatch]);

  return (
    <div>
      <HeadingContent title="Admin - Hasil Latihan" />

      <div className="main-content">
        <table>
          <thead>
            <tr>
              <td>No</td>
              <td>ID user</td>
              <td>User</td>
              <td>Nilai</td>
              <td>Tanggal</td>
            </tr>
          </thead>
          <tbody>
            {exercises.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.exercise.user_id}</td>
                <td>{item.exercise.user}</td>
                <td>{item.exercise.score}</td>
                <td>{/* {formatTimestamp(item.exercise.created_at)} */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HasilLatihan;
