/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    let rows = {};
    let cols = {};
    let squares = {};
    
    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[0].length; j++){
            let val = board[i][j];
            if (val == ".") continue;
            let square = `${Math.floor(i/3)},${Math.floor(j/3)}`;
            if (!rows[i]){
                rows[i] = [val];
            } else {
                if (rows[i].includes(val)) return false
                rows[i].push(val);
            }
            
            if (!cols[j]){
                cols[j] = [val];
            } else {
                if (cols[j].includes(val)) return false
                cols[j].push(val);
            }
            
            if (!squares[square]){
                squares[square] = [val];
            } else {
                if (squares[square].includes(val)) return false
                squares[square].push(val);
            }
        }
    }
    return true;
};