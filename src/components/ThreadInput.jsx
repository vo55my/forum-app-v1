import { useState } from "react";
import { useDispatch } from "react-redux";
import { asyncAddThread } from "../states/threads/action";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";

const ThreadInput = () => {
  const [title, setTitle, handleTitle] = useInput();
  const [category, setCategory, handleCategory] = useInput();
  const [body, setBody] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function addThread(e) {
    e.preventDefault();
    dispatch(asyncAddThread({ title, body, category }));
    setTitle("");
    setCategory("");
    setBody("");
    navigate("/");
  }

  return (
    <div className="row row-cols-1">
      <div className="col">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={handleTitle}
          className="w-100 my-1"
        />
      </div>
      <div className="col">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={handleCategory}
          className="w-100 my-1"
        />
      </div>
      <div className="col">
        <div
          className="w-100 h-100 my-1 border mb-5"
          value={body}
          onInput={(e) => setBody(e.target.innerHTML)}
          contentEditable
        ></div>
      </div>
      <div className="col my-4">
        <button
          onClick={addThread}
          className="btn btn-primary"
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default ThreadInput;
