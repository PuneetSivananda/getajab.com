package cowin

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"time"
)


type Response struct {
	Centers []Center `json:"centers"`
}

type Center struct {
	CenterId int       `json:"center_id"`
	Name     string    `json:"name"`
	Addr     string    `json:"address"`
	State    string    `json:"state_name"`
	District string    `json:"district_name"`
	Block    string    `json:"block_name"`
	Pin      int    `json:"pincode"`
	Lat      int       `json:"lat"`
	Long     int       `json:"long"`
	Fee      string    `json:"fee_type"`
	Sessions []Session `json:"sessions"`
}

type Session struct {
	SessionID         string `json:"session_id"`
	Date              string `json:"date"`
	AvailableCapacity int    `json:"available_capacity"`
	MinAge            int    `json:"min_age_limit"`
	Vaccine           string `json:"vaccine"`
	Dose1             int    `json:"available_capacity_dose1"`
	Dose2             int    `json:"available_capacity_dose2"`
}


type Item struct {
	Pin               int    `json:"Pin"`
	Name              string `json:"Name"`
	AvailableCapacity int    `json:"AvailableCapacity"`
	Lat               int    `json:"lat"`
	Long              int    `json:"long"`
	Date              string `json:"date"`
}

type APIResponse struct {
	Data []Item `json:"Data"`
}

func GetWeeklyData()(APIResponse, error){
	currentTime := time.Now()
	date:= currentTime.Format("02-01-2006")
	q := os.Getenv("COWINAPIURL")
	URL := q+date
	fmt.Println(URL)
	req, err := http.NewRequest("GET",URL,nil)
	if err!= nil{
		fmt.Println(err)
		return APIResponse{}, err
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err !=nil{
		fmt.Println(err)
		return APIResponse{}, err
	}
 	defer resp.Body.Close()
	fmt.Println(resp.Status)
	
	body, err:= ioutil.ReadAll(resp.Body)
	if err !=nil{
		fmt.Println(err)
	}

	var response Response

	err = json.Unmarshal(body, &response)
	if err!= nil{
		fmt.Println("Failed Unmarshalling response json")
		return APIResponse{}, err
	}

	var centers[] Item

	for _,center:= range response.Centers {
		for _, session:= range center.Sessions{
			// fmt.Println(center.Pin, center.Name, session.AvailableCapacity, session.Date, center.Lat, center.Long)
			centers = append(centers, Item{ 
																			 Pin: center.Pin, 
																			 Name: center.Name, 
																			 AvailableCapacity: session.AvailableCapacity,
																			 Date: session.Date, 
																			 Lat: center.Lat, 
																			 Long: center.Long,
																			})
			// if session.AvailableCapacity > 1{
			// 	fmt.Println(session)
			// } 
		}
	}

	var p APIResponse
	p.Data = centers

	data := APIResponse{
		Data: p.Data,
	}
	
	return data, nil
}