package cowin

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
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

func GetWeeklyData()(Response, error){
	currentTime := time.Now()
	date:= currentTime.Format("02-01-2006")
	// q := os.Getenv("COWINAPIURL")
	URL:= "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=265&date="+ date
	// URL := q+currentTime.Format("02-06-2021")
	fmt.Println(URL)
	req, err := http.NewRequest("GET",URL,nil)
	if err!= nil{
		fmt.Println(err)
		return Response{}, err
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err !=nil{
		fmt.Println(err)
		return Response{}, err
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
		return Response{}, err
	}
	
	return response, nil
	
}