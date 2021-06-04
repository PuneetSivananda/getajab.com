package cowin

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"time"
)




func GetWeeklyData()(APIResponse, error){
	currentTime := time.Now()
	date:= currentTime.Format("02-01-2006")
	// q := os.Getenv("COWINAPIURL")
	URL:= "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=265&date="+ date
	// URL := q+currentTime.Format("02-06-2021")
	fmt.Println(URL)
	req, err := http.NewRequest("GET",URL,nil)
	if err!= nil{
		fmt.Println(err)
		// return []byte(""), err
	}

	client := &http.Client{}
	resp, err := client.Do(req)
	if err !=nil{
		fmt.Println(err)
		// return []byte(""), err
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
		// return []byte(""), err
	}
	
	var centers[] *item

	for _,center:= range response.Centers {
		for _, session:= range center.Sessions{
			fmt.Println(center.Pin, center.Name, session.AvailableCapacity, session.Date, center.Lat, center.Long)
			centers = append(centers, &item{ Pin: center.Pin, 
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
	return p, nil
}