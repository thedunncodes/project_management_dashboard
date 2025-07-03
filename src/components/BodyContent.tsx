import MainBody from "./MainBody";
import Calendar from "./Calendar";
import Chart from "./Chart";
import GetViewport from "@/hooks/viewportSize";

export default function BodyContent() {
  const [ vpWidth ] = GetViewport();
  return (
    <MainBody>
        <article aria-label="content-section" className="w-full" >
            <section aria-label="dash-view" className="w-full flex" >
                {
                    (vpWidth >= 1024) && (
                        <div aria-label="calender" className="w-[40%] max-w-140 flex items-center justify-center" >
                            <div aria-label="calender-wrapper" className="w-110 h-95 flex items-center justify-center" >
                                <Calendar />
                            </div>
                        </div>
                    )
                }
                <div aria-label="graph" className="grow" >
                    <div aria-label="graph-wrapper" className="w-full h-full flex items-center justify-center" >
                        <Chart />
                    </div>
                </div>
            </section>
        </article>
    </MainBody>
  )
}