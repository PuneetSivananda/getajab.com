// https://www.youtube.com/watch?v=n3BQLHtsrkM
package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/joho/godotenv"

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
	port := os.Getenv("PORT")
	log.Println("Started at port : "+port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}

func main(){
	err := godotenv.Load()
  if err != nil {
    log.Fatal("Error loading .env file")
  }
	fmt.Println("DataApi for the Cowin Stats")
	setupRoot()
}