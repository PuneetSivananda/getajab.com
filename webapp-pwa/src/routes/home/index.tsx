/* eslint-disable */
import { FunctionalComponent, h } from "preact";
import style from "./style.css";
import Card from "../../components/Card/Card"

const Home: FunctionalComponent = () => {
	const geolocation: any[] = [];
	let lat;
	let lon;
	navigator.geolocation.getCurrentPosition(async function (position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		geolocation.push(lat, lon);
	});

	return (
		<main class={style.paddingTop}>
			{/* <CardSection /> */}
			<Card/>
		</main>
	);
};

export default Home;
