/* eslint-disable */
import { FunctionalComponent, h } from "preact";
import { useEffect, useState } from "preact/hooks";
import Card from "../../components/card";
import style from "./style.css";
import * as L from "leaflet";
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

const Home: FunctionalComponent = () => {
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

	const geolocation: any[] = [];
	let lat;
	let lon;
	navigator.geolocation.getCurrentPosition(async function(position) {
		lat = position.coords.latitude;
		lon = position.coords.longitude;
		geolocation.push(lat, lon);
	});

	console.log(geolocation);

	var container = L.DomUtil.get("map");
	if (container != null) {
		// L.DomUtil.create("div", "map");
		// L.DomUtil.setClass("div", "map");
		document.getElementById("map").innerHTML =
			"<div id='map' style='width: 100px; height: 100px;'>";
		const map = new L.Map("map", {
			center: new L.LatLng(13.0180382, 77.6498932),
			zoom: 12,
		});

		const attribution =
			'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

		const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
		const tiles = L.tileLayer(tileUrl, { attribution });
		tiles.addTo(map);
	}

	if (listItems.Data.length > 0) {
		return (
			<main>
				<div class={style.centered}>
					<div id="map"></div>;{/* Add Cards component into a child that is rerendered */}
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
				</div>
			</main>
		);
	} else {
		return (
			<main>
				<div class={style.centerDiv}>
					<h3>No Data</h3>;
				</div>
			</main>
		);
	}
};

export default Home;
