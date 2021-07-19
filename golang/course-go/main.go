package main

import "fmt"

func main() {
	// bool, string, numeric,
	var a uint8 = 100
	var b uint16 = 23000
	c := uint16(a) + b

	fmt.Printf("Tipo: %T, valor: %v", c, c)
}
