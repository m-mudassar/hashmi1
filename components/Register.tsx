import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
    page: string;
    setPage: any;
}

function Register({ page, setPage }: Props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    return (
        <div className="flex flex-col space-y-10 h-screen items-center justify-center rounded">

            <div className={success ? 'p-5 bg-green-600 items-center text-red-100 leading-none lg:rounded-lg lg:inline-flex' : 'hidden'} role="alert">
                <span className="font-semibold mr-2 text-left flex-auto">Registered Successfully</span>
            </div>

            <div className={error ? 'p-5 bg-red-800 items-center text-red-100 leading-none lg:rounded-lg lg:inline-flex' : 'hidden'} role="alert">
                <span className="font-semibold mr-2 text-left text-center flex-auto">Invalid email Or password <br /> Or user already exists.</span>
            </div>

            <div className="rounded-lg bg-white">
                <h1 className="border-b-2 py-5 text-center text-3xl font-semibold">
                    Register
                </h1>

                <div className="flex flex-col space-y-4 px-10">
                    <div className="flex flex-col space-y-5 pt-5">
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                onChange={(e) => { setEmail(e.target.value); setError(false); setSuccess(false); }}
                                className="w-60 border-b py-2 outline-none placeholder:text-slate-400 focus:placeholder-transparent"
                            />{' '}
                            <br />
                        </div>
                        <div>
                            <input
                                type="password"
                                placeholder="Password"
                                onChange={(e) => { setPassword(e.target.value); setError(false); setSuccess(false); }}
                                className="w-60 border-b py-2 outline-none placeholder:text-slate-400 focus:placeholder-transparent"
                                name="password"
                            />{' '}
                            <br />
                        </div>
                    </div>
                    <div className="text-xs text-slate-400 underline">
                        <Link href="/posts/first-post">
                            <a>Forgot password?</a>
                        </Link>
                    </div>
                    <button onClick={async () => { (validateForm(email, password) ? ((await registerUser(email, password) ? setSuccess(true) : (setSuccess(false), setError(true)))) : (setError(true), setSuccess(false))) }} className="rounded-full bg-green-500 text-center hover:bg-green-600">
                        <div className="p-1 font-medium text-white">
                            Register
                        </div>
                    </button>
                    <div className="pb-5 text-center">
                        <span className="4 text-xs">
                            <span className="text-slate-700">Already a member? </span>
                            <span onClick={() => { setPage('login') }}>
                                <a className="text-green-500 hover:text-green-600 cursor-pointer">Login</a>
                            </span>
                        </span>
                    </div>
                </div>
            </div>

        </div>
    )
}

function validateForm(email: string, password: string) {
    if (email.length > 0 && email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) &&
        password.length > 0) {
        return true;
    }
}

async function registerUser(email: string, password: string) {
    const response = await fetch("/api/register", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    });

    if (response.ok) {
        return true;
    }
    return false;
}

export default Register