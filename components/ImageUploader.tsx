"use client";

import { useDropzone } from "react-dropzone";

import { supabase } from "@/lib/supabase";

type Props = {
  onUpload: (url: string) => void;
};

export default function ImageUploader({
  onUpload,
}: Props) {

  async function uploadFile(file: File) {

    const fileName =
      `${Date.now()}-${file.name}`;

    const { error } = await supabase
      .storage
      .from("portfolio")
      .upload(fileName, file);

    if (error) {
      alert("Upload failed");
      return;
    }

    const { data } = supabase
      .storage
      .from("portfolio")
      .getPublicUrl(fileName);

    onUpload(data.publicUrl);
  }

  const { getRootProps, getInputProps } =
    useDropzone({
      onDrop: (acceptedFiles) => {

        if (acceptedFiles[0]) {
          uploadFile(acceptedFiles[0]);
        }

      },
    });

  return (
    <div
      {...getRootProps()}
      className="border-2 border-dashed border-gray-600 p-10 rounded-2xl text-center cursor-pointer bg-gray-900"
    >

      <input {...getInputProps()} />

      <p className="text-gray-400">
        Drag & Drop Image Here
      </p>

    </div>
  );
}