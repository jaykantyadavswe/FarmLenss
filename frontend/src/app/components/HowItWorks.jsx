"use client";

import Image from "next/image";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { HiOutlineUpload, HiOutlineDownload } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";
import { MdWarning } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">

      {/* Heading */}
      <h2 className="text-4xl font-bold text-center text-green-700 mb-4">
        🌿 How It Works
      </h2>

      <p className="text-center text-gray-500 mb-12">
        Detect crop diseases in 3 simple steps
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">

        {/* COMMON CARD STYLE */}
        {/* 👉 same height for all cards */}

        {/* 🔥 STEP 1 */}
        <div className="bg-white p-6 rounded-2xl shadow flex flex-col h-[520px]">

          <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white text-xl font-bold rounded-full mx-auto mb-4">
            1
          </div>

          <h3 className="text-xl font-semibold text-center mb-2">
            Upload Image
          </h3>

          <p className="text-gray-500 text-center mb-4">
            Upload or capture a clear image of the affected crop.
          </p>

          <div className="border-2 border-dashed border-green-300 p-6 rounded flex flex-col items-center gap-3 flex-1 justify-center">
            <AiOutlineCloudUpload className="w-10 h-10 text-green-500" />
            <p className="text-gray-400">Drag & Drop Image</p>

            <Image
              src="https://plus.unsplash.com/premium_photo-1687880582685-b33bbca934b2?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Healthy crop leaf preview"
              width={112}
              height={112}
              unoptimized
              className="w-28 h-28 object-cover rounded"
            />
          </div>

          <button className="mt-4 bg-green-600 text-white flex items-center justify-center gap-2 px-6 py-2 rounded hover:bg-green-700 transition">
            <HiOutlineUpload /> Choose Image
          </button>
        </div>

        {/* 🔥 STEP 2 */}
        <div className="bg-white rounded-2xl shadow flex flex-col h-[520px]">

          <div className="p-6 text-center">
            <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white text-xl font-bold rounded-full mx-auto mb-3">
              2
            </div>

            <h3 className="text-xl font-semibold text-green-700">
              AI Analysis
            </h3>

            <p className="text-gray-500 mt-2">
              Our AI analyzes the image.
            </p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="relative flex justify-center items-center">

              <div className="absolute w-44 h-44 border-4 border-green-200 rounded-full"></div>

              <div className="absolute w-44 h-44 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>

              <Image
                src="https://plus.unsplash.com/premium_photo-1687880582685-b33bbca934b2?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Crop image being analyzed"
                width={112}
                height={112}
                unoptimized
                className="w-28 h-28 object-cover rounded-full border-4 border-white shadow"
              />
            </div>
          </div>

          <div className="bg-gray-50 px-6 py-4 border-t">
            <div className="flex justify-between mb-2">
              <p className="text-sm text-gray-600">Analyzing...</p>
              <p className="text-sm text-green-600 font-semibold">75%</p>
            </div>

            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-green-500 h-2 rounded-full w-[75%]"></div>
            </div>
          </div>
        </div>

        {/* 🔥 STEP 3 (FIXED LIKE YOUR IMAGE) */}
        <div className="bg-white p-6 rounded-2xl shadow flex flex-col h-[520px]">

          <div className="w-12 h-12 flex items-center justify-center bg-green-600 text-white text-xl font-bold rounded-full mx-auto mb-4">
            3
          </div>

          <h3 className="text-xl font-semibold text-center text-green-700">
            Get Result
          </h3>

          <p className="text-gray-500 text-center mt-2 mb-4">
            Get accurate results along with treatment recommendations.
          </p>

          {/* Image + Info */}
          <div className="flex gap-4 mb-4 flex-1">

            <Image
              src="https://plus.unsplash.com/premium_photo-1687880582685-b33bbca934b2?q=80&w=1040&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Analyzed crop result preview"
              width={96}
              height={96}
              unoptimized
              className="w-24 h-24 object-cover rounded-xl"
            />

            <div className="flex flex-col justify-center gap-2 text-sm">

              <div className="flex items-center gap-2">
                <FaLeaf className="text-green-600" />
                <span><strong>Crop</strong> Tomato</span>
              </div>

              <div className="flex items-center gap-2">
                <MdWarning className="text-red-500" />
                <span className="text-red-500">
                  <strong>Disease</strong> Early Blight
                </span>
              </div>

              <div className="flex items-center gap-2">
                <BsShieldCheck className="text-green-600" />
                <span><strong>Confidence</strong> 92%</span>
              </div>

            </div>
          </div>

          {/* Solution */}
          <div className="bg-green-50 p-4 rounded-xl mb-4">
            <p className="font-semibold text-green-700 mb-1">
              🌿 Recommended Solution
            </p>
            <p className="text-sm text-gray-600">
              Remove affected leaves and apply recommended fungicide.
            </p>
          </div>

          {/* Button at bottom */}
          <button className="mt-auto w-full bg-green-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition">
            <HiOutlineDownload /> Download Report
          </button>
        </div>

      </div>

      {/* 🔥 BOTTOM FEATURES */}
      <div className="mt-16 max-w-6xl mx-auto px-6">

        <div className="bg-white rounded-2xl shadow flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x">

          {/* Feature 1 */}
          <div className="flex items-center gap-4 p-6 flex-1">
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-xl">
              🎯
            </div>
            <div>
              <h4 className="font-semibold">Accurate Detection</h4>
              <p className="text-sm text-gray-500">AI powered accuracy</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 p-6 flex-1">
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-xl">
              ⚡
            </div>
            <div>
              <h4 className="font-semibold">Instant Results</h4>
              <p className="text-sm text-gray-500">Get results in seconds</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 p-6 flex-1">
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-xl">
              🛡
            </div>
            <div>
              <h4 className="font-semibold">Smart Solutions</h4>
              <p className="text-sm text-gray-500">Expert recommended</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4 p-6 flex-1">
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-xl">
              🌱
            </div>
            <div>
              <h4 className="font-semibold">Healthy Crops</h4>
              <p className="text-sm text-gray-500">Better yield & quality</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
