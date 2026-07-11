// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogDescription,
//   DialogFooter,
//   DialogTrigger,
// } from "@/components/ui/dialog";

// import { Button } from "@/components/ui/button";

// interface DeleteDialogProps {
//   onDelete: () => void;
//   trigger: React.ReactNode;
// }

// export default function DeleteDialog({
//   onDelete,
//   trigger,
// }: DeleteDialogProps) {
//   return (
//     <Dialog>

//       <DialogTrigger asChild>
//         {trigger}
//       </DialogTrigger>

//       <DialogContent>

//         <DialogHeader>

//           <DialogTitle>
//             Delete Analysis?
//           </DialogTitle>

//           <DialogDescription>
//             This action cannot be undone. The report
//             will be permanently removed.
//           </DialogDescription>

//         </DialogHeader>

//         <DialogFooter>

//           <Button variant="outline">
//             Cancel
//           </Button>

//           <Button
//             variant="destructive"
//             onClick={onDelete}
//           >
//             Delete
//           </Button>

//         </DialogFooter>

//       </DialogContent>

//     </Dialog>
//   );
// }