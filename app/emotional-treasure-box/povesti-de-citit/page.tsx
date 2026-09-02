import { E_LANG } from "@/lib/localization";
import { StoriesToReadPage } from "@/app/_views/emotional-treasure-box";
import { storiesToReadData } from "@/app/_views/emotional-treasure-box/static/stories";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata = {
  title: storiesToReadData[E_LANG.RO].heading,
};

export default async function Page() {
  return <StoriesToReadPage />;
}
