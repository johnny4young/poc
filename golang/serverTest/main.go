package main

import "net/http"

func main() {
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/", fs)
	http.HandleFunc("/hi", hi)
	http.ListenAndServe(":8080", nil)
}

func hi(w http.ResponseWriter, r *http.Request) {
	w.Write([]byte("hi"))
}
