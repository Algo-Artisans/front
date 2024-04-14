import Header from '@/components/common/Header';

interface DesignerDetailProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DesignerDetailProps) {
  return (
    <div className="bg-secondary-900">
      <Header className="bg-secondary-900" />
      <div>{children}</div>
    </div>
  );
}
