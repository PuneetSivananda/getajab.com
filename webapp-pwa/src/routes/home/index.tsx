/* eslint-disable */
import { FunctionalComponent, h } from 'preact';
import Card from '../../components/card';
import style from './style.css';

const fetchData = () => {
	let data = { Data: [] };
	const websocket = new WebSocket('ws://evening-crag-51333.herokuapp.com/data');

	websocket.onopen = function(evt) {
		console.log('Successfully connected to the websocket');
	};

	websocket.onerror = function(err) {
		console.log(err);
	};

	websocket.onmessage = function(evnt) {
		data = JSON.parse(evnt.data);
		console.log('Sending data to the connected websocket');
		console.log(data);
	};
	return data;
};

const Home: FunctionalComponent = () => {
	let res = fetchData();
	if (res.Data.length > 1) {
		console.log(res);
		/**PAss theis data down to the child component */
	}

	return (
		<main class='main-area'>
			<div class={style.centered}>
				<section class={style.cards}>
					<article class={style.card}>
						<a href='#'>
							<figure class='thumbnail'>
								<img src='http://placekitten.com/810/610' alt='meow' />
							</figure>
							<div class={style.cardContent}>
								<h2>Whiskey</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo
									consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis
									sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam.
								</p>
							</div>
						</a>
					</article>

					<article class={style.card}>
						<a href='#'>
							<figure class={style.thumbnail}>
								<img src='http://placekitten.com/800/610' alt='meow' />
							</figure>
							<div class={style.cardContent}>
								<h2>Fluffy</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo
									consequatur consectetur fugit molestias perferendis, sint error iste ut, facilis
									sunt natus optio dolor nesciunt laboriosam obcaecati corporis numquam?
								</p>
							</div>
						</a>
					</article>

					<article class={style.card}>
						<a href='#'>
							<figure class={style.thumbnail}>
								<img src='http://placekitten.com/816/610' alt='meow' />
							</figure>
							<div class={style.cardContent}>
								<h2>Kitty</h2>
								<p>
									{' '}
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae
									expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et,
									laborum dignissimos error sequi non? Recusandae, aut alias.
								</p>
							</div>
						</a>
					</article>

					<article class={style.card}>
						<a href='#'>
							<figure class={style.thumbnail}>
								<img src='http://placekitten.com/816/600' alt='meow' />
							</figure>
							<div class={style.cardContent}>
								<h2>Patches</h2>
								<p>
									{' '}
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae
									expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et,
									laborum dignissimos error sequi non? Recusandae, aut alias.
								</p>
							</div>
						</a>
					</article>
					{/* 
					<article class='card'>
						<a href='#'>
							<figure class='thumbnail'>
								<img src='http://placekitten.com/820/620' alt='meow' />
							</figure>
							<div class='card-content'>
								<h2>Duchess</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae
									expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et,
									laborum dignissimos error sequi non? Recusandae, aut alias.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae
									expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et,
									laborum dignissimos error sequi non? Recusandae, aut alias.
								</p>
							</div>
						</a>
					</article>

					<article class='card'>
						<a href='#'>
							<figure class='thumbnail'>
								<img src='http://placekitten.com/810/610' alt='meow' />
							</figure>
							<div class='card-content'>
								<h2>Puchies</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae
									expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et,
									laborum dignissimos error sequi non? Recusandae, aut alias.
								</p>
							</div>
						</a>
					</article>

					<article class='card'> 
						<a href='#'>
							<figure class='thumbnail'>
								<img src='http://placekitten.com/808/608' alt='meow' />
							</figure>
							<div class='card-content'>
								<h2>Panchito</h2>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae
									expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et,
									laborum dignissimos error sequi non? Recusandae, aut alias.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati recusandae
									expedita doloribus dicta cumque nostrum, autem eaque soluta atque voluptatem est et,
									laborum dignissimos error sequi non? Recusandae, aut alias.
								</p>
							</div>
						</a>
					</article>*/}
				</section>
			</div>
		</main>
	);
};

export default Home;
