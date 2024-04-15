interface DesignerListProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DesignerListProps) {
  return (
    <div className="bg-secondary-700 h-dvh">
      <div>{children}</div>
    </div>
  );
}
