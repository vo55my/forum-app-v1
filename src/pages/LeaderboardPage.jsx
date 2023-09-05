import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncPopulateUsersAndThreadsAndLeaderboards } from "../states/shared/action";
import LeaderboardUser from "../components/LeaderboardUser";

const LeaderboardPage = () => {
  const { leaderboards = [] } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreadsAndLeaderboards());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <h1 className="text-center fw-bold">
        Leaderboard
      </h1>
      <p className="text-center text-xl text-slate-200 font-medium">
        Pengguna Aktif
      </p>

      {leaderboards.map((Leaderboard, i) => (
        <LeaderboardUser
          key={Leaderboard.user.id}
          {...Leaderboard}
          num={i + 1}
        />
      ))}
    </div>
  );
};

export default LeaderboardPage;
