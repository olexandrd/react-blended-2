import styles from './GridItem.module.css';

export const GridItem = ({ item }) => {
  if (!item) {
    return null;
  }

  return (
    <li className={styles.item}>
      <div
        className={styles.thumb}
        style={{ backgroundColor: item.avg_color, borderColor: item.avg_color }}
      >
        <img src={item.src.large} alt={item.alt} />
      </div>
    </li>
  );
};
