"use client";

import { ShieldCheck, Lock, Smartphone } from "lucide-react";

export default function SecuritySection() {

    return (

        <section className="rounded-3xl border bg-white p-8 shadow-sm">

            <div className="mb-8 flex items-center gap-3">

                <div className="rounded-xl bg-blue-100 p-3">

                    <ShieldCheck className="text-blue-600"/>

                </div>

                <div>

                    <h2 className="text-2xl font-bold">
                        Security
                    </h2>

                    <p className="text-zinc-500">
                        Protect your FarmLens account.
                    </p>

                </div>

            </div>

            <div className="space-y-5">

                <Card
                    icon={<Lock size={20}/>}
                    title="Change Password"
                    subtitle="Last updated 3 months ago"
                />

                <Card
                    icon={<Smartphone size={20}/>}
                    title="Two-Factor Authentication"
                    subtitle="Disabled"
                />

                <Card
                    icon={<ShieldCheck size={20}/>}
                    title="Active Sessions"
                    subtitle="2 devices signed in"
                />

            </div>

        </section>

    );

}

function Card({
    icon,
    title,
    subtitle,
}: any) {

    return (

        <button className="flex w-full items-center justify-between rounded-2xl border p-5 hover:bg-zinc-50" id="security">

            <div className="flex items-center gap-4">

                <div className="rounded-xl bg-zinc-100 p-3">

                    {icon}

                </div>

                <div className="text-left">

                    <h3 className="font-semibold">
                        {title}
                    </h3>

                    <p className="text-sm text-zinc-500">
                        {subtitle}
                    </p>

                </div>

            </div>

        </button>

    );

}