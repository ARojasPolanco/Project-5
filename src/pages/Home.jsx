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
    };

    return (
        <main className="min-h-screen grid grid-rows-[1fr_auto] bg-[url(/images/pokemonbg2.gif)] bg-cover">
            <section className="font-Inter">
                <article className="flex flex-col justify-center items-center gap-2">
                    <div className="flex justify-center items-center py-2 min-[500px]:w-[500px]">
                        <img className="p-2" src="/images/banner.png" alt="" />
                    </div>

                    <div className="flex flex-col justify-center items-center gap-5 pl-[70px] min-[500px]:flex-row min-[500px]:w-[500px] ">
                   <img  src="/images/trainer1.png"/>
                   <img  src="/images/trainer2.png"/>
                   <img src="/images/trainer3.png"/>
                   
                    </div>
                    <h2 className="text-2xl font-bold min-[500px]:mt-5 min-[500px]:mb-3">Hello trainer!</h2>
                    <p className="font-medium min-[500px]:text-xl min-[500px]:-mb-5">Give me your name to start the pokedex!</p>
                    <form className="flex flex-col min-[500px]:flex-row min-[500px]:justify-center min-[500px]:items-center min-[500px]:gap-4 min-[500px]:p-4" onSubmit={handleSumbit}>
                        <input className="border outline-none min-[500px]:h-[35px]"
                        autoComplete="off" 
                        placeholder="Your Trainer Name..." 
                        required id="nameTrainer" 
                        type="text" />
                        <div className="relative w-full h-20 flex flex-col justify-center items-center mt-2 ">
                            <div className="bg-red-pokeball w-[80px] h-[40px] rounded-t-full pt-5 border-2 border-black-pokeball"></div>
                            <div className="bg-white w-[80px] h-[40px]  rounded-b-full pb-5 border-2 border-black-pokeball"></div>
                            <div className="bg-white w-[30px] aspect-square rounded-full absolute -top-19 right-33 text-white border-4 border-black-pokeball"></div>
                            <button className="bg-transparent w-[80px] aspect-square rounded-full absolute -top-19 right-33 text-white border-4 border-black-pokeball"></button>
                        </div>

          
                    </form>
                </article>
            </section>
            <FooterPokeball />
        </main>
    )
}

export default Home