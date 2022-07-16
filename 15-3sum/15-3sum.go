func threeSum(nums []int) [][]int {
    sort.Ints(nums)   
    output := [][]int{}
    for i := 0; i < len(nums); i++ {
        if i != 0 && nums[i] == nums[i-1]{
            continue
        }
        j := i + 1
        k := len(nums) - 1;
        for j < k {
            sum := nums[i] + nums[j] + nums[k] 
            if sum == 0 {
                output = append(output, []int{nums[i], nums[j], nums[k]})
                j++
                for j < k && nums[j] == nums[j-1]{
                    j++
                }
            }
            if sum < 0 {
                j++
            } else {
                k-- 
            }
        }
    }
    return output
}