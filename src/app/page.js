import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Home() {
  return (
    <div className="grid grid-cols-12">
      <aside className="col-span-3 bg-gray-800 h-screen sticky top-0">
        <div className="flex gap-1 items-center px-10 py-6">
          <span className="block h-6 w-1 bg-indigo-500 rounded-lg"></span>
          <span className="block h-6 w-1 bg-indigo-600/90 rounded-lg"></span>
          <span className="block h-6 w-1 bg-indigo-800/70 rounded-lg"></span>
          <h4 className="text-2xl font-semibold ml-2">kanban</h4>
        </div>

        <ul className="pr-10 mt-2">
          <li className="pl-10 py-3 text-xs tracking-wider">ALL BOARDS (8)</li>
          <li className="pl-10 py-3 hover:bg-indigo-600 text-gray-300 hover:text-white rounded-r-full text-sm flex gap-x-4 items-center duration-100"><MdOutlineSpaceDashboard size={20} /> Platform Launch</li>
          <li className="pl-10 py-3 hover:bg-indigo-600 text-gray-300 hover:text-white rounded-r-full text-sm flex gap-x-4 items-center duration-100"><MdOutlineSpaceDashboard size={20} /> Marketing Plan</li>
          <li className="pl-10 py-3 hover:bg-indigo-600 text-gray-300 hover:text-white rounded-r-full text-sm flex gap-x-4 items-center duration-100"><MdOutlineSpaceDashboard size={20} /> Roadmap</li>
          <li className="pl-10 py-3 text-indigo-500 text-sm flex gap-x-4 items-center duration-100"><MdOutlineSpaceDashboard size={20} /> + Create New Board</li>
        </ul>
      </aside>
      <main className="col-span-9 bg-gray-900">
        <div className="bg-gray-800 py-5 px-5 border-b border-l border-gray-700 flex items-center gap-x-3">
          <h4 className="text-lg font-medium mr-auto">Platform Launch</h4>
          <button className="px-5 py-3 bg-indigo-600 text-sm font-medium rounded-full">+ Add New Task</button>
          <BsThreeDotsVertical size={20} className="text-gray-400" />
        </div>

        <div className="p-5 flex gap-5 overflow-x-auto overflow-y-hidden">
          <div className="min-w-80 space-y-4">
            <div className="text-xs tracking-[0.15rem] flex gap-x-4 items-center mb-6">
              <span className="block w-4 h-4 rounded-full bg-blue-300"></span>
              TODO (4)
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
          </div>
          <div className="min-w-80 space-y-4">
            <div className="text-xs tracking-[0.15rem] flex gap-x-4 items-center mb-6">
              <span className="block w-4 h-4 rounded-full bg-blue-300"></span>
              TODO (4)
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
          </div>
          <div className="min-w-80 space-y-4">
            <div className="text-xs tracking-[0.15rem] flex gap-x-4 items-center mb-6">
              <span className="block w-4 h-4 rounded-full bg-blue-300"></span>
              TODO (4)
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
            <div className="bg-gray-800 px-5 py-6 rounded-lg">
              <h4>Build UI for onboarding flow</h4>
              <small className="text-gray-400">0 of 3 substasks</small>
            </div>
          </div>
          <div className="min-w-80">
            <div className="mb-6 invisible">
              <span className="block w-4 h-4 rounded-full bg-blue-300"></span>
            </div>
            <div className="text-xl bg-gray-800 text-gray-400 font-medium flex items-center justify-center rounded-lg h-[95.5%]">
              + New Column
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
