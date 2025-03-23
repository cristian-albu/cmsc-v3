import { EmotionalTreasureBoxPage, getETBData } from "@/app/_views/emotional-treasure-box";
import { emotionalTreasureBoxData } from "../_views/emotional-treasure-box/static";
import { E_LANG } from "@/lib/localization";

export default async function Page() {
  const etbData = await getETBData();

  return <EmotionalTreasureBoxPage data={etbData} />;
}
