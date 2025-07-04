import data from "@/lib/mockData/txnData";
import { ArrowUp, ArrowDown } from "lucide-react"

import React from 'react'

export default function Txn() {
  return (
    <article aria-label="estimates-table" >
        <div aria-label="estimates-summary" >
            <p className="text-sm sm:text-2xl pl-1 lg:pl-0 font-bold py-5" >
                Expense Summary
            </p>
            <div className="w-full flex flex-wrap gap-y-5 lg:flex-nowrap justify-around" >
                <div className="w-[47%] lg:w-[23%] relative p-5 rounded-2xl border border-slate-300/75 flex flex-wrap gap-y-4 flex-col justify-between" >
                    <p className="font-inter font-bold text-[9px] lg:text-sm" >Expenses</p>
                    <p className="text-lg sm:text-3xl font-inter font-semibold tracking-wide pt-6" >
                        <span className="absolute right-5 top-4 inline-block text-2xl text-black/95" >€</span>
                        {
                            new Intl.NumberFormat('en-US', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                                }).format(data.reduce((acc, item) => item.category !== 'Deposit' ? acc + Number(item.amount.replace('€', '')) : acc + 0, 0))

                        }
                    </p>
                    <p className="absolute flex top-[50%] -translate-y-[50%] right-2 items-center justify-center gap-x-1 text-slate-500 font-inter text-[8px] mt-3" >
                        <span className="block flex items-center justify-center rounded-full w-6 lg:w-7 h-6 lg:h-7 p-1 text-red-600 bg-red-200" >
                            <ArrowDown strokeWidth={3} className="w-3 lg:w-5 text-red-600" />
                        </span>
                    </p>
                </div>
                <div className="w-[47%] lg:w-[23%] relative p-5 rounded-2xl border border-slate-300/75 flex flex-wrap flex-col justify-between" >
                    <p className="font-inter font-bold text-[9px] lg:text-sm" >Deposits</p>
                    <p className="text-lg sm:text-3xl font-inter font-semibold tracking-wide" >
                        <span className="absolute right-5 top-4 inline-block text-2xl text-black/95" >€</span>
                        {
                            new Intl.NumberFormat('en-US', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                                }).format(data.reduce((acc, item) => item.category === 'Deposit' ? acc + Number(item.amount.replace('€', '')) : acc + 0, 0))

                        }
                    </p>
                    <p className="absolute flex top-[50%] -translate-y-[50%] right-2 items-center justify-center gap-x-1 text-slate-500 font-inter text-[8px] mt-3" >
                        <span className="block flex items-center justify-center rounded-full w-6 lg:w-7 h-6 lg:h-7 p-1 text-green-600 bg-green-200" >
                            <ArrowUp strokeWidth={3} className="w-3 lg:w-5 text-green-600" />
                        </span>
                    </p>
                </div>
                <div className="w-[47%] lg:w-[23%] relative p-5 rounded-2xl border border-slate-300/75 flex flex-wrap gap-y-8 flex-col justify-between" >
                    <p className="font-inter font-bold text-[9px] lg:text-sm" >Balance</p>
                    <p className="text-lg sm:text-3xl font-inter font-semibold tracking-wide" >
                        <span className="absolute right-5 top-4 inline-block text-2xl text-black/95" >€</span>
                        {
                            new Intl.NumberFormat('en-US', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                                }).format(
                                    (data.reduce((acc, item) => item.category === 'Deposit'
                                    ? acc + Number(item.amount.replace('€', ''))
                                    : acc + 0, 0)) 
                                    - (data.reduce((acc, item) => item.category !== 'Deposit'
                                    ? acc + Number(item.amount.replace('€', ''))
                                    : acc + 0, 0))
                            )

                        }
                    </p>
                    {/* <p className="absolute flex top-[50%] -translate-y-[50%] right-2 items-center justify-center gap-x-1 text-slate-500 font-inter text-[8px] mt-3" >
                        <span className="block flex items-center justify-center rounded-full w-6 lg:w-7 h-6 lg:h-7 p-1 text-green-600 bg-green-200" >
                            <ArrowUp strokeWidth={3} className="w-3 lg:w-5 text-green-600" />
                        </span>
                    </p> */}
                </div>
            </div>
        </div>
        <div aria-label="estimates-list" className="w-full mt-7" >
            <div aria-label="list-header" className="my-4 flex justify-between" >
                <p className="text-sm sm:text-2xl font-bold py-3" >
                    Recent Transactions 
                </p>
            </div>
            <div aria-label="list-wrapper" className="w-full overflow-auto max-h-100 relative bordera-y border-slate-300/75" >
                <table className="w-[130%] md:w-full border border-slate-300/75 " >
                    <thead className="sticky top-0 bg-white border border-slate-300/75" >
                        <tr className="sticky top-0 bg-white text-[7px] sm:text-xs lg:text-base border border-slate-300/75" >
                            <th className="py-2 border border-slate-300/75" >
                                S/N
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Date
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Amount
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Payment Name
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Method
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Category
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((txn, index) => (
                                <tr key={index} className="text-[7px] sm:text-xs lg:text-base border-b border-slate-300/75 hover:bg-slate-100/75" >
                                    <td className="text-center py-2 border-r border-slate-300/75" >{index + 1}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{txn.date}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{txn.amount}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{txn.name}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{txn.method}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{txn.category}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </article>
  )
}