const transpose = function(matrix) {
    let result = [];
    for (let x = 0; x < matrix.length; x ++) {
      for (let y = 0; y < matrix[x].length; y++) {
        if (!result[y]) {
          result[y] = [];
        }
        result[y].push(matrix[x][y]);
      }
    }
    return result;
  };

    const wordSearch = (letters, word) => { 
    // Horisontal
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        // console.log(l);
        if (l.includes(word)) {
            return true;
        } 
    }

     
    let vertical = transpose(letters);
    // console.log(vertical);

    verticalJoin = vertical.map(ls => ls.join(''))
     for (l of verticalJoin) {
        // console.log(l);
         if (l.includes(word)) {
             return true;
         } 
     }

    return false;
}

module.exports = wordSearch



// console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'SEINFELD')); 
  

//   console.log(wordSearch([
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
//   ], 'ASYHWBUOE'));

  
  