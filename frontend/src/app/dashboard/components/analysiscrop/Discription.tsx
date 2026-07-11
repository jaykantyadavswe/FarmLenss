import {
  Leaf,
} from "lucide-react";
export default function Discription(){
    return(
      <div className="mt-6 rounded-2xl p-4 bg-green-100">

        <div className="mb-3 flex items-center gap-2">

          <Leaf
            size={18}
            className="text-green-600"
          />

          <h3 className="font-medium">
            AI Summary
          </h3>

        </div>

        <p className="text-sm leading-7 text-zinc-600">
          Early Blight detected with high confidence.
          Immediate fungicide treatment is recommended.
          Monitor nearby leaves over the next 5 days.
        </p>

      </div>
    )
}