package main

import (
	"strings"
)

func isValid(s string) bool {
	if len(s) < 2 {
		return false
	}
	closers := "}])"
	stack := []string{}
	for i := 0; i < len(s); i++ {

		current := string(s[i])
		if current == "{" {
			stack = append(stack, "}")
		}
		if current == "(" {
			stack = append(stack, ")")
		}
		if current == "[" {
			stack = append(stack, "]")
		}
		if strings.Contains(closers, string(s[i])) {
			if len(stack) < 1 {
				return false
			}

			if current != stack[len(stack)-1] {
				return false
			} else {
				stack = remove(stack, len(stack)-1)
			}
		}
	}
	if len(stack) > 0 {
		return false
	}
	return true
}
func remove(slice []string, s int) []string {
	return append(slice[:s], slice[s+1:]...)
}
