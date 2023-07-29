import { Navbar, VideoCoverList } from "../Components";
import { LeftSideMenu } from "../Components/";
export function Home() {
  return (
    <>
      <div className="two-column-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-blue-700">Categories</h1>
          <div className="ml-8">
            <VideoCoverList />
          </div>
        </main>
      </div>
    </>
  );
}
