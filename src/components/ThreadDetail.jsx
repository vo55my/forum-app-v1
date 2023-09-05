/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { postedAt } from "../utils";
import { useDispatch } from "react-redux";
import { asyncUpVoteThread } from "../states/threads/action";
import TagItem from "./TagItem";
import api from "../utils/api";

const ThreadDetail = ({
  id,
  title,
  body,
  category = "",
  createdAt,
  owner,
  upVotesBy,
  downVotesBy,
  comments,
  authUser,
}) => {
  const [like, setLike] = useState(false);
  const [dislike, setDislike] = useState(false);
  const dispatch = useDispatch();
  const isUpVote = upVotesBy.includes(authUser);

  const toggleBlue = (e) => {
    e.stopPropagation();
    dispatch(asyncUpVoteThread(id));
  };

  const toggleRed = () => {
    if (like === false && dislike === false) {
      document.getElementById("redLike").classList.add("redLike");
      document.getElementById("blueLike").classList.remove("blueLike");
      setDislike(true);
    }

    if (like === false && dislike === true) {
      document.getElementById("redLike").classList.remove("redLike");
      setDislike(false);
    }

    if (like === true) {
      document.getElementById("redLike").classList.add("redLike");
      document.getElementById("blueLike").classList.remove("blueLike");
      setLike(false);
      setDislike(true);
    }
  };

  return (
    <div className="card border-0">
      <div className="d-flex flex-row align-items-center gap-2">
        <img src={owner.avatar} alt="avatar" className="rounded-circle" />
        <h4>{owner.name}</h4>
        <span>
          ▫ {postedAt(createdAt)}
        </span>
      </div>
      <h3 className="fw-bold my-3">{title}</h3>
      <p>{body}</p>
      <div className="my-3">
        <TagItem text={category} />
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-primary" onClick={toggleBlue}>
          {isUpVote ? (
            <AiTwotoneLike id="blueLike" />
          ) : (
            <AiTwotoneLike id="blueLike" />
          )}{" "}
          {upVotesBy.length}
        </button>
        <button className="btn btn-primary" onClick={toggleRed}>
          <AiTwotoneDislike id="redLike" />{" "}
          {downVotesBy.length}
        </button>
      </div>
    </div>
  );
};

export default ThreadDetail;
