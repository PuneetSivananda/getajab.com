import { h } from "preact";
import style from "./style1.css";
interface Props {
	cardColor: string;
	Name: string;
	Pin: number;
	AvailableCapacity: number;
	date: string;
	lat: number;
	long: number;
}
const ColoredLine = ({ color }: { color: string }) => (
	<hr
		style={{
			color: color,
			backgroundColor: color,
			height: 5,
			width: "100%",
			margin: 0,
		}}
	/>
);

// const Card = ({ cardColor, Pin, AvailableCapacity, date, lat, long, Name }: Props) => {
// 	return (
// 		<article class={style.card}>
// 			<a href="#">
// 				<ColoredLine color={cardColor} />
// 				<div class={style.cardContent}>
// 					<h2>{Name}</h2>
// 					<h3>Date: {date}</h3>
// 					<p>Pin:{Pin}</p>
// 					<p>Avaliable Slots: {AvailableCapacity}</p>
// 					<p>Lat: {lat}</p>
// 					<p>Long: {long}</p>
// 				</div>
// 			</a>
// 		</article>
// 	);
// };

const Card = ({ Pin, AvailableCapacity, date, lat, long, Name }: Props) => {
	return (
		<a
			class={style.card}
			style="--bg-img: url(https://images1-focus-opensocial.googleusercontent.com/gadgets/proxy?container=focus&resize_w=1500&url=https://codetheweb.blog/assets/img/posts/links-images-about-file-paths/cover.jpg)"
		>
			<div>
				<p>{Name}</p>
				<h3>Date: {date}</h3>
				<p>Pin:{Pin}</p>
				<p>Avaliable Slots: {AvailableCapacity}</p>
				<p>Lat: {lat}</p>
				<p>Long: {long}</p>
				<div class={style.date}>{AvailableCapacity}</div>
			</div>
		</a>
	);
};

export default Card;
