import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

async function getMovie(id) {
  console.log(`yeah we're fetching movies ${Date.now()}`);
  await new Promise((res) => setTimeout(res, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

async function getVideos(id) {
  console.log(`yeah we're fetching videos ${Date.now()}`);
  await new Promise((res) => setTimeout(res, 5000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}

export default async function Movie({
  params: { id },
  searchParams: { region },
}) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
