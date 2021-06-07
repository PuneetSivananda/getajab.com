import { FunctionalComponent, h } from 'preact';
import style from './style.css';
interface Props {
  image: string;
  title: string;
  body: string;
}
const Card: FunctionalComponent = ({ image, title, body }: Props) => {
  return (
    <article class={style.card}>
      <a href="#">
        <figure class="thumbnail">
          <img src={image} alt="meow" />
        </figure>
        <div class={style.cardContent}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      </a>
    </article>
  );
};

export default Card;
