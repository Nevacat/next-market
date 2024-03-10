import uploadImage from "@/helper/upLoader";
import { cn } from "@/lib/util";
import { CldUploadWidget, CloudinaryUploadWidgetInfo, CloudinaryUploadWidgetResults } from "next-cloudinary";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";

interface ImageUploadProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const ImageUpload = ({ value, onChange }: ImageUploadProps) => {
  const upoloadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const handleUpload = (value:any)=>{
    onChange(value)
  }
  return (
    <CldUploadWidget
      uploadPreset="ld4p96eq"
      onSuccess={(result:any, { widget }) => {
        handleUpload(result?.info?.secure_url);
        widget.close();
      }}
    >
      {({ open }) => {
        function handleOnClick(e: React.MouseEvent<HTMLDivElement>) { 
          e.preventDefault();
          open();
        }
        return (
          <div  onClick={handleOnClick}
            className={cn("relative flex flex-col items-center justify-center gap-4 p-40 border-2 border-dashed cursor-pointer border-neutral-300 text-neutral-300")}
          >
            <TbPhotoPlus size={50} />
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image src={value} alt="image" fill style={{objectFit:'cover'}}/>
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
