import Image from "next/image";

interface Props {
  image: string;
}

export default function UploadPreview({
  image,
}: Props) {
  return (
    <Image
      src={image}
      alt="Preview"
      width={180}
      height={120}
      className="rounded-xl border object-cover"
    />
  );
}