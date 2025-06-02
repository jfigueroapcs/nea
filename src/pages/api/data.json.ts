import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  cookies.set("status", "Success!!!2", {
    httpOnly: true,
    sameSite: "strict",
    path: "/",
  });

  // return redirect("/");
  const success: string = 'Success!!!'
  return new Response(success, { status: 200 });
};