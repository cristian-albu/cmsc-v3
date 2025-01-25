import React from "react";
import HomeView from "./views";
import getHomeData from "./data/queries/getHomeData";

const Page = async () => {
  const homeData = await getHomeData();

  return <HomeView data={homeData} />;
};

export default Page;
