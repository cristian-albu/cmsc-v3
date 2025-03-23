import { Header, FooterSection } from "@/app/_views/emotional-treasure-box";
import { emotionalTreasureBoxData } from "../_views/emotional-treasure-box/static";
import { E_LANG } from "@/lib/localization";

export const metadata = {
  title: "Emotional Treasure Box",
  description: `${emotionalTreasureBoxData[E_LANG.RO].heading}. ${emotionalTreasureBoxData[E_LANG.RO].description}`
    .trim()
    .replace(/\s+/g, " "),
};

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
