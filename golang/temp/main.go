package main

import "unsafe"

func main() {
	a := struct{}{}
	println(unsafe.Sizeof(a))
}
