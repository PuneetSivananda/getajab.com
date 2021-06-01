import { FunctionalComponent, h } from 'preact';
import Card from '../../components/card';
import style from './style.css';

const Home: FunctionalComponent = () => {
	return (
		<section class={style.cardsWrapper}>
			<Card />
			{/* <div class='card-grid-space'>
				<div class='num'>02</div>
				<a
					class='card'
					href='https://codetheweb.blog/2017/10/09/basic-types-of-html-tags/'
					style='--bg-img: url(&#39;https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/basic-types-of-html-tags/cover.jpg&#39;)'
				>
					<div>
						<h1>Basic types of HTML tags</h1>
						<p>Learn about some of the most common HTML tags…</p>
						<div class='date'>9 Oct 2017</div>
						<div class='tags'>
							<div class='tag'>HTML</div>
						</div>
					</div>
				</a>
			</div>
			<div class='card-grid-space'>
				<div class='num'>03</div>
				<a
					class='card'
					href='https://codetheweb.blog/2017/10/14/links-images-about-file-paths/'
					style='--bg-img: url(&#39;https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg&#39;)'
				>
					<div>
						<h1>Links, images and about file paths</h1>
						<p>Learn how to use links and images along with file paths…</p>
						<div class='date'>14 Oct 2017</div>
						<div class='tags'>
							<div class='tag'>HTML</div>
						</div>
					</div>
				</a>
			</div> */}
		</section>
	);
};

export default Home;
