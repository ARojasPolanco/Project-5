import { useDispatch } from "react-redux"
import FooterPokeball from "../components/layout/FooterPokeball"
import { loginTrainer } from "../store/slices/trainer.slice"

import { useNavigate } from "react-router-dom"

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSumbit = (e) => {
        e.preventDefault()
        const nameTrainer = e.target.nameTrainer.value
        dispatch(loginTrainer(nameTrainer));
        navigate('/pokedex')
    }

    return (
        <main className="min-h-screen flex flex-col justify-around items-center bg-[url(/images/pokemonbg2.gif)] bg-cover bg-center text-white px-2 dark:bg-[url(/images/pokemonbgdark.gif)] dark:text-black dark:">
            <section className="font-Inter">
                <article className="flex flex-col justify-center items-center gap-1 bg-black/40 p-2 dark:bg-white/40 rounded-md mt-12 transition-colors">
                    <div className="flex justify-center items-center">
                        <img className="p-2" src="/images/banner.png" alt="" />
                    </div>

                    <h2 className="text-2xl font-bold">Hello trainer!</h2>
                    <p className="font-medium min-[500px]:text-xl">Give me your name to start the pokedex!</p>
                    <form className="flex flex-col min-[500px]:flex-row justify-center items-center gap-4 p-4" onSubmit={handleSumbit}>
                        <input className="outline-none p-2 rounded-full px-4 h-10 text-black"
                            autoComplete="off"
                            placeholder="Your Trainer Name..."
                            id="nameTrainer"
                            type="text"
                            required
                        />
                        <div className="relative  w-full h-20 flex flex-col justify-center items-center">
                            <div className="dark:bg-poison-txt bg-red-pokeball w-[80px] h-[40px] rounded-t-full pt-5 border-2 border-black-pokeball transition-colors"></div>
                            <div className="bg-white w-[80px] h-[40px]  rounded-b-full pb-5 border-2 border-black-pokeball"></div>
                            <div className="bg-white w-[30px] aspect-square rounded-full absolute -top-19 right-33 text-white border-4 border-black-pokeball"></div>
                            <button className="bg-transparent w-[80px] aspect-square rounded-full absolute -top-19 right-33 text-white border-4 border-black-pokeball hover:scale-110 transition-transform"></button>
                            <span className="absolute right-0 text-xl animate-bounce w-26 min-[500px]:-right-16 "> ⇠ Go!</span>
                        </div>


                    </form>
                </article>
            </section>
            <FooterPokeball />
        </main>
    )
}

export default Home