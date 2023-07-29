import { Navbar } from "../Components";
export function Home() {
  return (
    <>
      <div className="grid-container">
        <Navbar />
        <aside className="aside-left"></aside>
        <main className="main"></main>
      </div>
    </>
  );
}
