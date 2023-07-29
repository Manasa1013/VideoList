import { Navbar } from "../Components";
import { LeftSideMenu } from "../Components/";
export function Home() {
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
