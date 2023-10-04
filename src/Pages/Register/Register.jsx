import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

  
const Register = () => {

/* 1st step use AuthContext */
const { createUser } = useContext(AuthContext);



  /* different way te handleRegister */
  const handleRegister = e => {
    e.preventDefault();
    // console.log(e.currentTarget)
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(form);
    // console.log(form.get("email"))
    // console.log(name, photo, email, password);
    /* 2nd step declare user */
    createUser(email, password)
    .then(result=> {
      console.log(result.user)
    })
    .catch(error=> {
      console.log(error)
    })
  }
  return (
    <div>
      <div className="">
      <Navbar></Navbar> 
      <div>
      <h2 className="text-3xl text-center my-10">Register your account</h2>
      {/* login section  */}
      <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input type="text" placeholder="Your Name" className="input input-bordered" name="name" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" placeholder="Photo Url" className="input input-bordered" name="photo" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="Password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="text-center mt-5 mb-10 text-2xl ">Already Have An Account ? <Link className="text-blue-500 font-bold text-2xl" to="/login">Login</Link></p>
      </div>
    </div>
    </div>
  );
};

export default Register;

