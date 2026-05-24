"use client";

import { useState, useEffect } from 'react';

function ProfilePage() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:8080/profile", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const data = await res.json();
            setUser(data);
        };
        fetchProfile();
    }, []);

    return (
        <div className="p-10">
            <h1 className="text-xl font-bold">Profile</h1>
            {user && <p>{user.name}</p>}
        </div>
    )
}

export default ProfilePage;