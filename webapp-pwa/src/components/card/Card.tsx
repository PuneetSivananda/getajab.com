import { h } from "preact";

import cardStyle from "./card.css";
import bgImg from "../../assets/img/image-equilibrium.jpg";
import iconEth from "../../assets/img/icon-ethereum.svg";
import clockIcon from "../../assets/img/icon-clock.svg";
import { Props } from "../../models";

const Card = ({ Pin, AvailableCapacity, date, lat, long, Name }: Props) => {
	return (
		<div class={cardStyle.card}>
			<div class={cardStyle.imgContainer}>
				{/* Add the google map component here make it accept just lat long */}
				<img src={bgImg} class={cardStyle.cubeImg} alt="image of glass cube" />
				<div class={cardStyle.overlay}></div>
			</div>
			<h5 class={cardStyle.cardTitle}>Runing #3445</h5>
			<p class={cardStyle.cardDescription}>
				As Advertising company we are earger to serve you in promoting your product.
			</p>

			<p class={cardStyle.cryptoPrice}>
				<img src={iconEth} class={cardStyle.cryptoSymbol} /> 0.051 ETH
			</p>
			<p class={cardStyle.daysIndicator}>
				<img src={clockIcon} class={cardStyle.clockImg} /> 4 days left
			</p>
			<hr class={cardStyle.divider} />

			<p class={cardStyle.creator}>
				Creation of <span class={cardStyle.creatorName}>Feisal Issack</span>
			</p>
		</div>
	);
};

export default Card;
