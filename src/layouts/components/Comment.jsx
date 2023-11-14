import React, { useEffect, useState } from "react";
import { IoMdSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { formatTimestamp } from "../../helper/helper";
import {
  addCommentToFirestore,
  fetchComments,
} from "../../store/CommentsSlice";

const Comment = ({ page = "mind-map" }) => {
  const users = useSelector((state) => state.users.usersArray);

  let data = useSelector((state) => state.comments.commentsArray);
  let [comment, setComment] = useState({
    user_id: users.uid,
    user: users.email,
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
    setComment({ comment: "" });
  };

  return (
    <div className="comment-wrap">
      <div className="part-header">
        <h2>Komentar</h2>
      </div>
      <div class="comment-container">
        <textarea
          id="comment"
          class="comment-textarea"
          placeholder="Tulis komentar Anda di sini..."
          onChange={(e) => setComment({ ...comment, comment: e.target.value })}
          value={comment.comment}
        ></textarea>
        <button class="comment-send-button btn-green" onClick={handleComment}>
          <IoMdSend />
        </button>
      </div>
      <div className="comment-wrap-item">
        {data.map((comment) => (
          <div className="comment-item" key={comment.comment.id}>
            <div className="comment-header">
              <h2>{comment.comment.user}</h2>
              <span>{formatTimestamp(comment.comment.created_at)}</span>
            </div>
            <p>{comment.comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
