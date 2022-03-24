package functions

import (
	"fmt"
	"time"
)

type MyFunction func(string)

func MiddlewareLog(f MyFunction) MyFunction {
	return func(name string) {
		fmt.Println(time.Now().Format("20060102150405"))
		f(name)
	}
}
