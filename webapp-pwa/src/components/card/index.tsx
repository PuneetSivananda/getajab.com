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

const Card = ({ Pin, AvailableCapacity, date, lat, long, Name }: Props) => {
	return (
		<div className="card">
			<a class={style.card} style="--bg-img: url(../../../../assets/img/cover.jpg)">
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
		</div>
	);
};

export default Card;
