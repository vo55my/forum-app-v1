import LoginInput from "../components/LoginInput";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncSetAuthUser } from "../states/authUser/action";

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <main className="d-flex justify-content-center my-5 py-5">
      <div className="align-items-center my-5 py-4">
        <h2 className="mb-4 fw-bold text-center">Login</h2>
        <LoginInput login={onLogin} />
        <p className="mt-3">
          Already have an account?{" "}
          <Link to="/register" className="text-decoration-none">
            Register here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
