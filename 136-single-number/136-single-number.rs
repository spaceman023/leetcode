impl Solution {
   pub fn single_number(nums: Vec<i32>) -> i32 {
    let mut dic = std::collections::HashMap::new();
    for x in nums.iter() {
        let count = dic.entry(x).or_insert(0);
        *count += 1;
    };
    for (x, y) in dic.iter() {
        if *y == 1 {
            return **x
        }
    };
    return 0;
        
    }
}