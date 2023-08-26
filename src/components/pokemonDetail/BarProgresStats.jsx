const BarProgresStats = ({ stat }) => {

    const getPercentBarProgress = (statValue) => {
        const MAX_STAT_VALUE = 255
        const persent = (100 * statValue / MAX_STAT_VALUE)
        return `${persent}%`
    }

    return (
        <article>
            <section className="flex justify-between px-2">
                <h5>{stat.name}</h5>
                <span>{stat.value}/255</span>
            </section>
            <div className="h-6 bg-gray rounded-md">
                <div style={{ width: getPercentBarProgress(stat.value) }} className="h-full bg-unknown-txt"></div>
            </div>
        </article>
    )
}

export default BarProgresStats