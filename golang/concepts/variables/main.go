package main

import "fmt"

const (
	developer = "Johnny"
	domain    = "github.com/johnny4young"
	version   = "1.0.0"
)

const (
	Jan = 1 + iota //iota is a predeclared identifier representing the untyped integer ordinal number of the current const specification in a (usually parenthesized) const declaration. It is zero-indexed.
	Feb
	Mar
	Apr
	May
	Jun
	Jul
)

func main() {
	// bool, string, numeric,
	var a uint8 = 100
	var b uint16 = 23000
	c := uint16(a) + b

	fmt.Printf("Tipo: %T, valor: %v", c, c)

	var apple string
	apple = ":apple:"
	fmt.Println(apple)
}
