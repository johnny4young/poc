package main

import "functions"

func execute(name string, f func(string)) {
	f(name)
}

func main() {
	name := "Community Johnny"
	saludarConLog := functions.MiddlewareLog(functions.Saludar)
	execute(name, saludarConLog)
	despedirseConLog := functions.MiddlewareLog(functions.Despedirse)
	execute(name, despedirseConLog)

}
