import Main from "../../ui/Home/Main";
import Nav from "../../ui/Home/Nav";

function Home() {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto bg-zinc-200 rounded-lg my-8">
        <Nav />
        <Main />
      </div>
    </div>
  );
}

export default Home;
