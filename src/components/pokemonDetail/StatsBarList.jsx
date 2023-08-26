import BarProgresStats from "./BarProgresStats"

const StatsBarList = ({ stats }) => {
    return (
        <section>
            <h2>Stats</h2>
            <section>
                {
                    stats?.map((stat) => <BarProgresStats key={stat.name} stat={stat} />)
                }
            </section>
        </section>
    )
}

export default StatsBarList