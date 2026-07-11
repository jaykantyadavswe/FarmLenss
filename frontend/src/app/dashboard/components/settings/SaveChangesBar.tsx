"use client";

export default function SaveChangesBar() {

    return (

        <div className="sticky bottom-0 z-50 border-t bg-white/90 backdrop-blur">

            <div className="mx-auto flex max-w-7xl items-center justify-end gap-4 p-5">

                <button className="rounded-xl border px-6 py-3 hover:bg-zinc-100">

                    Cancel

                </button>

                <button className="rounded-xl bg-green-600 px-6 py-3 font-medium text-white hover:bg-green-700">

                    Save Changes

                </button>

            </div>

        </div>

    );

}