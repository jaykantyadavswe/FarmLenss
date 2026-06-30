interface Props {
  crop: string;
  disease: string;
}

export default function CropInfo({
  crop,
  disease,
}: Props) {
  return (
    <div className="rounded-2xl border bg-white p-5">

      <div className="space-y-5">

        <div>

          <p className="text-sm text-zinc-500">
            Crop
          </p>

          <h3 className="text-lg font-semibold">
            {crop}
          </h3>

        </div>

        <div>

          <p className="text-sm text-zinc-500">
            Disease
          </p>

          <h3 className="font-semibold text-red-600">
            {disease}
          </h3>

        </div>

        <div>

          <p className="text-sm text-zinc-500">
            Date
          </p>

          <h3 className="font-medium">
            Today
          </h3>

        </div>

      </div>

    </div>
  );
}