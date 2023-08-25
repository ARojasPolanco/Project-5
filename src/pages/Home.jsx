import { useDispatch, useSelector } from "react-redux"
import FooterPokeball from "../components/layout/FooterPokeball"
import { loginTrainer } from "../store/slices/trainer.slice"
import store from "../store"
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
        <main className="min-h-screen grid grid-rows-[1fr_auto]">
            <section>
                <article>
                    <div>
                        <img src="/images/banner.png" alt="" />
                    </div>
                    <h2>Hello trainer</h2>
                    <p>To start give me your name</p>
                    <form onSubmit={handleSumbit}>
                        <input 
                        autoComplete="off" 
                        placeholder="your name..." 
                        required id="nameTrainer" 
                        type="text" />
                        <button>Start!</button>
                    </form>
                </article>
            </section>
            <FooterPokeball />
        </main>
    )
}

export default Home