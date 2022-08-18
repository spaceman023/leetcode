func firstUniqChar(s string) int {
    m := make(map[rune][]int)
    for i, v := range s {
        if _ ,ok := m[v]; ok {
            m[v] = append(m[v], i)
        } else {
            m[v] = []int{i}
        }
    }
    min := 10000000000
    for _, v := range m {
        if len(v) < 2 {
            if v[0] < min {
                min = v[0]
            }
        }
    }
    if min < 10000000 {
        return min
    } else {
        return -1
    }
}