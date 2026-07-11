import FooterColumn from "./FooterColumn";
import {
    footerLinks,
    socialLinks,
} from "./footerData";
import {
    Leaf,
    Heart,
} from "lucide-react";

import { IconType } from "react-icons";

export default function Footer() {
    return (
        <footer className="border-t border-green-400 bg-green-50">

            <div className="mx-auto max-w-7xl px-6 py-20">

                <div className="grid gap-16 lg:grid-cols-[2fr_1fr_1fr_1fr]">

                    <div>

                        <div className="flex items-center gap-3">

                            <div className="rounded-xl bg-green-600 p-3 text-white">

                                <Leaf size={24} />

                            </div>

                            <div>

                                <h2 className="text-2xl text-green-600 font-bold">
                                    FarmLens
                                </h2>

                                <p className="text-sm text-muted-foreground">
                                    AI Powered Agriculture
                                </p>

                            </div>

                        </div>

                        <p className="mt-6 max-w-md leading-7 text-muted-foreground">

                            FarmLens helps farmers identify crop diseases,
                            receive AI-powered treatment recommendations,
                            chat with an intelligent assistant,
                            and maintain analysis history in one place.

                        </p>

                        <div className="mt-8 flex gap-4">

                            {socialLinks.map(({ icon: Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="rounded-xl border border-green-400 p-3 transition hover:bg-green-600 hover:text-white"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}

                        </div>

                    </div>

                    {footerLinks.map((section) => (
                        <FooterColumn
                            key={section.title}
                            title={section.title}
                            links={section.links}
                            href={section.href ?? []}
                        />
                    ))}

                </div>

                <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-green-500 pt-8 text-sm text-muted-foreground lg:flex-row">

                    <p>

                        &copy; 2026 FarmLens. All Rights Reserved.

                    </p>

                    <div className="flex items-center gap-2">

                        Built By

                        <Heart
                            size={16}
                            className="fill-red-500 text-red-500"
                        />

                        Jaykant-Yadav

                    </div>

                </div>

            </div>

        </footer>
    );
}