import { FunctionalComponent, h } from 'preact'
import style from './style.css'
import Card from '../../components/card/index'
// ["🚀", "😺", "🐶", "🏈", "📦", "🙊"]
const Home: FunctionalComponent = () => {
  return (
    <div>
      <div class={style.heading}>
        <h1>Home</h1>
        <p>This is the Home component.</p>
      </div>

      <div class={style.card}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Home
