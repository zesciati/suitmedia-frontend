interface Env {
  ASSETS: Fetcher;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/ideas") {
      const target = `https://suitmedia-backend.suitdev.com/api/ideas${url.search}`;

      const res = await fetch(target, {
        headers: { Accept: "application/json" },
      });

      return new Response(res.body, {
        status: res.status,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Cache-Control": "no-store",
        },
      });
    }

    // Semua route lain diserve sebagai static asset (SPA)
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;