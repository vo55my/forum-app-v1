import { Link } from "react-router-dom";
import { AiOutlineDislike, AiTwotoneLike } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { postedAt } from "../utils";
import TagItem from "./TagItem";

const ThreadItem = ({
  id,
  title,
  body,
  category,
  createdAt,
  upVotesBy,
  downVotesBy,
  totalComments,
  user,
}) => {
  upVotesBy.reduce((val, total) => {
    return val + total;
  }, 0);

  return (
    <div className="card border-0 my-4">
      <div className="d-flex flew-row align-items-center gap-2">
        <img src={user.avatar} alt="avatar" className="rounded-circle" />
        <h4 className="card-title">{user.name}</h4>
        <span>
          ▫ {postedAt(createdAt)}
        </span>
      </div>
      <Link
        className="fs-5 text-decoration-none my-1"
        to={`/threads/${id}`}
      >
        {title}
      </Link>
      <p>{body}</p>
      <div className="my-1">
        <TagItem text={category} />
      </div>
      <div className="d-flex flex-row my-3 gap-2">
        <button className="btn btn-primary">
          <AiTwotoneLike className="" /> {upVotesBy.length}
        </button>
        <button className="btn btn-primary">
          <AiOutlineDislike className="" />{" "}
          {downVotesBy.length}
        </button>
        <button className="btn btn-primary">
          <FaRegComment className="" /> {totalComments}
        </button>
      </div>
    </div>
  );
};

export default ThreadItem;
