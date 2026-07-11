"use client";

import {
    Trash2,
    LogOut,
} from "lucide-react";

export default function DangerZone() {

    return (

        <section className="rounded-3xl border border-red-200 bg-red-50 p-8" id="danger">

            <h2 className="text-2xl font-bold text-red-600">
                Danger Zone
            </h2>

            <p className="mt-2 text-red-500">
                These actions cannot be undone.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

                <button className="flex items-center gap-2 rounded-xl bg-red-600 px-6 py-3 text-white">

                    <Trash2 size={18}/>

                    Delete Account

                </button>

                <button className="flex items-center gap-2 rounded-xl border border-red-300 px-6 py-3 text-red-600">

                    <LogOut size={18}/>

                    Logout

                </button>

            </div>

        </section>

    );

}