import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getPokemonById } from "../services/pokemons";
import StatsBarList from "../components/pokemonDetail/StatsBarList";
import {
  bgOverColorByType,
  bgUnderColorByType,
  textColorByType,
} from "../components/shared/pokemons";

const PokemonDetail = () => {
  const [pokemonData, setPokemonData] = useState(null);

  const { pokemonId } = useParams();

  useEffect(() => {
    getPokemonById(pokemonId)
      .then((data) => setPokemonData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="flex bg-medium-gray h-screen p-4 relative">
      
        <Link to={"/pokedex/"}>
          <button
            className={`${
              bgUnderColorByType[pokemonData?.types[0]]
            } text-white font-bold font-Montse h-8 rounded-full w-32 z-10 absolute top-2 right-2`}
          >
            ⇠ BACK
          </button>
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
        <article className="w-11/12 min-[600px]:max-w-[50%] z-20 flex flex-col gap-4 mt-8">
          <section className="bg-light-gray rounded-xl w-full p-2 z-10">
            <StatsBarList
              stats={pokemonData?.stats}
              types={pokemonData?.types}
              abilities={pokemonData?.abilities}
              moves={pokemonData?.moves}
            />
          </section>
          <section className="flex flex-col bottom-0 right-0 absolute w-full">
            <h2
              className={`uppercase font-bold font-Montse text-white ${
                bgUnderColorByType[pokemonData?.types[0]]
              } flex gap-6 justify-center mx-4 nameTitle w-2/3 min-[400px]:w-[45%] self-end -mb-6`}
            >
              {pokemonData?.name} <span>#{pokemonData?.id}</span>
            </h2>

            <div className="w-[55%] min-[400px]:w-[40%] self-end">
              <img className="w-full" src={pokemonData?.image} alt="" />
            </div>
          </section>
        </article>
   
    </main>
  );
};

export default PokemonDetail;
