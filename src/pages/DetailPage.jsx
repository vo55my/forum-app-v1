/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { asyncReceiveThreadDetail } from "../states/threadDetail/action";
import { asyncAddComment } from "../states/threadComment/action";
import ThreadDetail from "../components/ThreadDetail";
import CommentsList from "../components/CommentsList";

const DetailPage = () => {
  const { id } = useParams();
  const { detailThread = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onAddComment = ({ content }) => {
    dispatch(asyncAddComment({ content }));
    dispatch(asyncReceiveThreadDetail(id));
  };

  if (!detailThread) {
    return null;
  }

  return (
    <div className="container mt-3">
      <ThreadDetail {...detailThread} authUser={authUser.id} />
      <CommentsList
        addComment={onAddComment}
        comments={detailThread.comments}
        threadId={detailThread.id}
        authUser={authUser ? authUser.id : null}
      />
    </div>
  );
};

export default DetailPage;
