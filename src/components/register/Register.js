import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../useHooks/useAuth";

const Register = () => {
  const { signUpWithEmail, singInWithGoogle, setUser, seterror, setisLoading } =
    useAuth();
  const location = useLocation();
  console.log(location.state?.from);
  const history = useHistory();
  const redirec_url = `${location.state?.from.pathname || "/"}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    signUpWithEmail(data.email, data.password, data.name, data.phone, history);
    reset();
  };
  const googleSingIn = () => {
    singInWithGoogle()
      .then((result) => {
        setUser(result.user);
        // console.log(result.user);
        history.push(redirec_url);
      })
      .catch((error) => {
        seterror(error.message);
      })
      .finally(() => {
        setisLoading(false);
      });
  };
  return (
    <div className="container-fluid" style={{ marginBottom: "51px" }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="row"
        style={{ marginTop: "90px" }}
      >
        <div className="col-md-3 my-2 col-10 mx-auto">
          <h2 className="text-center">
            <span className="text-danger"> Create</span> an Accoutnt
          </h2>
          <hr className="mx-auto w-75 text-danger" />
        </div>
        <div className="w-100"></div>
        <div className="col-md-3 my-2 col-10 mx-auto">
          <input
            className="w-100 form-control"
            type="text"
            {...register("name", { required: true })}
            defaultValue=""
            placeholder=" Your Name"
          />
          {errors.name?.type === "required" && (
            <p className="text-danger m-0"> Name is required</p>
          )}
        </div>
        <div className="w-100"></div>

        <div className="col-md-3 my-2 col-10 mx-auto">
          <input
            className="w-100 form-control"
            type="email"
            defaultValue=""
            {...register("email", {
              required: true,
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid.",
              },
            })}
            placeholder=" Your Email"
          />
          {errors.email?.type === "required" ? (
            <p className="text-danger m-0"> email is required</p>
          ) : (
            errors.email && (
              <p className="errorMsg m-0">{errors.email.message}</p>
            )
          )}
        </div>
        <div className="w-100"></div>
        <div className="col-md-3 my-2 col-10 mx-auto">
          <input
            className="w-100 form-control"
            type="password"
            {...register("password", {
              required: true,
              minLength: {
                value: 6,
                message: "Password should be at-least 6 characters.",
              },
            })}
            placeholder=" Your Password"
          />
          {errors.password?.type === "required" ? (
            <p className="text-danger m-0"> password is required</p>
          ) : (
            errors.password && (
              <p className="errorMsg text-danger m-0">
                {errors.password.message}
              </p>
            )
          )}
        </div>
        <div className="w-100"></div>
        <div className="col-md-3 my-2 col-10 mx-auto">
          <input
            type="submit"
            value="Sign up"
            className="btn btn-danger w-100"
          />
        </div>
        <div className="w-100"></div>
      </form>
      <div className="row">
        <div className="col-md-3 my-2 col-10 mx-auto">
          <button onClick={googleSingIn} class="btn btn-danger w-100">
            <FontAwesomeIcon
              className="text-white me-2"
              icon={faGoogle}
              size="lg"
            />
            Google Sign In
          </button>
        </div>
        <div className="w-100"></div>
        <div className="col-md-3 my-2 col-10 mx-auto">
          <Link
            to="/login"
            className="text-decoration-none text-danger text-center"
          >
            <p>Already have a Accoutnt?</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
