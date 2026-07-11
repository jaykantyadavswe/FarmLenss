interface Props {

    confidence: number;

}

export default function ConfidenceBar({

    confidence,

}: Props) {

    return (

        <div>

            <div className="mb-2 flex justify-between text-xs">

                <span>Confidence</span>

                <span>{confidence}%</span>

            </div>

            <div className="h-2 rounded-full bg-zinc-200">

                <div

                    style={{

                        width: `${confidence}%`

                    }}

                    className="h-full rounded-full bg-green-600"

                />

            </div>

        </div>

    );

}