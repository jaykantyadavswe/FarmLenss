"use client";

import { Star } from "lucide-react";

import { useState } from "react";

export default function FavoriteButton() {

    const [favorite, setFavorite] =

        useState(false);

    return (

        <button

            onClick={() =>

                setFavorite(!favorite)

            }

            className="rounded-lg border p-2 hover:bg-yellow-50"

        >

            <Star

                size={18}

                className={favorite

                    ? "fill-yellow-400 text-yellow-400"

                    : ""

                }

            />

        </button>

    );

}