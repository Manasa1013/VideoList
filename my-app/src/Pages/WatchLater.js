import { LeftSideMenu, Navbar } from "../Components";
export function WatchLater() {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main"></main>
      </div>
    </>
  );
}
