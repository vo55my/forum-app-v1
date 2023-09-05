/* eslint-disable no-unused-vars */
import { postedAt } from "../utils";
import { AiOutlineDislike, AiTwotoneLike } from "react-icons/ai";

const CommentItem = ({
  owner,
  content,
  createdAt,
  upVotesBy,
  downVotesBy,
}) => {
  return (
    <div className="mb-4">
      <div className="d-flex align-items-center gap-2">
        <img src={owner.avatar} alt="halo" className="rounded-circle" />
        <h4>{owner.name}</h4>
        <span className="font-normal text-slate-400 text-xs">
          ▫ {postedAt(createdAt)}
        </span>
      </div>
      <div className="mt-2">
        <p>{content}</p>
      </div>
      <div className="d-flex gap-2">
        <button className="btn btn-primary">
          <AiTwotoneLike /> {upVotesBy.length}
        </button>
        <button className="btn btn-primary">
          <AiOutlineDislike />{" "}
          {downVotesBy.length}
        </button>
      </div>
    </div>
  );
};

export default CommentItem;
