// "use client";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import {
//   Download,
//   FileSpreadsheet,
//   FileText,
// } from "lucide-react";

// export default function ExportMenu() {
//   return (
//     <DropdownMenu>

//       <DropdownMenuTrigger className="flex items-center gap-2 rounded-xl border px-5 py-3 hover:bg-zinc-100">

//         <Download size={18} />

//         Export

//       </DropdownMenuTrigger>

//       <DropdownMenuContent align="end">

//         <DropdownMenuItem>
//           <FileText className="mr-2 h-4 w-4" />
//           Export PDF
//         </DropdownMenuItem>

//         <DropdownMenuItem>
//           <FileSpreadsheet className="mr-2 h-4 w-4" />
//           Export CSV
//         </DropdownMenuItem>

//         <DropdownMenuItem>
//           <FileSpreadsheet className="mr-2 h-4 w-4" />
//           Export Excel
//         </DropdownMenuItem>

//       </DropdownMenuContent>

//     </DropdownMenu>
//   );
// }