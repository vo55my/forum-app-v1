import RegisterInput from "../components/RegisterInput";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../states/users/action";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = async ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    let isSuccess = await dispatch(asyncRegisterUser({ name, email, password }));
    if (isSuccess) navigate('/');
  };

  return (
    <main className="d-flex justify-content-center my-5 py-5">
      <div className="align-items-center my-4">
        <h2 className="mb-4 fw-bold text-center">Register</h2>
        <RegisterInput register={onRegister} />
        <p className="mt-3">
          Dont have an account?{" "}
          <Link to="/login" className="text-decoration-none">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
