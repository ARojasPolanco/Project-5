import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StatsBarList from "../components/pokemonDetail/StatsBarList";
import {
  bgOverColorByType,
  bgUnderColorByType,
} from "../components/shared/pokemons";
import { getPokemonById } from "../services/pokemons";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className=" bg-medium-gray min-h-screen px-4 dark:bg-special-blue dark:text-white transition-colors">
      <section className=" grid grid-rows-[auto_auto] min-[900px]:grid-cols-[auto_auto] min-[900px]:grid-rows-none h-screen gap-2 w-[min(100%,_1024px)] mx-auto place-items-center">
        <Link
          to={"/pokedex/"}
          className={`${
            bgUnderColorByType[pokemonData?.types[0]]
          } text-white font-bold font-Montse  rounded-full z-10 absolute top-2 right-2 p-1 px-4`}
        >
          <button>⇠ BACK</button>
        </Link>
        <div
          className={`division ${
            bgUnderColorByType[pokemonData?.types[0]]
          } h-full w-full absolute top-0 left-0`}
        ></div>
        <div
          className={`division ${
            bgOverColorByType[pokemonData?.types[0]]
          } h-full w-full absolute top-0 -left-10`}
        ></div>
        <article className="z-20 gap-2 mt-8  w-[min(100%,_700px)]">
          <section className="bg-light-gray rounded-xl w-full p-2 z-10 dark:bg-special-dark-blue transition-colors mt-6">
            <StatsBarList
              stats={pokemonData?.stats}
              types={pokemonData?.types}
              abilities={pokemonData?.abilities}
              moves={pokemonData?.moves}
            />
          </section>
        </article>
        <section className="flex flex-col w-72  gap-2  z-[15] min-[900px]:w-[100%] min-[900px]:max-w-[75%]  place-self-end mb-4">
          <h2
            className={`uppercase font-bold font-Montse text-white min-[900px]:w-4/5 ${
              bgUnderColorByType[pokemonData?.types[0]]
            } flex gap-4 justify-center nameTitle w-52 mr-4 self-end`}
          >
            {pokemonData?.name} <span>#{pokemonData?.id}</span>
          </h2>

          <section className="grid grid-cols-[auto_auto]  min-[900px]:grid-rows-[auto_auto] min-[900px]:grid-cols-none gap-2 ">
            <div
              className="flex flex-wrap gap-2 flex-col justify-center items-center place-self-center min-[900px]:place-self-end min-[900px]:flex-row min-[900px]:mr-4
            "
            >
              {pokemonData?.types.map((type) => (
                <h4
                  key={type}
                  className={`${bgOverColorByType[type]} text-white px-4 rounded-full text-center uppercase font-Montse min-[900px]:text-3xl border-medium-gray dark:border-special-blue border`}
                >
                  {type}
                </h4>
              ))}
            </div>
            <div className="w-44 min-[900px]:w-full min-[900px]:place-self-end">
              <img className="w-full" src={pokemonData?.image} alt="" />
            </div>
          </section>
        </section>
      </section>
    </main>
  );
};

export default PokemonDetail;
