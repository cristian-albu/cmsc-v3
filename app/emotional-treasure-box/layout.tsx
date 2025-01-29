import ETBFooterSection from "./views/ETBFooterSection";
import ETBHeader from "./views/ETBHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <ETBHeader />
      {children}
      <ETBFooterSection />
    </>
  );
}
