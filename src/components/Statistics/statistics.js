export const StatisticsTittle = ({title}) => {
    return (
        <h2 className="title">{title}</h2>
    )
}
export const StatisticsItem = ({ id, label, percentage }) => {
    return (
        <li className="item" key={id}>
            <span className="label">{label}</span>
            <span className="percentage">{percentage} %</span>
        </li>
    );
};
export const Statistics = ({ title, stats }) => {
    return (
        <section className="statistics">
            <StatisticsTittle title={title} />
            <ul className="stat-list">
                {stats.map((stat) => (
                    <StatisticsItem id={stat.id} label={stat.label} percentage={stat.percentage}>  </StatisticsItem> ))}
  </ul>
</section>
    )
}