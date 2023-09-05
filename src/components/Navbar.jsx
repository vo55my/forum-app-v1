import { Link } from "react-router-dom";
import { PiWechatLogoBold } from "react-icons/pi";
import { MdOutlineLeaderboard, MdOutlinePostAdd } from "react-icons/md";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = ({ authUser, logout }) => {
  const { name, avatar } = authUser;

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <div className="navbar-brand d-flex flex-row align-items-center">
            <img
              src={avatar}
              alt={name}
              title={name}
              className="rounded-circle w-25"
            />
            <span className="text-dark ms-3">Welcome, {name}</span>
          </div>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link" to="/">
              <li className="nav-item">
                <PiWechatLogoBold className="" /> Threads
              </li>
            </Link>
            <Link className="nav-link" to="/leaderboard">
              <li className="nav-item">
                <MdOutlineLeaderboard className="" /> Leaderboards
              </li>
            </Link>
            <Link className="nav-link" to="/create">
              <li className="nav-item">
                <MdOutlinePostAdd className="" /> Create
              </li>
            </Link>
          </ul>
        </div>
        <div className="d-flex">
          <button
            onClick={logout}
            title="Logout"
            className="btn btn-danger rounded"
          >
            <AiOutlineLogout className="fs-5" />
          </button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
