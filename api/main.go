package main

import (
	"fmt"
	"log"
	"net/http"
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
	setupRoot()
}