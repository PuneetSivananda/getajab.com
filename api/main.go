// https://www.youtube.com/watch?v=n3BQLHtsrkM
package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/PuneetSivananda/cowin-api/websocket"
)

func CowinData(w http.ResponseWriter, r *http.Request){
	ws, err:= websocket.Upgrade(w,*r)
	if err!= nil{
		fmt.Fprintf(w,"%+v\n",err)
	}
	//Passing the websocket connection, writes to the websocket
	go websocket.Writer(ws)
}

func homePage(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w,"Hello World")
}

func setupRoot(){
	http.HandleFunc("/",homePage)
	http.HandleFunc("/data", CowinData)
	log.Fatal(http.ListenAndServe(":8081", nil))
}

func main(){
	fmt.Println("DataApi for the Cowin Stats")
	setupRoot()
}