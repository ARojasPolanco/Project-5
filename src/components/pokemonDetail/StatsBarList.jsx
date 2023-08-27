import { useState } from "react"
import BarProgresStats from "./BarProgresStats"
import AbilitiesList from "./AbilitiesList"

const StatsBarList = ({ stats, types, abilities }) => {
    const [changeState, setChangeState] = useState(true)
    console.log(changeState)
    console.log(abilities);
    return (
        <section className="grid grid-cols-2 place-items-center">
            <h2 onClick={() => setChangeState(true)} className="place-self-end mr-2 font-bold font-Montse cursor-pointer">Stats</h2>
            <h2 onClick={() => setChangeState(false)}  className="place-self-start ml-2 font-bold font-Montse cursor-pointer">Abilities</h2>
            <section className="col-span-2 flex flex-col  relative w-full items-center">
                <div className={`${changeState ? "-translate-x-80" : "left-0"} transition-transform w-64 flex flex-col gap-2`}>
                {
                    stats?.map((stat) => <BarProgresStats key={stat.name} stat={stat} types={types}/>)
                
                }
                </div>
                <div className={`${changeState ? "left-0" : "-translate-x-80"} transition-transform  absolute flex gap-2 flex-wrap justify-center items-center w-full`}>
                    {
                        abilities?.map((ability) => <AbilitiesList key={ability.ability.name} ability={ability.ability}/>)
                    }
                </div>
            </section>
        </section>
    )
}

export default StatsBarList