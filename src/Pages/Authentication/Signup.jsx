import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProviders";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
const imageHostingToken = import.meta.env.VITE_IMGBB_KEY;

const Signup = () => {
    const { createUser, updateUserProfile, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // use from hook here
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    // show and hide password state here
    const [showPassword, setShowPassword] = useState(false);
    const [showCnfPassword, setShowCnfPassword] = useState(false);
    const password = watch("password");



    const imagHostingUrl = `https://api.imgbb.com/1/upload?&key=${imageHostingToken}`;
    const onSubmit = data => {
        console.log(data);

        const formData = new FormData();
        formData.append('image', data.image[0]);
        fetch(imagHostingUrl, {
            method: "POST",
            body: formData
        }).then(res => res.json()).then(imgRes => {

            if (imgRes.success) {
                const imgurl = imgRes.data.display_url;
                const { name, email, password } = data;
                console.log("Image Hosting URL :" , imgurl);
                createUser(email, password).then((logedUser) => {
                    const newlyCreatedUser = logedUser.user;
                    console.log(newlyCreatedUser);
                    updateUserProfile(name, imgurl).then(() => {
                        const userDetails = {
                            name,
                            email,
                            profile_pic: imgurl,
                            role: 'user',
                            password
                        }
                        /********Insert user details in the database********/

                        fetch('http://localhost:5000/adduser', {
                            method: "POST",
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(userDetails)
                        }).then(res => res.json())
                            .then(data => {
                                reset();
                                logout();
                                console.log(data)
                                Swal.fire({
                                    icon: 'success',
                                    title: 'Account create successfully',
                                })
                                navigate("/login", { replace: true });
                            });


                    }).catch((error) => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: `${error}`,
                        })
                    });

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
        })
    };


    return (
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full">

                <div className="card-body border-2 border-primary shadow-lg rounded-2xl lg:w-1/2 mx-auto">
                    <div className="divider text-2xl font-bold">Sign Up</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="Name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-xs w-full " />
                            {errors.image && <span className="text-red-500">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="flex g-2">
                                <input type={showPassword ? "text" : "password"} {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-=_+{};':"\\|,.<>/?]).+$/
                                })} placeholder="password" className="input input-bordered w-full" />


                                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>


                            {errors.password?.type === 'minLength' && <p className="text-red-500">Password Must be 6 Charecter Long</p>}
                            {errors.password?.type === 'pattern' && <p className="text-red-500">Password must have one uppercase lowercase symbol and number</p>}
                            {errors.password?.type === 'required' && <span className="text-red-500">This field is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>


                            <div className="flex gap-2">
                                <input type={showCnfPassword ? "text" : "password"} {...register("confirmPassword", {
                                    required: true,
                                    validate: value => value === password || "Passwords do not match"
                                })} placeholder="Confirm password" className="input input-bordered w-full" />


                                <button type="button" onClick={() => setShowCnfPassword(!showCnfPassword)}>
                                    {showCnfPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>

                            </div>


                            {errors.confirmPassword?.type === 'required' && <span className="text-red-500">This field is required</span>}
                            {errors.confirmPassword?.type === 'validate' && (
                                <span className="text-red-500">{errors.confirmPassword.message}</span>
                            )}
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-r from-primary to-[#a965c8] hover:from-purple-700 hover:to-indigo-700 text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline transition-all  duration-300 delay-100 rounded-full">Sign Up</button>
                        </div>

                        <p className="mt-3 space-x-2">
                            Already Have an account?
                            <Link className="text-blue-600 underline" to="/login">Login</Link>
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;