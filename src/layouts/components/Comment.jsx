import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addCommentToFirestore,
  fetchComments,
} from "../../store/CommentsSlice";

const Comment = ({ page = "mind-map" }) => {
  let data = useSelector((state) => state.comments.commentsArray);
  let [comment, setComment] = useState({
    user: "titin@gmail.com",
    page: page,
    comment: "",
  });

  const dispatch = useDispatch();

  // fetch comments
  useEffect(() => {
    dispatch(fetchComments(page));
  }, [dispatch]);

  const handleComment = () => {
    dispatch(addCommentToFirestore(comment));
    setComment({ ...comment, comment: "" });
    console.log(comment);
  };

  return (
    <div className="comment-wrap">
      <div className="part-header">
        <h2>Komentar</h2>
      </div>
      <div class="comment-container">
        <textarea
          class="comment-textarea"
          placeholder="Tulis komentar Anda di sini..."
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
        >
          {comment.comment}
        </textarea>
        <button class="comment-send-button btn-green" onClick={handleComment}>
          <IoMdSend />
        </button>
      </div>
      <div className="comment-wrap-item">
        {data.map((comment) => (
          <div className="comment-item" key={comment.comment.id}>
            <div className="comment-header">
              <h2>{comment.comment.user}</h2>
              {/* <span>11 November 2023, 09:08</span> */}
            </div>
            <p>{comment.comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
