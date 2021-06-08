/* eslint-disable */
import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Card from '../../components/card';
import style from './style.css';

interface DataItem {
	AvailableCapacity: number;
	Name: string;
	Pin: number;
	date: string;
	lat: number;
	long: number;
}

interface DataList {
	Data: DataItem[];
}

let data: DataList = { Data: [] };
const websocket = new WebSocket('ws://evening-crag-51333.herokuapp.com/data');

const fetchData = () => {
	websocket.onopen = function(evt) {
		console.log('Successfully connected to the websocket');
	};

	websocket.onerror = function(err) {
		console.log(err);
	};

	websocket.onmessage = function(evnt) {
		data = JSON.parse(evnt.data);
		console.log('Sending data to the connected websocket');
	};
	return data;
};

const Home: FunctionalComponent = () => {
	const [ listItems, setData ] = useState<DataList>({ Data: [] });

	useEffect(
		() => {
			websocket.onmessage = function(evnt) {
				data = JSON.parse(evnt.data);
				console.log('Sending data to the connected websocket');
				setData(data);
			};
		},
		[ setData ]
	);
	if (listItems.Data.length > 0) {
		return (
			<main>
				<div class={style.centered}>
					<section class={style.cards}>
						{listItems.Data.map((item) => {
							return (
								<Card
									Pin={item.Pin}
									AvailableCapacity={item.AvailableCapacity}
									date={item.date}
									lat={item.lat}
									long={item.long}
									cardColor={item.AvailableCapacity > 0 ? 'green' : 'red'}
									Name={item.Name}
								/>
							);
						})}
					</section>
				</div>
			</main>
		);
	} else {
		return <h1 class={style.centered}>No Data</h1>;
	}
};

export default Home;
