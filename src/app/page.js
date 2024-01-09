export default function Home() {
  return (
    <div className="flex">
      <aside className="w-3/12 bg-gray-800 h-screen">
        <div className="flex gap-1 items-center px-10 py-8">
          <div className="h-6 w-1 bg-indigo-500 rounded-lg"></div>
          <div className="h-6 w-1 bg-indigo-600/90 rounded-lg"></div>
          <div className="h-6 w-1 bg-indigo-800/70 rounded-lg"></div>
          <h4 className="text-2xl font-semibold ml-2">kanban</h4>
        </div>
      </aside>
      <main className="flex-1 bg-gray-900">
        <div className="bg-gray-800 py-8 px-5 border-b border-l border-gray-700">
          <h4 className="text-lg font-medium">Platform Launch</h4>
        </div>
      </main>
    </div>
  )
}
