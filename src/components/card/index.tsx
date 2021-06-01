import { FunctionalComponent, h } from 'preact'
import style from './style.css'

const Card: FunctionalComponent = () => {
  return (
    <div class={style.card}>
      <div class="card_image">
        <img src="https://picsum.photos/500/300/?image=14" />
      </div>
      <div class="card_content">
        <h2 class="card_title">Card Grid Layout</h2>
        <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
        <button class={style.btn}>Read More</button>
      </div>
    </div>
  )
}

export default Card
