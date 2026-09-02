import { getHomeData, HomePage } from "@/app/_views/home";
import { home_heroData } from "../_views/home/static";
import { E_LANG } from "@/lib/localization";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export const metadata = {
  title: "Centrul de mediere si securitate comunitara",
  description: `${home_heroData[E_LANG.RO].heading}. ${home_heroData[E_LANG.RO].description}`,
};

const Page = async () => {
  const homeData = await getHomeData();

  return <HomePage data={homeData} />;
};

export default Page;
