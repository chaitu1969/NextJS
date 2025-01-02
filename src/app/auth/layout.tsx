export default function Navbar({ children }: { children: React.ReactElement }) {
  return (
    <>
      <div className="border-b b-4">Nav Bar</div>
      {children}
    </>
  );
}
