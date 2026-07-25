export const onRequestGet: PagesFunction = async ({ request }) => {
  const url = new URL(request.url);
  const target = `https://suitmedia-backend.suitdev.com/api/ideas${url.search}`;

  const res = await fetch(target, {
    headers: { Accept: "application/json" },
  });

  return new Response(res.body, {
    status: res.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
};