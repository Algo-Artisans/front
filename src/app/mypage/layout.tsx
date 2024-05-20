interface MypageProps {
  children: React.ReactNode;
}

export default function Layout({ children }: MypageProps) {
  return (
    <div className="bg-white w-full h-dvh">
      <div className="mt-[80px]">{children}</div>
    </div>
  );
}
