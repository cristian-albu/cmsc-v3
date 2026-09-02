import { EmotionalTreasureBoxPage, getETBData } from "@/app/_views/emotional-treasure-box";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function Page() {
  const etbData = await getETBData();

  return <EmotionalTreasureBoxPage data={etbData} />;
}
