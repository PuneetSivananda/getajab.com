/* eslint-disable */
import { FunctionalComponent, h } from "preact";
import style from "./style.css";
import CardSection from "../../components/CardSection";

const Home: FunctionalComponent = () => {
	const geolocation: any[] = [];
	let lat;
	let lon;
	navigator.geolocation.getCurrentPosition(async function(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		geolocation.push(lat, lon);
	});

	return (
		<main class={style.paddingTop}>
			<CardSection />
		</main>
	);
};

export default Home;
