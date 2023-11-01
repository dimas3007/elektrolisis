import React from "react";
import { IoMdSend } from "react-icons/io";

const Comment = () => {
  return (
    <div className="comment-wrap">
      <div className="part-header">
        <h2>Komentar</h2>
      </div>
      <div class="comment-container">
        <textarea
          class="comment-textarea"
          placeholder="Tulis komentar Anda di sini..."
        ></textarea>
        <button class="comment-send-button btn-green">
          <IoMdSend />
        </button>
      </div>
      <div className="comment-wrap-item">
        <div className="comment-item">
          <div className="comment-header">
            <h2>User 2</h2>
            <span>11 November 2023, 09:08</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            rerum provident minima?
          </p>
        </div>
        <div className="comment-item">
          <div className="comment-header">
            <h2>User 2</h2>
            <span>11 November 2023, 09:08</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            velit a harum temporibus odio corrupti, ipsa dolore placeat, nemo
            dolorum quibusdam quos?
          </p>
        </div>
        <div className="comment-item">
          <div className="comment-header">
            <h2>User 2</h2>
            <span>11 November 2023, 09:08</span>
          </div>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
