import style from "./Statistics.module.css"
import { Span } from "./Statistics.styled";

 const StatisticsTittle = ({ title }) => {
    return (
        <h2 className={style.title}>{title}</h2>
    )
}
 const StatisticsItem = ({ label, percentage }) => {
    return (
        <Span className={style.item}>
            <span className={style.label}>{label}</span>
            <span className={style.percentage}>{percentage} %</span>
        </Span>
    );
};
export const StatisticsTotal = ({ title, stats }) => {
    return (
        <section className={style.statistics}>
            <StatisticsTittle title={title} />
            <ul className={style.statList}>
                {stats.map((stat) => (
                    <StatisticsItem key={stat.id} label={stat.label} percentage={stat.percentage}>  </StatisticsItem> ))}
  </ul>
</section>
    )
}