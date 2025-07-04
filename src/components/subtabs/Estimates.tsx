import { useEffect, useState } from "react";
import { ArrowUp, FunnelPlus } from "lucide-react"
import data from "@/lib/mockData/estimateData";

interface intSelector {
    estCost?: number;
    actCost?: number;
    estRev?: number;
    actRev?: number;
    total?: number;
}

interface selectorState {
    estCost?: number;
    actCost?: number;
    estRev?: number;
    actRev?: number;
    total?: number;
    profitPct?: number;
}

export default function Estimates() {
    const [ openFilter, setOpenFilter ] = useState<boolean>(false);
    const [ estimateData, setEstimateData ] = useState<typeof data>(data)
    const [ options, setOptions ] = useState<selectorState>();

    useEffect(() => {
        window.onclick = (event) => {
            if (event.target instanceof HTMLElement) {
                if (!event.target?.closest('#filter-menu') && !event.target?.closest('#filter-menu-btn')) {
                    if (openFilter) setOpenFilter(false)
                }
            }
        }
        
    })

    const handleFilter = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const tempData: typeof data = [];
        if (!options || (Object.keys(options).length === 0)) {
            setEstimateData(data);
            setOpenFilter(false);
            return;
        }
        (Object.keys(options ?? {}) as (keyof selectorState)[]).forEach((key) => {
            if (options && options[key] !== undefined) {
                if (options[key] >= 0) {
                    tempData.push(...data.filter((item) => {
                        if (key !== 'profitPct') {
                            if (options[key]! <= item[key as keyof intSelector]) {
                                return item;
                            }

                        }
                        if (key === 'profitPct') {
                            if (Number(options[key]) <= Number(item.profitPct.replace('%', ''))) {
                                return item;
                            }
                        }
                    }));
                }
            }
        })
        const nonDuplicateData = tempData.reduce((acc, current) => {
            const x = acc.find(item => item.item === current.item);
            if (!x) {
                return acc.concat([current]);
            } else {
                return acc;
            }
        }, [] as typeof data);
        setEstimateData(nonDuplicateData);
        setOpenFilter(false);
    }
  return (
    <article aria-label="estimates-table" >
        <div aria-label="estimates-summary" >
            <p className="text-sm sm:text-2xl font-bold py-5" >
                Estimate & Actuals Summary
            </p>
            <div className="w-full flex flex-wrap gap-y-5 lg:flex-nowrap justify-around lg:justify-between" >
                <div className="w-[47%] lg:w-[23%] relative p-5 rounded-2xl border border-slate-300/75 flex flex-wrap flex-col gap-y-5 justify-between" >
                    <p className="font-inter font-bold text-[9px] lg:text-sm" >Total estimates</p>
                    <p className="text-lg sm:text-3xl font-inter text-[#E76E50] font-semibold tracking-wide pt-2" >
                        <span className="absolute right-5 top-4 inline-block text-2xl text-black/95" >€</span>
                        {
                            new Intl.NumberFormat('en-US', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                                }).format(data.reduce((acc, item) => acc + item.estCost, 0))

                        }
                    </p>
                </div>
                <div className="w-[47%] lg:w-[23%] relative p-5 rounded-2xl border border-slate-300/75 flex flex-wrap flex-col gap-y-5 justify-between" >
                    <p className="font-inter font-bold text-[9px] lg:text-sm" >Total actuals</p>
                    <p className="text-lg sm:text-3xl font-inter text-[#E76E50] font-semibold tracking-wide pt-2" >
                        <span className="absolute right-5 top-4 inline-block text-2xl text-black/95" >€</span>
                        {
                            new Intl.NumberFormat('en-US', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                                }).format(data.reduce((acc, item) => acc + item.actCost, 0))

                        }
                    </p>
                </div>
                <div className="w-[47%] lg:w-[23%] relative p-5 rounded-2xl border border-slate-300/75 flex flex-wrap flex-col justify-between" >
                    <p className="font-inter font-bold text-[9px] lg:text-sm" >Total Revenue</p>
                    <div className="text-lg sm:text-3xl font-inter font-semibold tracking-wide pt-6" >
                        <span className="absolute right-5 top-4 inline-block text-2xl text-black/95" >€</span>
                        {
                            new Intl.NumberFormat('en-US', {
                                style: 'decimal',
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                                }).format(data.reduce((acc, item) => acc + item.total, 0))

                        }
                        <div className="absolute flex -top-6 right-2 items-center justify-center gap-x-1 text-slate-500 font-inter text-[7px] sm:text-[8px] mt-3" >
                            <span className="block flex items-center justify-center rounded-full px-2 text-green-600 bg-green-200" >
                                <ArrowUp strokeWidth={2} className="w-3 text-green-600" />10% vs prev month
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-[47%] lg:w-[23%] relative p-5 rounded-2xl border border-slate-300/75 flex flex-wrap flex-col justify-between" >
                    <p className="font-inter font-bold text-[9px] lg:text-sm" >Net Growth (%)</p>
                    <p className="text-lg sm:text-3xl font-inter font-semibold tracking-wide" >
                        {
                            (((data.reduce((acc, item) => acc + item.total, 0))
                            / (data.reduce((acc, item) => acc + item.actCost, 0))) * 100).toFixed(2)
                        }
                    </p>
                    <p className="absolute flex top-[40%] -translate-y-[40%] right-2 items-center justify-center gap-x-1 text-slate-500 font-inter text-[8px] mt-3" >
                        <span className="block flex items-center justify-center rounded-full w-6 lg:w-7 h-6 lg:h-7 p-1 text-green-600 bg-green-200" >
                            <ArrowUp strokeWidth={3} className="w-3 lg:w-5 text-green-600" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div aria-label="estimates-list" className="w-full mt-7" >
            <div aria-label="list-header" className="my-4 flex justify-between" >
                <p className="text-sm sm:text-2xl font-bold py-3" >
                    List of products and services estimates: 
                </p>
                <div id="filter-menu-btn" aria-label="filter-btn" className="flex items-center justify-center" >
                    <button onClick={() => {setOpenFilter(!openFilter)}} className="flex gap-x-2 text-sm sm:text-base border items-center justify-center hover:bg-slate-100 cursor-pointer px-3 py-0.5 sm:py-1 rounded-full border border-slate-300/75 h-fit font-medium" >
                        <p>Filter</p>
                        <FunnelPlus strokeWidth={1.5} className="w-3 sm:w-4" />
                    </button>
                </div>
                <div aria-label="filter-container" className={`
                    fixed z-30 top-[10dvh] w-full h-full right-0 bg-slate-300/40 items-center justify-center
                    ${ openFilter ? 'flex' : 'hidden' }
                 `} >
                    <div aria-label="filter-wrapper" id="filter-menu" className="bg-white px-5 py-3 w-[70%] m-auto rounded-sm" >
                        <div aria-label="filter-header" className="font-inter font-bold border-b border-slate-300/75 py-3" >
                            Filter your estimates.

                            <p className="text-xs sm:text-xs font-thin mt-1" >
                                Choose one or more of the options below
                            </p>
                        </div>
                        <div aria-label="filter-body" className="w-full" >
                            <div aria-label="filter-selectors" >
                                <form className="" onSubmit={handleFilter} method="POST" >
                                    <div aria-label="filter-group" className="w-full flex flex-wrap gap-x-3 gap-y-3 [&>*]:w-[30%]" >
                                        <div className="flex flex-wrap" >
                                            <label className="py-1 w-full text-sm lg:text-base" >
                                                Est Cost <small className="text-xs" >(minimum amount)</small>
                                            </label>
                                            <input
                                                type='number'
                                                name='estCost'
                                                onChange={(e) => setOptions({ ...options, estCost: parseFloat(e.target.value) })}
                                                className='outline-none border border-slate-300/75 rounded-sm h-9 px-3 text-sm lg:text-base'
                                            />
                                        </div>
                                        <div className="flex flex-wrap" >
                                            <label className="py-1 w-full text-sm lg:text-base" >
                                                Act cost <small className="text-xs" >(minimum amount)</small>
                                            </label>
                                            <input
                                                type='number'
                                                name='actCost'
                                                onChange={(e) => setOptions({ ...options, actCost: parseFloat(e.target.value) })}
                                                className='outline-none border border-slate-300/75 rounded-sm h-9 px-3 text-sm lg:text-base'
                                            />
                                        </div>
                                        <div className="flex flex-wrap" >
                                            <label  className="py-3 w-full text-sm lg:text-base" >
                                                Est Rev <small className="text-xs" >(minimum amount)</small>
                                            </label>
                                            <input
                                                type='number'
                                                name='estRev'
                                                onChange={(e) => setOptions({ ...options, estRev: parseFloat(e.target.value) })}
                                                className='outline-none border border-slate-300/75 rounded-sm h-9 px-3 text-sm lg:text-base'
                                            />
                                        </div>
                                        <div className="flex flex-wrap" >
                                            <label  className="py-3 w-full text-sm lg:text-base" >
                                                Act Rev <small className="text-xs" >(minimum amount)</small>
                                            </label>
                                            <input
                                                type='number'
                                                name='actRev'
                                                onChange={(e) => setOptions({ ...options, actRev: parseFloat(e.target.value) })}
                                                className='outline-none border border-slate-300/75 rounded-sm h-9 px-3 text-sm lg:text-base'
                                            />
                                        </div>
                                        <div className="flex flex-wrap" >
                                            <label className="py-1 w-full text-sm lg:text-base" >
                                                Total <small className="text-xs" >(minimum amount)</small>
                                            </label>
                                            <input
                                                type='number'
                                                name='total'
                                                onChange={(e) => setOptions({ ...options, total: parseFloat(e.target.value) })} 
                                                className='outline-none border border-slate-300/75 rounded-sm h-9 px-3 text-sm lg:text-base'
                                            />
                                        </div>
                                        <div className="flex flex-wrap" >
                                            <label className="py-1 w-full text-sm lg:text-base" >
                                                % Profit <small className="text-xs" >(minimum %)</small>
                                            </label>
                                            <input
                                                type='number'
                                                name='profitPct'
                                                onChange={(e) => setOptions({ ...options, profitPct: parseFloat(e.target.value) })}
                                                className='outline-none border border-slate-300/75 rounded-sm h-9 px-3 text-sm lg:text-base'
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full  flex justify-end" >
                                        <button type='submit' className="text-white py-2 px-4 rounded-md border  bg-blue-600 hover:bg-blue-500" >
                                            Filter
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div aria-label="list-wrapper" className="w-full overflow-auto max-h-100 relative bordera-y border-slate-300/75" >
                <table className="w-[140%] md:w-[120%] lg:w-full border border-slate-300/75 " >
                    <thead className="sticky top-0 bg-white border border-slate-300/75" >
                        <tr className="sticky top-0 bg-white text-[7px] sm:text-xs lg:text-base border border-slate-300/75" >
                            <th className="py-2 border border-slate-300/75" >
                                S/N
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Item
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Est Cost (€)
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Act Cost (€)
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Est Rev (€)
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Act Rev (€)
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                Total (€)
                            </th>
                            <th className="py-2 border border-slate-300/75" >
                                % profit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            estimateData.map((product, index) => (
                                <tr key={index} className="text-[7px] sm:text-xs lg:text-base border-b border-slate-300/75 hover:bg-slate-100/75" >
                                    <td className="text-center py-2 border-r border-slate-300/75" >{index + 1}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{product.item}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{product.estCost.toFixed(2)}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{product.actCost.toFixed(2)}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{product.estRev.toFixed(2)}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{product.actRev.toFixed(2)}</td>
                                    <td className="text-center py-2 border-r border-slate-300/75" >{(product.total).toFixed(2)}</td>
                                    <td className="text-center py-2" >{product.profitPct}</td>
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