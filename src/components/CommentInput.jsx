/* eslint-disable no-unused-vars */
import { IoSend } from "react-icons/io5";
import useInput from "../hooks/useInput";

const CommentInput = ({ addComment }) => {
  const [comment, setComment, handleComment] = useInput();

  return (
    <div className="d-flex">
      <input
        type="text"
        placeholder="Write your comment ..."
        value={comment}
        onChange={handleComment}
        className="w-100 me-3"
      />
      <button
        type="submit"
        onClick={() => addComment({ content: comment })}
        className="btn btn-primary"
      >
        <IoSend />
      </button>
    </div>
  );
};

export default CommentInput;
