
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  /* 1st step declare usecontext  */
  const { createSignIn } = useContext(AuthContext);
  /* different way te handleLogin */
  const handleLogin = e => {
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    // console.log(form);
    // console.log(form.get("email"))
    const email = form.get("email");
    const password = form.get("password")
    createSignIn(email, password)
    .then(result=> {
      console.log(result.user)
    })
    .catch(error=> {
      console.log(error)
    })
  }
  return (
    <div>
      <Navbar></Navbar>
      <div>
      <h2 className="text-3xl text-center my-10">Login your account</h2>
      {/* login section  */}
      <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <p className="text-center mt-5 text-2xl ">Dont’t Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;