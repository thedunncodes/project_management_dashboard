import { useState } from "react";
import Estimates from "./Estimates";
import Tasks from "./Tasks";
import Txn from "./Txn";

export default function SubTabs() {
  const [activeTab, setActiveTab] = useState<"estimates" | "tasks" | "txn">("estimates");

  return (
    <section aria-label="subtabs" className="w-full" >
      <div aria-label="subtabs-wrapper" className="w-[95%] ml-auto sm:m-auto mr-1 md:mr-0 sborder border-slate-300/75 rounded-t-sm" >
        <div aria-label="subtabs-container" className="w-full flex justify-between items-center px-[5%] min-[375px]:px-[7.5%] py-3 rounded-sm border border-slate-300/75" >
          <button
            onClick={() => setActiveTab("estimates")}
            className={`cursor-pointer text-[8px] font-semibold lg:font-normal sm:text-sm lg:text-base px-3 lg:px-7 py-2 lg:py-4 rounded-xl border border-slate-300/75 ${ (activeTab === 'estimates') ? 'bg-blue-300 hover:bg-blue-300/85' : 'hover:bg-gray-100' }`}
          >
            Estimates & Actuals
          </button>
          <button
            onClick={() => setActiveTab("tasks")}
            className={`cursor-pointer text-[8px] font-semibold lg:font-normal sm:text-sm lg:text-base px-3 lg:px-7 py-2 lg:py-4 rounded-xl border border-slate-300/75 ${ (activeTab === 'tasks') ? 'bg-blue-300 hover:bg-blue-300/85' : 'hover:bg-gray-100' }`}
          >
            Ongoing Tasks
          </button>
          <button
            onClick={() => setActiveTab("txn")}
            className={`cursor-pointer text-[8px] font-semibold lg:font-normal sm:text-sm lg:text-base px-3 lg:px-7 py-2 lg:py-4 rounded-xl border border-slate-300/75  ${ (activeTab === 'txn') ? 'bg-blue-300 hover:bg-blue-300/85' : 'hover:bg-gray-100' }`}
          >
            Transactions
          </button>
        </div>
        <div aria-label="subtabs-content-container"  >
          {
            (activeTab === 'estimates') && (
              <Estimates />
            )
          }
          {
            (activeTab === 'tasks') && (
              <Tasks />
            )
          }
          {
            (activeTab === 'txn') && (
              <Txn />
            )
          }
        </div>
      <div className="h-50" ></div>
      </div>
    </section>    
  )
}