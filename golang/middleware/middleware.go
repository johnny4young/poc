package middleware

import (
	"fmt"
	"net/http"
	"time"
)

func Log(f func(http.ResponseWriter, *http.Request)) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Println(time.Now().Format("20060102150405"))
		fmt.Printf("request: %q, method: %q", r.URL.Path, r.Method)
		f(w, r)
	}
}

func Authentication(f func(http.ResponseWriter, *http.Request)) func(http.ResponseWriter, *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		token := r.Header.Get("Authorization")
		if token != "very-secret-token" {
			// response forbidden
			forbidden(w, r)
		}

		f(w, r)
	}
}

func forbidden(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusForbidden)
	w.Write([]byte("403 - Forbidden"))
}
