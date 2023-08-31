import { useState } from "react";
import BarProgresStats from "./BarProgresStats";
import AbilitiesList from "./AbilitiesList";
import MoveList from "./MoveList";

const StatsBarList = ({ stats, types, abilities, moves }) => {
  const [changeState, setChangeState] = useState("stats");

  const handleChangeState = (e) => () => {
    setChangeState(e);
  };

  return (
    <section className="grid grid-cols-3 place-items-center overflow-hidden gap-2">
      <button
        onClick={handleChangeState("stats")}
        className="place-self-center mr-2 font-bold font-Montse cursor-pointer"
      >
        Stats
      </button>
      <button
        onClick={handleChangeState("abilities")}
        className="place-self-center ml-2 font-bold font-Montse cursor-pointer"
      >
        Abilities
      </button>
      <button
        onClick={handleChangeState("moves")}
        className="place-self-center ml-2 font-bold font-Montse cursor-pointer"
      >
        Moves
      </button>
      <section
        className={`col-span-3 flex flex-col scrollBar relative w-full items-center ${
          changeState === "moves" && "overflow-y-scroll overflow-hidden"
        }`}
      >
        <div
          className={`${
            changeState === "stats" ? "left-0" : "-translate-x-[1000px]"
          } transition-transform w-full flex flex-col gap-2 p-2 duration-500`}
        >
          {stats?.map((stat) => (
            <BarProgresStats key={stat.name} stat={stat} types={types} />
          ))}
        </div>
        <div
          className={`${
            changeState === "abilities" ? "left-0" : "-translate-x-[1000px]"
          } transition-transform  absolute flex gap-2 flex-wrap justify-center items-center w-full duration-500`}
        >
          {abilities?.map((ability) => (
            <AbilitiesList
              key={ability.ability.name}
              ability={ability.ability}
            />
          ))}
        </div>
        <div
          className={`${
            changeState === "moves" ? "left-0 " : "-translate-x-[1000px]"
          } transition-transform  absolute flex gap-2 flex-wrap justify-center items-center w-full  duration-500`}
        >
          {moves?.map((move) => (
            <MoveList key={move.move.name} move={move.move} />
          ))}
        </div>
      </section>
    </section>
  );
};

export default StatsBarList;
