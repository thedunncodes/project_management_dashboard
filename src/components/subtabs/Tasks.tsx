import data from "@/lib/mockData/tasksData";

import React from 'react'

export default function Tasks() {
  return (
    <article aria-label="tasks" >
        <div aria-label="tasks-wrapper" >
            <div aria-label="estimates-list" className="w-full mt-7" >
                <div aria-label="list-header" className="my-4 flex flex-wrap" >
                    <p className="text-sm sm:text-2xl pl-1 lg:pl-0 font-bold py-3 w-full" >
                        Tasks in-progress
                    </p>
                    <p className="text-xs sm:text-lg font-inter" >
                        You&apos;re doing great — just a few more steps to go.
                        Let&apos;s wrap up these tasks and keep the momentum going! 🚀
                    </p>
                </div>
                <div aria-label="list-wrapper" className="w-full overflow-auto max-h-100 relative bordera-y border-slate-300/75" >
                    <table className="w-[120%] md:w-full border border-slate-300/75 " >
                        <thead className="sticky top-0 bg-white border border-slate-300/75" >
                            <tr className="sticky top-0 bg-white text-[7px] sm:text-xs lg:text-base border border-slate-300/75" >
                                <th className="py-2 border border-slate-300/75" >
                                    S/N
                                </th>
                                <th className="py-2 border border-slate-300/75" >
                                    Task
                                </th>
                                <th className="py-2 border border-slate-300/75" >
                                    Priority
                                </th>
                                <th className="py-2 border border-slate-300/75" >
                                    Status
                                </th>
                                <th className="py-2 border border-slate-300/75" >
                                    Due Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((task, index) => (
                                    <tr key={index} className="text-[7px] sm:text-xs lg:text-base border-b border-slate-300/75 hover:bg-slate-100/75" >
                                        <td className="text-center py-2 border-r border-slate-300/75" >{index + 1}</td>
                                        <td className="text-center py-2 border-r border-slate-300/75" >{task.task}</td>
                                        <td className="text-center py-2 border-r border-slate-300/75" >{task.priority}</td>
                                        <td className="text-center py-2 border-r border-slate-300/75" >{task.status}</td>
                                        <td className="text-center py-2 border-r border-slate-300/75" >{task.dueDate}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </article>
  )
}
