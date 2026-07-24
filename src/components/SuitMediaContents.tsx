function SuitMediaContents(){
  return(
    <section className="mx-35 my-15 space-y-12  ">
        <div className="flex justify-between">
          <div>Showing 1-10 of 100</div>
          <div className="flex">
            <div>
              <label>Show per page:</label>
              <select name="" id="">
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
                <option value="">4</option>
              </select>
            </div>

            <div>
              <label htmlFor="">Sort by:</label>
              <select name="" id="">
                <option value="">newest</option>
                <option value="">oldest</option>
                <option value="">current</option>
                <option value="">yesterday</option>
              </select>
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
  )
}
export default SuitMediaContents;