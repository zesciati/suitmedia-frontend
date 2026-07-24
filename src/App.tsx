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

      <div
        className="hero-bg-image min-h-100 flex items-center justify-center bg-[url(/images/pexels-pixabay.jpeg)]" 
      >
          <div className="flex-col text-center items-center text-white">
            <h1 className="mb-5 text-5xl font-bold">Ideas</h1>
            <p className="mb-5">
              Where all our great things begin
            </p>
          </div>
      </div>
    </>
  );
}

export default App;
