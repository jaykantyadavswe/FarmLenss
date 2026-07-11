interface Props {

    status: string;

}

export default function StatusBadge({

    status,

}: Props) {

    const colors = {

        Healthy: "bg-green-100 text-green-700",

        Moderate: "bg-yellow-100 text-yellow-700",

        Severe: "bg-red-100 text-red-700",

        Completed: "bg-blue-100 text-blue-700",

        Processing: "bg-orange-100 text-orange-700",

    };

    return (

        <span

            className={`rounded-full px-3 py-1 text-xs font-semibold

                ${colors[status as keyof typeof colors]}`}

        >

            {status}

        </span>

    );

}