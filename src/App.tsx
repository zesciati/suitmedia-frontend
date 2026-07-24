import "./styles/Global.css";

function App() {
  return (
    <>
      <nav className="flex bg-[#F76641] items-center justify-around max-h-26">
        <img src="/images/icon-suitmedia.png" alt="" />
        <div className="flex gap-5 text-white text-lg">
          <a href="" className="hover:border-b-2 active:border-b-2">
            Work
          </a>
          <a href="">About</a>
          <a href="">Services</a>
          <a href="">Ideas</a>
          <a href="">Careers</a>
          <a href="">Contact</a>
        </div>
      </nav>

      <section className="hero-bg-image min-h-100 flex items-center justify-center bg-[url(/images/pexels-pixabay.jpeg)]">
        <div className="flex-col text-center items-center text-white">
          <h1 className="mb-5 text-5xl font-bold">Ideas</h1>
          <p className="mb-5">Where all our great things begin</p>
        </div>
      </section>

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

        <article className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-y-6">
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
    </>
  );
}

export default App;
