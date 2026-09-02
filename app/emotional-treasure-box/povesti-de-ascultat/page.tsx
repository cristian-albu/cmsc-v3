import client from "@/lib/client";
import { T_AudiobookRequest } from "@/lib/types";
import { GET_AUDIOBOOKS_LIST, StoriesToHearPage } from "@/app/_views/emotional-treasure-box";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components
export const instant = false;

export default async function Page() {
  const audioBooks = await client.request<T_AudiobookRequest>(GET_AUDIOBOOKS_LIST);

  return <StoriesToHearPage data={audioBooks} />;
}
