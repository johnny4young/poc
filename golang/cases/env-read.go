package main

import (
	"fmt"
	"os"
	"strings"
)

func main() {
	env_list := []string{
		"FOO",
		"GOGC",
		"GOTRACEBACK",
		"GOMAXPROCS",
		"GODEBUG", //env GODEBUG=gctrace=1,schedtrace=1000 godoc -http=:8080
	}
	for index, env := range env_list {
		fmt.Println("index is ", index, " ENV ", env, " value is ", os.Getenv(env))
	}

	fmt.Println()
	for _, e := range os.Environ() {
		pair := strings.SplitN(e, "=", 2)
		fmt.Println(pair[0])
	}

}
