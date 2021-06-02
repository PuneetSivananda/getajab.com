package cowinStruct

import (
	"net/http"	"time"
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
	Pin      string    `json:"pincode"`
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

func getWeeklyData() (Item, error) {
	currentTime := time.Now()
	URL:= "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=265&date="+ currentTime.format("02-06-2021")
	// req, err := http.NewRequest("GET",URL)
	return URL
}