package main

import (
	"context"
	"log"
	"net/http"
	"os"
	"os/signal"
)

func listenAndCancel(c chan os.Signal, cancel context.CancelFunc) {
	oscall := <-c
	log.Printf("system call: %+v", oscall)
	cancel()
}

func StartServer(ctx context.Context) {
	println("hola")
	if err := http.ListenAndServe(":8080", nil); err != nil {
		log.Fatal(err)
	}
}

func main() {
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt)
	ctx, cancel := context.WithCancel(context.Background())

	go listenAndCancel(c, cancel)

	StartServer(ctx)
}
