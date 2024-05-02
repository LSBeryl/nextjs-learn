import { API_URL } from "../app/(home)/page";

async function getMovie(id) {
  console.log(`yeah we're fetching movie ${Date.now()}`);
  await new Promise((res) => setTimeout(res, 100));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
