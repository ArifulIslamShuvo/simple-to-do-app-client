import React from 'react';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <div>
            <div>
                <h1>This is Login page</h1>
                <div className='flex h-screen justify-center items-center'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="text-center text-2xl font-bold">Login</h2>
                            <button className="btn btn-outline btn-primary"
                            ><FcGoogle className='mr-1' /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;