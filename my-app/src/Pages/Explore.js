import { LeftSideMenu, Navbar, VideoList } from "../Components";
export function Explore() {
  return (
    <>
      <div className="two-column-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-blue-700">Explore</h1>
          <div className="md:ml-8">
            <VideoList />
          </div>
        </main>
      </div>
    </>
  );
}
