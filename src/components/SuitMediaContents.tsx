function SuitMediaContents() {
  return (
    <section className="mx-35 my-15 space-y-12  ">
      <div className="flex justify-between ">
        <div>Showing 1-10 of 100</div>
        <div className="flex gap-9">
          {/* <div>
              <label>Show per page:</label>
              <select name="" id="" className="border px- rounded-2xl">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </div> */}

          <div className="flex items-center gap-3">
            <label htmlFor="per-page" className="text-gray-700">
              Show per page:
            </label>

            <div className="relative inline-block">
              <select
                id="per-page"
                className=" appearance-none border border-gray-300 rounded-full pl-5 pr-10 py-2 text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
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
                className=" appearance-none border border-gray-300 rounded-full pl-5 pr-10 py-2 text-gray-700 bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-400
      "
              >
                <option value="newest">Newest</option>
                <option value="oldest">Oldest</option>
                <option value="current">Current</option>
                <option value="yesterday">Yesterday</option>
              </select>

              {/* custom arrow segitiga solid */}
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

      <article className="grid grid-cols-[repeat(auto-fit,minmax(280px,19rem))] gap-y-6 ">
        <div className=" max-w-70 rounded-md shadow-xl">
          <img
            src="/images/pexels-wangming-photo.jpeg"
            alt=""
            className="rounded-t-md"
          />
          <div className="p-4">
            <p className="opacity-50">5 september 2022</p>
            <h6 className="line-clamp-2 text-lg font-semibold">
              Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi
              Influencer Kenali Tingkatan Influencers berdasarkan Jumlah
              Followers
            </h6>
          </div>
        </div>

        <div className=" max-w-70 rounded-md shadow-xl">
          <img
            src="/images/pexels-wangming-photo.jpeg"
            alt=""
            className="rounded-t-md"
          />
          <div className="p-4">
            <p className="opacity-50">5 september 2022</p>
            <h6 className="line-clamp-2 text-lg font-semibold">
              Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi
              Influencer Kenali Tingkatan Influencers berdasarkan Jumlah
              Followers
            </h6>
          </div>
        </div>

        <div className=" max-w-70 rounded-md shadow-xl">
          <img
            src="/images/pexels-wangming-photo.jpeg"
            alt=""
            className="rounded-t-md"
          />
          <div className="p-4">
            <p className="opacity-50">5 september 2022</p>
            <h6 className="line-clamp-2 text-lg font-semibold">
              Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi
              Influencer Kenali Tingkatan Influencers berdasarkan Jumlah
              Followers
            </h6>
          </div>
        </div>

        <div className=" max-w-70 rounded-md shadow-xl">
          <img
            src="/images/pexels-wangming-photo.jpeg"
            alt=""
            className="rounded-t-md"
          />
          <div className="p-4">
            <p className="opacity-50">5 september 2022</p>
            <h6 className="line-clamp-2 text-lg font-semibold">
              Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi
              Influencer Kenali Tingkatan Influencers berdasarkan Jumlah
              Followers
            </h6>
          </div>
        </div>

        <div className=" max-w-70 rounded-md shadow-xl">
          <img
            src="/images/pexels-wangming-photo.jpeg"
            alt=""
            className="rounded-t-md"
          />
          <div className="p-4">
            <p className="opacity-50">5 september 2022</p>
            <h6 className="line-clamp-2 text-lg font-semibold">
              Jangan Asal Pilih Influencer, Berikut Cara Menyusun Strategi
              Influencer Kenali Tingkatan Influencers berdasarkan Jumlah
              Followers
            </h6>
          </div>
        </div>
      </article>

      <div className="pagination text-center">
        <span> 1 2 3 4 5 6 7 8 9</span>
      </div>
    </section>
  );
}
export default SuitMediaContents;
