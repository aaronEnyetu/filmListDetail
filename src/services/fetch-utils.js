import { client, checkError } from './client';


export async function getFilms(from = 0, to = 20) {

  const response = await client
    .from('films')
    .select()
    .range(from, to);

  return checkError(response);

}

export async function getSingleFilm(id) {
  const response = await client
    .from('films')
    .select()
    .match({ id })
    .single();


  return checkError(response);
}