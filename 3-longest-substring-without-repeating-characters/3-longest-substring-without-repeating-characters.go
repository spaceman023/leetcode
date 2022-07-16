package main

import (
	"fmt"
	"strings"
)

func lengthOfLongestSubstring(s string) int {
	current := ""
	longest := 0

	for i := 0; i < len(s); i++ {
		if strings.Contains(current, string(s[i])) {
			if len(current) > longest {
				longest = len(current)
			}
			i -= len(current) - 1
			current = string(s[i])

		} else {
			current = current + string(s[i])
		}
	}
	if len(current) > longest {
		longest = len(current)
	}
	return longest
}
