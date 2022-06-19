/* eslint-disable */
import { FunctionalComponent, h } from "preact";
import style from "./style.css";
import cardStyle from "./card.css"
import CardSection from "../../components/CardSection";
import bgImg from "../../assets/img/image-equilibrium.jpg"
import iconEth from "../../assets/img/icon-ethereum.svg"
import clockIcon from "../../assets/img/icon-clock.svg"
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
					{/* Add the google map component here make it accept just lat long */}
					<img
						src={bgImg}
						class={cardStyle.cubeImg}
						alt="image of glass cube"
					/>
					<div class={cardStyle.overlay}></div>
				</div>
				<h5 class={cardStyle.cardTitle}>Runing #3445</h5>
				<p class={cardStyle.cardDescription}>
					As Advertising company we are earger to serve you in promoting your product.
				</p>

				<p class={cardStyle.cryptoPrice}>
					<img src={iconEth} class={cardStyle.cryptoSymbol} /> 0.051
					ETH
				</p>
				<p class={cardStyle.daysIndicator}>
					<img src={clockIcon} class={cardStyle.clockImg} /> 4 days left
				</p>
				<hr class={cardStyle.divider} />

				<p class={cardStyle.creator}>
					Creation of <span class={cardStyle.creatorName}>Feisal Issack</span>
				</p>
			</div>
		</main>
	);
};

export default Home;
