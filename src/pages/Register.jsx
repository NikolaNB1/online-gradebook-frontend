import { useState } from "react";
import { registerUser } from "../service/usersService";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    image_url: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(
      user.first_name,
      user.last_name,
      user.email,
      user.password,
      user.image_url
    );
    setUser({
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      image_url: "",
    });
  };

  const handelInputChange = (event) => {
    const { name, value } = event.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  return (
    <div>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div
              className="card"
              style={{
                borderRadius: "1rem",
                opacity: "90%",
                width: "1000px",
              }}
            >
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://e1.pxfuel.com/desktop-wallpaper/462/462/desktop-wallpaper-elementary-school-backgrounds-elementary-school-thumbnail.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{
                      borderRadius: "1rem 0 0 1rem",
                      height: "-webkit-fill-available",
                    }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form
                      onSubmit={(e) => {
                        handleSubmit(e);
                        navigate("/login");
                      }}
                    >
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Register</span>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First name"
                          name="first_name"
                          onChange={handelInputChange}
                          value={user.first_name}
                        />
                        <label>First name</label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last name"
                          name="last_name"
                          onChange={handelInputChange}
                          value={user.last_name}
                        />
                        <label>Last name</label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="name@example.com"
                          name="email"
                          onChange={handelInputChange}
                          value={user.email}
                        />
                        <label>Email address</label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          onChange={handelInputChange}
                          value={user.password}
                          placeholder="Password"
                        />
                        <label>Password</label>
                      </div>

                      <div className="form-floating mb-4">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Image url"
                          name="image_url"
                          onChange={handelInputChange}
                          value={user.image_url}
                        />
                        <label>Image url</label>
                      </div>

                      <div className="pt-1 mb-4 text-center">
                        <button
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center" style={{ color: "#393f81" }}>
                        Already have an account?
                        <Link to="/login" style={{ color: "#393f81" }}>
                          Login here
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
