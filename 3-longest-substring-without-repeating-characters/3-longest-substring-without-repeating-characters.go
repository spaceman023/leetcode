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
      for j:=i-len(current); j < i; j++ {
        if s[j] == s[i] {
          current = s[j+1:i+1]
          fmt.Println(current)
        }
      }
     
      
		} else {
			current = current + string(s[i])
		}
	}
	if len(current) > longest {
		longest = len(current)
	}
	return longest
}
