/* eslint-disable */
import { FunctionalComponent, h } from "preact";
import style from "./style.css";
import cardStyle from "./card.css"
import CardSection from "../../components/CardSection";
import bgImg from "../../assets/img/image-equilibrium.jpg"

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
			<div class={cardStyle.card}>
				<div class={cardStyle.imgContainer}>
					<img
						src={bgImg}
						class={cardStyle.cubeImg}
						alt="image of glass cube"
					/>
					<a href="#" class="icon" alt="View More">
						<img class="view-icon" src="./img/icon-view.svg" />
					</a>
					<div class="overlay"></div>
				</div>
				<h5 class="card-title">program Runing #3445</h5>
				<p class="card-description">
					As Advertising company we are earger to serve you in promoting your product
					<a href="#">FEISAL ISSACK</a> 'CEO OF THE COMPANY'
				</p>

				<p class="crypto-price">
					<img src="./img/icon-ethereum.svg" class="crypto-symbol" /> 0.051
					ETH
				</p>
				<p class="days-indicator">
					<img src="./img/icon-clock.svg" class="clock-img" /> 4 days left
				</p>
				<hr class="divider" />

				<p class="creator">
					<img src="./img/ceo img.png" class="avatar" />
					Creation of <span class="creator-name">Feisal Issack</span>
				</p>
			</div>
		</main>
	);
};

export default Home;
