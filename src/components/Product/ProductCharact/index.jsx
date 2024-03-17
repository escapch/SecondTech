import styles from './ProductCharact.module.scss';

const ProductCharact = ({
  color,
  rating,
  brand,
  storage,
  ram,
  model,
  processor,
  battery,
  packageContents,
  characteristics,
  state,
}) => {
  return (
    <div className={styles.characteristics}>
      <h2>Характеристика</h2>
      <div>
        <ul>
          <li>
            <p>
              Бренд: <span>{brand.name}</span>
            </p>
          </li>
          <li>
            <p>
              Модель: <span>{model}</span>
            </p>
          </li>
          <li>
            <p>
              Аккумулятор: <span>{battery}</span>
            </p>
          </li>
          <li>
            <p>
              Объем памяти: <span>{storage}</span>
            </p>
          </li>
          <li>
            <p>
              Цвет:<span>{color.name}</span>
            </p>
          </li>
          <li>
            <p>
              Техническое состояние:<span>{state}</span>
            </p>
          </li>
          <li>
            <p>
              Оперативная память, RAM (ГБ.):<span>{ram}</span>
            </p>
          </li>
          <li className={styles.packages}>
            <span>Комплектация:</span>
            {packageContents.map((element, i) => (
              <span key={i}>{element.content},</span>
            ))}
          </li>
          <li className={styles.character}>
            <p>Дополнительные характеристики:</p>
            {characteristics.map((element) => (
              <span key={element.id}>
                {element.name}:<span>{element.value}</span>
              </span>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCharact;
