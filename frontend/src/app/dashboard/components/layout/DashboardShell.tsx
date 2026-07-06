interface Props {
  children: React.ReactNode;
}

export default function DashboardShell({
  children,
}: Props) {
  return (
    <main className="flex h-screen overflow-hidden bg-zinc-100">
      {children}
    </main>
  );
}