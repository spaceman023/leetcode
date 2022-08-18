func romanToInt(s string) int {

	singles := make(map[string]int)
	singles["I"] = 1
	singles["V"] = 5
	singles["X"] = 10
	singles["L"] = 50
	singles["C"] = 100
	singles["D"] = 500
	singles["M"] = 1000
	count := 0
	for i := 0; i < len(s); i++ {
		letter := s[i]
		iVal := singles[string(letter)]
		if i < len(s)-1 {
			jVal := singles[string(s[i+1])]

			if iVal < jVal {
				count = count + (jVal - iVal)
				i = i + 1
			} else {
				count = count + iVal
			}
		} else {
			count = count + iVal
		}
	}
	return count
}