import Image from "next/image";

interface Props {
  image: string;
}

export default function CropImage({
  image,
}: Props) {
  return (
    <div className="overflow-hidden rounded-2xl border">

      <Image
        src={image}
        alt="Crop"
        width={500}
        height={350}
        className="h-60 w-full object-cover transition duration-300 hover:scale-105"
      />

    </div>
  );
}