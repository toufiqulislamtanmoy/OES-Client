import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProviders";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
const Login = () => {
    const { register, watch, handleSubmit, formState: { errors } } = useForm();
    const location = useLocation();
    const { loginUser, googleLogin, forgetPassword } = useContext(AuthContext);
    // console.log(location);
    const destination = location.state?.from?.pathname || "/"
    const navigate = useNavigate();



    // handel google login
    const handelgoogleLogin = () => {
        googleLogin().then((loggedInUser) => {
            // Signed in 
            const user = loggedInUser.user;
            console.log(user);

            const saveUser = {
                name: user.displayName,
                email: user.email,
                profile_pic: user.photoURL,
                role: "user"
            }
            fetch("http://localhost:5000/adduser", {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(saveUser)
            }).then(res => res.json()).then(data => {
                console.log(data);
                if (data.insertedId || data.message) {
                    navigate(destination, { replace: true })
                    console.log(destination);
                    Swal.fire({
                        icon: 'success',
                        title: 'Login successfully',
                        showConfirmButton: true,

                    })

                }
            })
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Message: ", errorMessage, "Error Code: ", errorCode);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            });
    }



    // Login with email and password
    const onSubmit = data => {
        console.log(data);

        loginUser(data.email, data.password).then((loggedInUser) => {
            // Signed in 
            const user = loggedInUser.user;
            console.log(user);
            navigate(destination, { replace: true })
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful',
                // title: `${destination}`,
                showConfirmButton: true,
            })
            // ...
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error Message: ", errorMessage, "Error Code: ", errorCode);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            });
    }


    const handaleForgetPassword = () => {
        const email = watch('email');
        console.log(email);
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "Email Not Found",
            })
            return;
        }
        forgetPassword(email).then(() => {
            Swal.fire({
                icon: 'success',
                title: `Check your email ${email} To reset the password`,
            })
        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${errorMessage} - ${errorCode}`,
                })
            });

    }
    return (
        <div className="hero min-h-screen my-16 lg:my-0">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card flex-shrink-0 w-full ">
                    <div className="card-body border-2 border-primary shadow-lg rounded-2xl">
                        <h1 className="text-3xl font-semibold">Login</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="text" placeholder="email" className="input input-bordered" />
                                {errors.email && <span className="text-red-500">This field is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input {...register("password", { required: true })} type="password" placeholder="password" className="input input-bordered" />
                                {errors.password && <span className="text-red-500">This field is required</span>}
                                <label className="label ">
                                    <a onClick={handaleForgetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    <p className="text-xs mx-2">
                                        Don't Have Account <Link className="btn-link" to="/signup">Create New</Link>
                                    </p>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-gradient-to-r from-primary to-[#a965c8] hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100 rounded-full">Login</button>
                            </div>
                        </form>
                        <div className="divider">OR</div>
                        <div>
                            <button onClick={handelgoogleLogin} className="btn w-full my-1 bg-transparent border-2 border-gray-300"><FcGoogle className="text-2xl" /> Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;