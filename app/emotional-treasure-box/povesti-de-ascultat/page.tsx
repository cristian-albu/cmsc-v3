import client from "@/lib/client";
import StoriesToHear from "../views/StoriesToHear";
import { GET_AUDIOBOOKS_LIST } from "../data/queries";
import { T_AudiobookRequest } from "../types";

export default async function Page() {
  const audioBooks = await client.request<T_AudiobookRequest>(GET_AUDIOBOOKS_LIST);

  return <StoriesToHear data={audioBooks} />;
}
