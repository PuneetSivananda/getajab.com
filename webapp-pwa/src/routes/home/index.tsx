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
          <Card
            image='http://placekitten.com/810/610'
            title={'Whiskey'}
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur
						consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor
						nesciunt laboriosam obcaecati corporis numquam."/>

          <Card
            image='http://placekitten.com/800/610'
            title={'Fluffy'}
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur
						consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor
						nesciunt laboriosam obcaecati corporis numquam."/>
          
		

          <Card
            image="http://placekitten.com/816/610"
            title={'Kitty'}
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur
						consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor
						nesciunt laboriosam obcaecati corporis numquam."/>
          

          <Card
            image="http://placekitten.com/816/600"
            title={'Patches'}
            body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur
						consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor
						nesciunt laboriosam obcaecati corporis numquam."/>
				
				</section>
			</div>
		</main>
	);
};

export default Home;
