import { h, FunctionalComponent } from "preact";
import style from "./style.css";
import Card from "../card";
import { useEffect, useState } from "preact/hooks";

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

const CardSection: FunctionalComponent = () => {
	let data: DataList = { Data: [] };
	const websocket = new WebSocket("wss://evening-crag-51333.herokuapp.com/data");

	const [listItems, setData] = useState<DataList>({ Data: [] });

	useEffect(() => {
		websocket.onmessage = function(evnt) {
			data = JSON.parse(evnt.data);
			console.log("Sending data to the connected websocket");
			setData(data);
		};
	}, [setData]);

	if (listItems.Data.length > 0) {
		return (
			<section class={style.cards}>
				{listItems.Data.map(item => {
					return (
						<Card
							Pin={item.Pin}
							AvailableCapacity={item.AvailableCapacity}
							date={item.date}
							lat={item.lat}
							long={item.long}
							cardColor={item.AvailableCapacity > 0 ? "green" : "red"}
							Name={item.Name}
						/>
					);
				})}
			</section>
		);
	} else {
		return (
			<section class={style.centerDiv}>
				{/* <h3>No Data</h3> */}
				<img src="../../assets/img/tenor.gif" />
			</section>
		);
	}
};

export default CardSection;
