import { API_URL } from "../app/(home)/page";

async function getVideos(id) {
  console.log(`yeah we're fetching videos ${Date.now()}`);
  await new Promise((res) => setTimeout(res, 200));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
  // throw new Error("에러났다 게이야ㅋ");
}

export default async function MovieVideos({ id }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
