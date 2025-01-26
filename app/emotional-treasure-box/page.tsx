import EmotionalTreasureBoxView from "./views/EmotionalTreasureBoxView";
import getETBData from "./data/queries/getETBdata";

export default async function Page() {
  const etbData = await getETBData();

  return <EmotionalTreasureBoxView data={etbData} />;
}
