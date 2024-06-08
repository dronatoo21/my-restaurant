import regBan from '../../assets/login/registerBan.png'
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import './reg.css'

const Register = () => {
    return (
        <div className="min-h-screen flex">
          <div className='flex lg:h-[500px] my-[10%] items-center mx-auto'> 
            <div className='min-h-[450px] hidden lg:flex rounded-l-xl w-[450px] shadow-md lg:justify-center lg:items-center reg-bg'>
              <img className='w-[300px] opacity-80' src={regBan} alt="" />
            </div>
            <div className="card glass shrink-0 lg:py-5 pt-5 rounded-r-xl lg:rounded-l-none rounded-l-xl md:w-[450px] md:h-[450px] bg-[#ffffff] shadow-md">
            <h1 className="font-bold text-xl md:text-xl lg:text-2xl text-center">Please Register!</h1>
              <form className="card-body">
                <div className="form-control -mt-2">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered h-9" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered h-9" required />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
                </div>
                <div className="form-control mt-6 gap-2">
                  <button className="btn btn-sm -mt-5 btn-outline border-gray-600">Register</button>
                </div>
              </form>
                <div className='flex items-center justify-center gap-5 -mt-5'>
                    <hr className='border-t-2 w-[20%]'/>
                    <span>or</span>
                    <hr className='border-t-2 w-[20%]'/>
                </div>
                <button className="btn btn-outline border-none shadow-md bg-white mx-[34px] mt-2"><FcGoogle className='text-2xl'/> Continue with Google</button>
                <p className='my-4 mx-[35px]'>Already registered? Please <NavLink className='text-purple-600' to='/login'>Login</NavLink></p>
            </div>
          </div>
        </div>
    );
};

export default Register;