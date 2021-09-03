package main

import (
	"fmt"
	"sync"
)

func main() {
	counter := 0
	wg := sync.WaitGroup{}
	for i := 0; i < 1000; i++ {
		wg.Add(1)
		go func() { counter++; wg.Done() }()
	}

	wg.Wait() // esto se asegura que todos los hilos terminen.
	fmt.Println(counter)
}

// go run datarace.go
// go run -race datarace.go

// func main() {
// 	counter := 0
// 	wg := sync.WaitGroup{}
// 	mu := sync.Mutex{}

// 	for i := 0; i < 1000; i++ {
// 		wg.Add(1)
// 		go func() {
// 			mu.Lock()
// 			counter++
// 			mu.Unlock()

// 			wg.Done()
// 		}()
// 	}

// 	wg.Wait()
// 	fmt.Println(counter)
// }
