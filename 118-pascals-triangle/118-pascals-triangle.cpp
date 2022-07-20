class Solution {
public:
    vector<vector<int>> generate(int numRows) {
        if (numRows < 2)
            return vector<vector<int>> {{1}};
        vector<vector<int>> output = {{1}};
        for (int i = 1; i < numRows; i++){
            vector<int> prev = output[i-1];
            vector<int> row = {};
            for (int j = 1; j < prev.size(); j++){
                row.push_back(prev[j] + prev[j-1]);
            }
            output.push_back(row);
            output[i].push_back(1);
            output[i].insert(output[i].begin(), 1);
        }
        return output;
    }
};