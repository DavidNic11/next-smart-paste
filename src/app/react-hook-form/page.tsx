"use client";

import { useForm } from "react-hook-form";
import { SmartPaste } from "../components/smart-paste/smart-paste";

export default function Home() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: Record<string, string>) => {
    // mimic the original server function behavior
    console.log({
      name: data.name,
      title: data.title,
      location: data.location,
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-8">
      <form className="space-y-6 bg-white p-6 shadow-md rounded-lg border" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-start">
          <p className="text-xl font-black">Create Contact</p>
          <SmartPaste onExtracted={reset} />
        </div>
        <input {...register("name")} placeholder="Name" className="w-full p-2 border" />
        <input {...register("title")} placeholder="Title" className="w-full p-2 border" />
        <input {...register("location")} placeholder="Location" className="w-full p-2 border" />
        <button type="submit" className="p-2 rounded bg-black text-white">
          Submit
        </button>
      </form>
    </div>
  );
}
