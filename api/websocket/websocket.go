package websocket

import (
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"strconv"
	"time"

	"github.com/gorilla/websocket"

	"github.com/PuneetSivananda/cowin-api/cowin"
)



var upgrader = websocket.Upgrader{
	ReadBufferSize: 1024,
	WriteBufferSize: 1024,
}


func Upgrade(w http.ResponseWriter, r http.Request) (*websocket.Conn, error) {
	upgrader.CheckOrigin = func(r *http.Request) bool { return true}

	ws, err:= upgrader.Upgrade(w, &r, nil)
	if err!= nil{
		fmt.Println(err)
		return ws, err
	}
	return ws, nil
}

func Writer(conn *websocket.Conn){

	for {
		sToInt,_:= strconv.Atoi(os.Getenv("TICK"))
		ticker:= time.NewTicker(time.Duration(sToInt) * time.Minute)
		for t:= range ticker.C{
			fmt.Printf("Updating data %+v\n", t)
			data, err:= cowin.GetWeeklyData()
			if err!=nil{
				fmt.Println(err)
			}
			jsonString, err := json.Marshal(data)
			if err!=nil{
				fmt.Println(err)
			}

			
			if err:= conn.WriteMessage(websocket.TextMessage, []byte(jsonString))
			
			err!=nil{
				fmt.Println(err)
				return
			}
		}
	}
}