import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";


interface IdeaImage {
  url: string;
}

interface IdeaItem {
  id: number;
  title: string;
  slug: string;
  published_at: string;
  small_image?: IdeaImage[];
  medium_image?: IdeaImage[];
}

interface IdeasResponse {
  data: IdeaItem[];
  meta: {
    total: number;
    current_page: number;
    last_page: number;
    per_page: number;
  };
}

const PER_PAGE_OPTIONS = [10, 20, 50];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date
    .toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    })
    .toUpperCase();
}

function getImageUrl(item: IdeaItem) {
  return (
    item.medium_image?.[0]?.url ||
    item.small_image?.[0]?.url ||
    "/images/pexels-wangming-photo.jpeg"
  );
}

function SuitMediaContents() {
  const [searchParams, setSearchParams] = useSearchParams();

  
  const page = Number(searchParams.get("page") ?? "1");
  const perPage = Number(searchParams.get("size") ?? "10");
  const sort = searchParams.get("sort") === "oldest" ? "oldest" : "newest";

  const [ideas, setIdeas] = useState<IdeaItem[]>([]);
  const [total, setTotal] = useState(0);
  const [lastPage, setLastPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  
  function updateParams(next: { page?: number; size?: number; sort?: "newest" | "oldest" }) {
    const params = new URLSearchParams(searchParams);
    if (next.page !== undefined) params.set("page", String(next.page));
    if (next.size !== undefined) params.set("size", String(next.size));
    if (next.sort !== undefined) params.set("sort", next.sort);
    setSearchParams(params);
  }

  function handleSortChange(value: string) {
    
    updateParams({ sort: value === "oldest" ? "oldest" : "newest", page: 1 });
  }

  function handlePerPageChange(value: number) {
    
    updateParams({ size: value, page: 1 });
  }

  function goToPage(target: number) {
    if (target < 1 || target > lastPage || target === page) return;
    updateParams({ page: target });
  }

  
  useEffect(() => {
    const controller = new AbortController();

    async function fetchIdeas() {
      setLoading(true);
      setError(null);
      try {
        const params = new URLSearchParams();
        params.append("page[number]", String(page));
        params.append("page[size]", String(perPage));
        params.append("append[]", "small_image");
        params.append("append[]", "medium_image");
        params.append("sort", sort === "newest" ? "-published_at" : "published_at");

        const res = await fetch(`/api/ideas?${params.toString()}`, {
          signal: controller.signal,
          headers: {
            Accept: "application/json",
          },
        });

        if (!res.ok) throw new Error(`Gagal memuat data (status ${res.status})`);

        const json: IdeasResponse = await res.json();
        setIdeas(json.data);
        setTotal(json.meta.total);
        setLastPage(json.meta.last_page);
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          setError((err as Error).message || "Terjadi kesalahan saat memuat data");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchIdeas();
    return () => controller.abort();
  }, [page, perPage, sort]);

  
  const rangeStart = total === 0 ? 0 : (page - 1) * perPage + 1;
  const rangeEnd = Math.min(page * perPage, total);

  
  const pageNumbers = useMemo(() => {
    const pages: (number | "...")[] = [];
    const delta = 1; 

    for (let i = 1; i <= lastPage; i++) {
      if (
        i === 1 ||
        i === lastPage ||
        (i >= page - delta && i <= page + delta)
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  }, [page, lastPage]);

  return (
    <section className="mx-35 my-15 space-y-12">
      <div className="flex justify-between">
        <div>
          {total === 0
            ? "No items found"
            : `Showing ${rangeStart}-${rangeEnd} of ${total}`}
        </div>
        <div className="flex gap-9">
          <div className="flex items-center gap-3">
            <label htmlFor="per-page" className="text-gray-700">
              Show per page:
            </label>

            <div className="relative inline-block">
              <select
                id="per-page"
                value={perPage}
                onChange={(e) => handlePerPageChange(Number(e.target.value))}
                className="appearance-none border border-gray-300 rounded-full pl-5 pr-10 py-2 text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                {PER_PAGE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>

              <svg
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-700"
                viewBox="0 0 12 8"
                fill="currentColor"
              >
                <path d="M0 0L6 8L12 0H0Z" />
              </svg>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <label htmlFor="sort-by" className="text-gray-700">
              Sort by:
            </label>

            <div className="relative inline-block">
              <select
                id="sort-by"
                value={sort}
                onChange={(e) => handleSortChange(e.target.value)}
                className="appearance-none border border-gray-300 rounded-full pl-5 pr-10 py-2 text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
              </select>

              <svg
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-3 h-3 text-gray-700"
                viewBox="0 0 12 8"
                fill="currentColor"
              >
                <path d="M0 0L6 8L12 0H0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="text-red-600 text-center py-10">{error}</div>
      )}

      {!error && (
        <article className="grid grid-cols-[repeat(auto-fit,minmax(280px,19rem))] gap-y-6 gap-x-6">
          {loading
            ? 
              Array.from({ length: perPage }).map((_, i) => (
                <div
                  key={i}
                  className="max-w-70 rounded-md shadow-xl animate-pulse"
                >
                  <div className="aspect-4/3 bg-gray-200 rounded-t-md" />
                  <div className="p-4 space-y-2">
                    <div className="h-3 w-1/3 bg-gray-200 rounded" />
                    <div className="h-4 w-full bg-gray-200 rounded" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded" />
                  </div>
                </div>
              ))
            : ideas.map((item) => (
                <div key={item.id} className="max-w-70 rounded-md shadow-xl">
                  <div className="aspect-4/3 overflow-hidden rounded-t-md">
                    <img
                      src={getImageUrl(item)}
                      alt={item.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/images/pexels-wangming-photo.jpeg";
                      }}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <p className="opacity-50">
                      {formatDate(item.published_at)}
                    </p>
                    <h6 className="line-clamp-3 text-lg font-semibold">
                      {item.title}
                    </h6>
                  </div>
                </div>
              ))}
        </article>
      )}

      {!error && lastPage > 1 && (
        <div className="pagination flex justify-center items-center gap-2">
          <button
            onClick={() => goToPage(1)}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center rounded-full disabled:opacity-30 hover:bg-gray-100"
            aria-label="First page"
          >
            «
          </button>
          <button
            onClick={() => goToPage(page - 1)}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center rounded-full disabled:opacity-30 hover:bg-gray-100"
            aria-label="Previous page"
          >
            ‹
          </button>

          {pageNumbers.map((p, idx) =>
            p === "..." ? (
              <span key={`ellipsis-${idx}`} className="px-2 text-gray-400">
                ...
              </span>
            ) : (
              <button
                key={p}
                onClick={() => goToPage(p)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm ${
                  p === page
                    ? "bg-orange-500 text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {p}
              </button>
            )
          )}

          <button
            onClick={() => goToPage(page + 1)}
            disabled={page === lastPage}
            className="w-8 h-8 flex items-center justify-center rounded-full disabled:opacity-30 hover:bg-gray-100"
            aria-label="Next page"
          >
            ›
          </button>
          <button
            onClick={() => goToPage(lastPage)}
            disabled={page === lastPage}
            className="w-8 h-8 flex items-center justify-center rounded-full disabled:opacity-30 hover:bg-gray-100"
            aria-label="Last page"
          >
            »
          </button>
        </div>
      )}
    </section>
  );
}

export default SuitMediaContents;