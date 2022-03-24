package functions

import (
	"fmt"
	"time"
)

func MiddlewareLog(f func(string)) func(string) {
	return func(name string) {
		fmt.Println(time.Now().Format("20060102150405"))
		f(name)
	}
}
