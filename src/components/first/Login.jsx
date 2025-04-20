import { useForm } from "react-hook-form";
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
// import { UserContext } from "./UserContext";
// import { UserContext } from "./UserContext"; // 👈 import UserContext
import { UserContext } from "./UserContext"; // 👈 import UserContext

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { setUser } = useContext(UserContext); // 👈 get setUser from context
  const [loginErr, setLoginErr] = useState(null);
  const redirectMessage = location.state?.message;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate(`/catalog/${user.username}`);
    }
  }, [navigate]);

  const handleUserLogin = ({ username, password }) => {
    fetch(`http://localhost:3000/users?username=${username}&password=${password}`)
      .then((res) => res.json())
      .then((usersList) => {
        if (usersList.length !== 0) {
          const user = usersList[0];
          localStorage.setItem("user", JSON.stringify(user));
          setUser(user); // 👈 update context too
          navigate(`/catalog/${user.username}`);
        } else {
          setLoginErr({ message: "Invalid username or password" });
        }
      })
      .catch(() => {
        setLoginErr({ message: "Login failed. Please try again." });
      });
  };

  return (
    <div>
      <h1 className="display-3 text-center text-secondary">User Login</h1>

      {redirectMessage && (
        <div className="alert alert-info text-center fs-5 w-50 mx-auto">
          {redirectMessage}
        </div>
      )}

      {loginErr && (
        <p className="text-warning text-center fs-4">{loginErr.message}</p>
      )}

      <form className="w-50 mx-auto mt-5" onSubmit={handleSubmit(handleUserLogin)}>
        <div className="mb-3">
          <label className="form-label text-light" htmlFor="un">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            id="un"
            className="form-control"
          />
          {errors.username && <p className="text-danger">{errors.username.message}</p>}
        </div>

        <div className="mb-3">
          <label className="form-label text-light" htmlFor="pw">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            id="pw"
            className="form-control"
          />
          {errors.password && <p className="text-danger">{errors.password.message}</p>}
        </div>

        <button className="btn btn-outline-info d-block mx-auto" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
