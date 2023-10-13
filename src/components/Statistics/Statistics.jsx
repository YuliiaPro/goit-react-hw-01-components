import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
return <section className={css.statistics}>
    {title && <h2 className={css.title}>{title}</h2>}
<ul className={css.statList}>
    {stats.map(({ id, label, percentage }) => (
        <li style={{background: getRandomHexColor()}} className={css.item} key={id}>
    <span className={css.label}>{label}</span>
    <span className={css.percentage}>{percentage}%</span>
    </li>
    )
    )}
  </ul>
</section>
};

Statistics.prototype = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};
 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
