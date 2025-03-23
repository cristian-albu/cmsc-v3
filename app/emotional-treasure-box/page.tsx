import { EmotionalTreasureBoxPage, getETBData } from "@/app/_views/emotional-treasure-box";

export default async function Page() {
  const etbData = await getETBData();

  return <EmotionalTreasureBoxPage data={etbData} />;
}
