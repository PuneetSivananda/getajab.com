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
		const uniqueDate = [...new Set(listItems.Data.map(center => center.date))];
		const loopData = Array.from(uniqueDate[0]);
		const filtered = loopData.map(ud => {
			const dateItems = listItems.Data.filter(d => d.date == ud);
			dateItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
			return dateItems[0];
		});

		const sortedItems = listItems.Data.slice().sort((a, b) => b.date - a.date);
		const Unique = arr => {
			//Store the unique
			const uniques = [];

			//Track the items added to the uniques
			const itemsFound = {};
			for (const val of arr) {
				if (itemsFound[val.Pin]) {
					continue;
				}

				//Else push it to the unique list
				uniques.push(val);

				//Mark it as added
				itemsFound[val.Pin] = true;
			}

			//Return the uniques
			return uniques;
		};
		let uniqueData = [];
		uniqueData = Unique(sortedItems);
		listItems.Data = uniqueData;
		return (
			<section class={style.cards}>
				{listItems.Data.map((item: DataItem) => {
					return (
						<div className="card">
							<Card
								Pin={item.Pin}
								AvailableCapacity={item.AvailableCapacity}
								date={item.date}
								lat={item.lat}
								long={item.long}
								cardColor={item.AvailableCapacity > 0 ? "green" : "red"}
								Name={item.Name}
							/>
						</div>
					);
				})}
			</section>
		);
	} else {
		return (
			<section class={style.centerDiv}>
				<img src="../../assets/img/tenor.gif" />
			</section>
		);
	}
};

export default CardSection;
