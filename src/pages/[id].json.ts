import type { APIRoute } from 'astro';

const usernames = ["Sarah", "Chris", "Dan", "Yan", "Elian"]

export const GET: APIRoute = ({ params, request }) => {
  const id = params.id;
  return new Response(
    JSON.stringify({
      name: usernames[0]
    })
  )
}

export function getStaticPaths() {
  return [
    { params: { id: "0"} },
    { params: { id: "1"} },
    { params: { id: "2"} },
    { params: { id: "3"} }
  ]
};