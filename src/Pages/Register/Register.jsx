import regBan from '../../assets/login/registerBan.png'
import { FcGoogle } from "react-icons/fc";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import './reg.css'
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
  const { googleSignIn, createUser } = useContext(AuthContext)
  const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
  const googleAuthProvider = new GoogleAuthProvider()
  const navigate = useNavigate();
  const location = useLocation();

  const handleGoogleLogin = () => {
    googleSignIn(googleAuthProvider)
    .then(res => {
      console.log(res?.user);
      navigate(location?.state ? location.state : '/');
    })
    .catch(error => {error?.message})
  }
    
    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checked = e.target.checkbox.checked;
        // const photoUrl = e.target.photourl.value; 
        console.log(name, email, password);
        setRegisterError('');
        setSuccess('');
        if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
          setRegisterError('Please write a valid email!');
          return;
        }else if(password.length < 6) {
            setRegisterError('Password must be at least 6 characters')
            return ;
        }else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
          return setRegisterError('Password must contain at least one special character')
        }else if(!/[A-Z]/.test(password)) {
            setRegisterError('Your password must have at least 1 upper case letter');
            return;
        }  else if(!checked){
            setRegisterError('Please accept our terms and conditions');
            return;
        }      
        createUser(email, password)
        .then(res => {
            console.log(res.user);
            setSuccess('Successfully Registered')
            // toast("successfully Registered");
            navigate(location?.state ? location.state : '/')
            // updateProfile(res.user, {
            //   displayName: name,
            //   photoURL: photoUrl
            // })
            .then(()=> {
              window.location.reload()
            })
            .catch(error=> console.error(error.message))
        })
        .catch(error => {
            setRegisterError(error.message);
        });
    }
    return (
        <div className="min-h-screen flex">
          <div className='flex lg:h-[500px] my-[10%] items-center mx-auto'> 
            <div className='min-h-[450px] hidden lg:flex rounded-l-xl w-[450px] shadow-md lg:justify-center lg:items-center reg-bg'>
              <img className='w-[300px] opacity-80' src={regBan} alt="" />
            </div>
            <div className="card glass shrink-0 lg:py-5 pt-5 rounded-r-xl lg:rounded-l-none rounded-l-xl md:w-[450px] md:h-[450px] bg-[#ffffff] shadow-md">
            <h1 className="font-bold text-xl md:text-xl lg:text-2xl text-center">Please Register!</h1>
              <form onSubmit={handleRegister} className="card-body">
                <div className="form-control -mt-2">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input type="email" placeholder="email" name='email' className="input input-bordered h-9" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered h-9" required />
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
                <button onClick={handleGoogleLogin} className="btn btn-outline border-none shadow-md bg-white mx-[34px] mt-2"><FcGoogle className='text-2xl'/> Continue with Google</button>
                <p className='my-4 mx-[35px]'>Already registered? Please <NavLink className='text-purple-600' to='/login'>Login</NavLink></p>
            </div>
          </div>
        </div>
    );
};

export default Register;