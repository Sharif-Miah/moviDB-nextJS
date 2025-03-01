import { NextResponse } from 'next/server';

export async function GET() {
  const movieList = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?language=en`
  );
  return NextResponse.json(movieList);
}
