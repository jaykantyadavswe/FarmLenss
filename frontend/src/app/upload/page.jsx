"use client";

import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);

  const handleUpload = async () => {
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append("media", file);

    const res = await fetch("http://localhost:8080/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      },
      body: formData
    });

    const data = await res.json();
    setResult(data);
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">Upload Crop Image</h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={handleUpload}
        className="bg-green-500 text-white p-2 mt-4"
      >
        Upload
      </button>

      {result && (
        <div className="mt-6">
          <img src={result.imageUrl} width={200} />
          <p>Crop: {result.analysis.crop}</p>
          <p>Disease: {result.analysis.disease}</p>
          <p>Solution: {result.analysis.solution}</p>
        </div>
      )}
    </div>
  );
}