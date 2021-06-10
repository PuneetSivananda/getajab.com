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

	console.log(geolocation);
	return (
		<main>
			<div class={style.centered}>
				<div id="map"></div>;{/* Add Cards component into a child that is rerendered */}
				<CardSection />
			</div>
		</main>
	);
};

export default Home;
