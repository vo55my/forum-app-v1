import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreadsAndLeaderboards } from "../states/shared/action";
import TagsList from "../components/TagsList";
import ThreadsList from "../components/ThreadsList";

const ThreadPage = () => {
  const { threads = [], users = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreadsAndLeaderboards());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
  }));

  return (
    <div className="container">
      <TagsList threads={threads} />
      <ThreadsList threads={threadList} />
    </div>
  );
};

export default ThreadPage;
