import "./work_history.css"
import wh from "./static/work_history.json"

export default function WorkHistory() {
    return( 
    <div class = "work-sheet">
        <div class = "bullet"></div>
        <p class = "job-title">{wh[0]["title"]} @ {wh[0]["employer"]}</p>
        <div class = "between-bar"></div>
        <div class = "job-desc">
            <p>{wh[0]["datesEmployed"]}</p>
            <p>{wh[0]["location"]}</p>
            {wh[0].desc.map((line, index) => {
                return (
                    <p>{line}</p>
                );
            })}
        </div>
        <div class = "bullet"></div>
        <p class = "job-title">{wh[1]["title"]} @ {wh[1]["employer"]}</p>
        <div class = "between-bar"></div>
        <div class = "job-desc">
            <p>{wh[1]["datesEmployed"]}</p>
            <p>{wh[1]["location"]}</p>
            {wh[1].desc.map((line, index) => {
                return (
                    <p>{line}</p>
                );
            })}
        </div>
        <div class = "bullet"></div>
        <p class = "job-title">{wh[2]["title"]} @ {wh[2]["employer"]}</p>
        <div class = "between-bar"></div>
        <div class = "job-desc">
            <p>{wh[2]["datesEmployed"]}</p>
            <p>{wh[2]["location"]}</p>
            {wh[2].desc.map((line, index) => {
                return (
                    <p>{line}</p>
                );
            })}
        </div>
        <div class = "stop-bar"></div>
    </div>
    )
       
}