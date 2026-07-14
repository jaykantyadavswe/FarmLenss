"use client";

import { useState } from "react";
import AnalysisPreview from "../components/analysiscrop/AnalysisPreview";
import CropImageUpload from "../components/analysiscrop/CropImageUpload";
import Discription from "../components/analysiscrop/Discription";
import ResultDetails from "../components/analysiscrop/ResultDetails";
import api from '@/lib/api.js';


export default function DashboardPage() {
  const [image, setImage] = useState<File | null>(null);
  const [cropType, setCropType] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-12 gap-6 p-6">

        <div className="col-span-12 lg:col-span-4">
          <CropImageUpload 
          image = {image}
          setImage = {setImage}
          cropType = {cropType}
          setCropType = {setCropType}
          />
        </div>

        <div className="col-span-12 lg:col-span-4">
          <AnalysisPreview 
          image = {image}
          cropType={cropType}
          loading = {loading}
          setLoading = {setLoading}
          setResult = {setResult}
          />
        </div>
        <div className="col-span-12 lg:col-span-4">
          <ResultDetails 
          result = {result}
          loading = {loading}
          />
        </div>

        <div className="lg:col-span-12">
          <Discription />
        </div>
      </div>
    </div>


  );
}