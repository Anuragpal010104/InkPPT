"use client";

import API from "@/lib/api";
import axios, { AxiosRequestConfig, ResponseType } from "axios";
import { useState, FormEvent } from "react";

export default function GeneratePPT() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleImagePPTFormRequest = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const formData = new FormData(e.target as HTMLFormElement);
    const images = formData.getAll("images");
    const access_token = localStorage.getItem("ink_ppt_access_token");

    if (images.length === 0) {
      setError("Please select at least one image.");
      setIsLoading(false);
      return;
    }

    const config: AxiosRequestConfig = {
      responseType: "arraybuffer" as ResponseType,
      headers: {
        Authorization: "Bearer " + access_token,
      },
    };

    try {
      const res = await axios.post(API.GENERATE_PPT, formData, config);
      if (res.data) {
        const binaryDataBuffer = res.data;
        const blob = new Blob([binaryDataBuffer], {
          type: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "presentation.pptx";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      setError("Failed to generate PPT. Please try again.");
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <form
          onSubmit={handleImagePPTFormRequest}
          className="bg-white rounded-2xl shadow-lg p-8 space-y-6"
        >
          <h1 className="text-3xl font-bold text-center text-gray-800">
            Generate Your <span className="text-blue-600">PPT</span>
          </h1>

          {error && (
            <div className="bg-red-100 text-red-700 p-3 rounded-lg text-sm text-center">
              {error}
            </div>
          )}

          <div className="space-y-5">
            <div>
              <label
                htmlFor="images"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Upload Images
              </label>
              <input
                type="file"
                name="images"
                id="images"
                multiple
                accept="image/*"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-600 hover:file:bg-blue-100 cursor-pointer"
              />
              <p className="mt-1 text-xs text-gray-500">
                Select multiple images to create your presentation
              </p>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 transition-colors duration-200 cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading ? "Generating..." : "Generate PPT"}
          </button>
        </form>
      </div>
    </div>
  );
}