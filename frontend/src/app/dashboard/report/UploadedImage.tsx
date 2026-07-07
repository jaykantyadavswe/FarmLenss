import Image from "next/image";

export default function UploadedImage() {
  return (
    <div className="rounded-2xl border overflow-hidden">

      <Image
        src="/images/history/tomato.jpg"
        alt="Crop"
        width={500}
        height={350}
        className="h-52 w-full object-cover"
      />

    </div>
  );
}