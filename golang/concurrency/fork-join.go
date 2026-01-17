package main

import (
	"fmt"
	"time"
)

func hello() {
	fmt.Println("Hello, World!")
}

func main() {
	go hello()
	fmt.Println("Go routine rulez!")
	time.Sleep(1 * time.Second)
}
