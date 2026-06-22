"use client";

import Image from 'next/image';
import { useState } from 'react';
import React from 'react'
import { PiFarmLight } from "react-icons/pi";

function LoginPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isloginMethod, setIsloginMethod] = useState(true);

    const handleLogin = async () => {
        if (!email || !password) {
            alert("All fields required");
            return;
        }

        const res = await fetch("http://localhost:8080/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();


        if (!data.success) {
            alert(data.message || "Invalid credentials");
            return;
        }

        localStorage.setItem("token", data.token);

        window.location.href = '/dashboard';
    };

    const handleRegister = async () => {
        if (!email || !password || !name) {
            alert("All fields required");
            return;
        }

        try {
            const res = await fetch("http://localhost:8080/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password })
            });

            const data = await res.json();

            if (data.success) {
                alert("User Registered Successfully...")
            } else {
                alert(data.message);
            }

            if (data.success) {
                window.location.href = '/login';
            }
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div>
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-yellow-500">
                <div className="p-8 bg-white flex rounded-xl shadow-2xl ">
                    <div className="flex shadow rounded-2xl">
                        <div className="p-5 rounded-2xl">
                            <PiFarmLight className="text-5xl text-amber-500 " />
                            <div>
                                <Image
                                    src="/Assets/farmers.jpg"
                                    alt="Farmers working in a field"
                                    width={448}
                                    height={320}
                                    className="w-lg h-auto"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="p-5 w-full max-w-md rounded-2xl">

                            <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-green-400 to-green-800 bg-clip-text text-transparent animate-pulse text-center mb-6 font-serif">
                                Farmlens
                            </h1>
                            <h1 className="text-xl font-bold font-serif">{isloginMethod ? "Welcome back" : "Create an Account"}</h1>
                            <p className="text-xs text-mauve-400 font-semibold italic mb-5">{isloginMethod ? "Login to continue detecting crop diseases and managing your insights" : "Identify crop diseases early and get the right guidance to save your crops"}</p>
                            {!isloginMethod &&
                                <div className="mb-4">
                                    <label className="text-sm text-gray-600 font-semibold" htmlFor="name">Name</label>
                                    <input
                                        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                        placeholder="Enter your name"
                                        id="name"
                                        onChange={(e) => setName(e.target.value)}
                                        data-temp-mail-org="0"
                                        type="text"
                                    />
                                </div>
                            }
                            <div className="mb-4">
                                <label className="text-sm text-gray-600 font-semibold" htmlFor="email">Email</label>
                                <input
                                    className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                    placeholder="Enter your email"
                                    id="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    data-temp-mail-org="0"
                                    type="email"
                                />
                            </div>

                            <div className="mb-6">
                                <label className="text-sm text-gray-600 font-semibold" htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                                    placeholder="Enter your password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                onClick={() => { if (isloginMethod) { handleLogin() } else { handleRegister() } }}
                                className="w-full bg-gradient-to-r from-green-400 to-yellow-500 text-white py-3 rounded-lg cursor-pointer hover:bg-gradient-to-r from-green-800 to-yellow-700 transition duration-300"
                            >
                                {isloginMethod ? "Login" : "Register"}
                            </button>

                            <p className="text-center text-sm text-gray-500 mt-4">
                                {isloginMethod ? "Don't have an account?" : "Already have an account?"}{" "}
                                <span
                                    className="text-green-500 cursor-pointer"
                                    onClick={() => setIsloginMethod(!isloginMethod)}
                                >
                                    {isloginMethod ? "Register" : "Login"}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
