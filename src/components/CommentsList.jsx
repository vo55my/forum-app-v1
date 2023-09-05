import CommentItem from "./CommentItem";
import CommentInput from "./CommentInput";

const CommentsList = ({ addComment, comments, authUser }) => {
  return (
    <div className="card my-3 border-0">
      <CommentInput addComment={addComment} />
      <h4 className="text-center my-4">
        Comments ({comments.length})
      </h4>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <CommentItem key={comment.id} authUser={authUser} {...comment} />
        ))
      ) : (
        <p className="text-center fs-5">There is no comments</p>
      )}
    </div>
  );
};

export default CommentsList;
