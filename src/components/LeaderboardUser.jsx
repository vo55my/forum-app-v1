const LeaderboardUser = ({ user, score, num }) => {
  return (
    <div className="card my-2">
      <div className="card-body d-flex flex-row align-items-center">
        <span className="fs-5 me-3">{num}.</span>
        <img src={user.avatar} alt="avatar" className="rounded-circle me-3" />
        <h4 className="fw-bold flex-grow-1">{user.name}</h4>
        <span className="fs-5 fw-bold">{score} XP</span>
      </div>
    </div>
  );
};

export default LeaderboardUser;
