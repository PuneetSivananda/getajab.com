package main

import (
	"fmt"
	"log"
	"net/http"

	"github.com/PuneetSivananda/cowin-api/cowin"
)

func homePage(w http.ResponseWriter, r *http.Request){
	fmt.Fprintf(w,"Hello World")
}

func setupRoot(){
	http.HandleFunc("/",homePage)
	log.Fatal(http.ListenAndServe(":8081", nil))
}

func main(){
	fmt.Println("DataApi for the Cowin Stats")
	
	data, err:= cowin.GetWeeklyData()
	if err!=nil{
		fmt.Println(err)
	}
	fmt.Printf("%+v\n", data)
	
	// setupRoot()
}