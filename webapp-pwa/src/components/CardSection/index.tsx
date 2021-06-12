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
		function hasSameCharacter(str1, str2) {
			for (let i = 0; i < str1.length; i++) {
				if (str2.indexOf(str1[i]) <= -1) return false;
			}
			for (let i = 0; i < str2.length; i++) {
				if (str1.indexOf(str2[i]) <= -1) return false;
			}
			return true;
		}

		websocket.onmessage = function(evnt) {
			data = JSON.parse(evnt.data);
			const dataList = data.Data;
			const mon = new Date().getMonth() + 1;
			const formatDate = new Date().getDate() + "-" + mon + "-" + new Date().getFullYear();
			const returnList: DataItem[] = [];
			dataList.forEach(item => {
				if (hasSameCharacter(item.date, formatDate)) {
					returnList.push(item);
				}
			});
			console.log("Sending data to the connected websocket");
			setData({ Data: returnList });
		};
	}, [setData]);

	if (listItems.Data.length > 0) {
		return (
			<section class={style.cards}>
				{listItems.Data.map((item: DataItem) => {
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
				<img src="../../assets/img/tenor.gif" />
			</section>
		);
	}
};

export default CardSection;
function str1(str1: any, str2: any): any {
	throw new Error("Function not implemented.");
}

function str2(str1: (str1: any, str2: any) => any, str2: any): any {
	throw new Error("Function not implemented.");
}
