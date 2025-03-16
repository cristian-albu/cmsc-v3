import { getHomeData, HomePage } from "@/app/_views/home";

const Page = async () => {
  const homeData = await getHomeData();

  return <HomePage data={homeData} />;
};

export default Page;
