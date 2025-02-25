import StoriesToRead from "../views/StoriesToRead";
import { storiesToReadData } from "../data/static/stories";
import { E_LANG } from "@/lib/localization";

export const metadata = {
  title: storiesToReadData[E_LANG.RO].heading,
};

export default async function Page() {
  return <StoriesToRead />;
}
