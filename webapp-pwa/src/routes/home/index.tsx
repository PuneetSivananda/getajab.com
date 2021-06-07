/* eslint-disable */
import { FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import Card from '../../components/card';
import style from './style.css';

interface DataItem{
  AvailableCapacity: number
  Name: string
  Pin: number
  date: string
  lat: number
  long: number
}

interface DataList { Data: DataItem[] }

let data: DataList = {Data:[]}
const websocket = new WebSocket('ws://evening-crag-51333.herokuapp.com/data');

const fetchData = () => {

	websocket.onopen = function(evt) {
		console.log('Successfully connected to the websocket');
	};

	websocket.onerror = function(err) {
		console.log(err);
	};

	websocket.onmessage = function(evnt) {
		data = JSON.parse(evnt.data);
		console.log('Sending data to the connected websocket');
	};
	return data;
};



const Home: FunctionalComponent = () => {
  const [listItems, setData] = useState<DataItem[]>([])
  
  useEffect(() => { 
  
    websocket.onmessage = function(evnt) {
      data = JSON.parse(evnt.data);
      console.log('Sending data to the connected websocket');
      setData(data.Data)
      console.log(data)
    };
    
  }, [setData])

  if (listItems.length > 0) {
    console.log(listItems)
    return (
      <main>
        <div class={style.centered}>
          <section class={style.cards}>
            {
              listItems.map(item => {
                <Card
              
                  image="http://placekitten.com/810/610"
                  cardColor={item.date}
                  title={JSON.stringify(item.Name)}
                  body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum explicabo consequatur
              consectetur fugit molestias perferendis, sint error iste ut, facilis sunt natus optio dolor
              nesciunt laboriosam obcaecati corporis numquam."
                />
              })
              
            }
            
          </section>
        </div>
      </main>
    );  
  }
  else {
    return (<h1 class={style.centered} >No Data</h1>)
  }
};

export default Home;
