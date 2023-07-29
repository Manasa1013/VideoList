import { LeftSideMenu, Navbar } from "../Components";
export function SingleVideoPage() {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="aside-left">
          <LeftSideMenu />
        </aside>
        <main className="main"></main>
        <aside className="aside-right"></aside>
      </div>
    </>
  );
}
