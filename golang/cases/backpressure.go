package main

import (
	"errors"
	"log"
	"net/http"
)

// Struct to hold channels
type PressureGauge struct {
	ch chan struct{}
}

// Function on above struct to apply pressure
func (pg *PressureGauge) ApplyLimit(f func()) error {
	select {
	// receive struct values from PressureGauge
	case <-pg.ch:
		// execute the passed function
		f()
		// refill the PressureGauge
		pg.ch <- struct{}{}
		return nil

	default:
		// raise error if PressureGauge's capacity is exhausted
		return errors.New("no more capacity")
	}
}

// Function to initiate limits using the struct
func SetLimit(limit int) *PressureGauge {
	// initiate channels
	ch := make(chan struct{}, limit)
	// fill up channel capacity
	for i := 0; i < limit; i++ {
		ch <- struct{}{}
	}

	return &PressureGauge{
		ch: ch,
	}
}

// Applying backpressure on requests
func main() {
	// initiate back pressure limit
	pg := SetLimit(5)

	http.HandleFunc("/request", func(w http.ResponseWriter, r *http.Request) {
		err := pg.ApplyLimit(func() {
			//w.Write([]byte(doLimitedStuff()))
			log.Println("Pressureto do limited stuff")
		})
		if err != nil {
			w.WriteHeader(http.StatusTooManyRequests)
			w.Write([]byte("too many requests"))
		}
	})

	http.ListenAndServe(":8080", nil)
}
