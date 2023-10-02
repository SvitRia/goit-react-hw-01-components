import style from "./Statistics.module.css"
import { Span } from "./Statistic";

export const StatisticsTittle = ({ title }) => {
    return (
        <h2 className={style.title}>{title}</h2>
    )
}
export const StatisticsItem = ({ id, label, percentage }) => {
    return (
        <Span className={style.item} key={id}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage} %</span>
        </Span>
    );
};
export const Statistics = ({ title, stats }) => {
    return (
        <section className={style.statistics}>
            <StatisticsTittle title={title} />
            <ul className={style.statList}>
                {stats.map((stat) => (
                    <StatisticsItem id={stat.id} label={stat.label} percentage={stat.percentage}>  </StatisticsItem> ))}
  </ul>
</section>
    )
}