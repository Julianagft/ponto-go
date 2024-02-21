'use client'

import Sidebar from "./components/SideBar";

export default function Home() {
  return (
    <div className="flex ">
      <Sidebar />
      <main className="grow p-6">
        <h1>Bem-vindo ao seu app Next.js!</h1>
      </main>
    </div>
  )
}
