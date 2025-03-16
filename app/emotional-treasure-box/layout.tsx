import { Header, FooterSection } from "@/app/_views/emotional-treasure-box";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <FooterSection />
    </>
  );
}
