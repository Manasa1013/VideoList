import { LeftSideMenu, Navbar } from "../Components";
export function Playlists() {
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
