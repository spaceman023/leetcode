package main

import (
	"strings"
)

func longestPalindrome(s string) string {
	z := s
	for i := 0; i < len(s)*2+1; i += 2 {
		z = z[:i] + "-" + z[i:]
	}
	longest := ""
	for i, v := range z {
		if i == 0 || i == len(z)-1 {
			continue
		}
		curr := string(v)
		for j, k := i+1, i-1; j < len(z) && k > 0; j++ {
			if z[j] == z[k] {
				curr = string(z[k]) + string(curr) + string(z[j])
			} else {
				break
			}
			k--
		}
		if len(curr) > len(longest) {
			longest = curr
		}

	}
	longest = strings.ReplaceAll(longest, "-", "")
	return longest
}
