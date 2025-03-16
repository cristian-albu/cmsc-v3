import { E_LANG } from "@/lib/localization";
import { StoriesToReadPage } from "@/app/_views/emotional-treasure-box";
import { storiesToReadData } from "@/app/_views/emotional-treasure-box/static/stories";

export const metadata = {
  title: storiesToReadData[E_LANG.RO].heading,
};

export default async function Page() {
  return <StoriesToReadPage />;
}
