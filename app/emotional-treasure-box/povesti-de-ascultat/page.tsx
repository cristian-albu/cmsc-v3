import client from "@/lib/client";
import { T_AudiobookRequest } from "@/lib/types";
import { GET_AUDIOBOOKS_LIST, StoriesToHearPage } from "@/app/_views/emotional-treasure-box";

export default async function Page() {
  const audioBooks = await client.request<T_AudiobookRequest>(GET_AUDIOBOOKS_LIST);

  return <StoriesToHearPage data={audioBooks} />;
}
