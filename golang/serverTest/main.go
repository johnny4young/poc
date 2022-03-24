package main

import (
	"fmt"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/", fs)
	http.HandleFunc("/hi", hi)
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		return
	}
}

func hi(w http.ResponseWriter, r *http.Request) {
	_, err := fmt.Fprint(w, "hi")
	if err != nil {
		return
	}
}
