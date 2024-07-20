"use client"

import API from "@/lib/api";
import axios, { AxiosRequestConfig, ResponseType } from "axios";

export default function generateppt() {

    const handleImagePPTFormRequest = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement)
        const images = formData.getAll("images")
        const access_token = localStorage.getItem("ink_ppt_access_token")
        const config: AxiosRequestConfig = {
            responseType: 'arraybuffer' as ResponseType,
            headers: {
                Authorization: 'Bearer ' + access_token
            }
        }
        try {
            const res = await axios.post(API.GENERATE_PPT,formData,config)
            if(res.data)
            {
                const binaryDataBuffer = res.data
                const blob = new Blob([binaryDataBuffer], {
                    type: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                })
                const url = window.URL.createObjectURL(blob)
                const a = document.createElement('a');
                a.href = url
                a.download = "presentation.pptx"
                document.body.appendChild(a)
                a.click()
                document.body.removeChild(a)
                URL.revokeObjectURL(url)
            }
        } catch(err) {
            console.log(err)
        }

    }

    return (
        <form className="flex flex-col mx-auto p-4 max-w-[500px] m-4 gap-4 mt-32 rounded-xl bg-white border-2" onSubmit={(e) => handleImagePPTFormRequest(e)}>
            <div className="text-center text-4xl ">Generate PPT</div>
            <input type="file" name="images" multiple className="mt-4"/>
            <button type="submit" className="bg-blue-500 py-2 px-4 mt-8 text-white rounded-lg text-xl mb-4">Generate</button>
        </form>
    );
}