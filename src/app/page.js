'use client'

import Sidebar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex ">
      <Sidebar />
      <main className="grow p-6">
        <h1></h1>
      </main>
    </div>
  )
}
