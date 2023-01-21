// const arr = [
//     1, 3, [5, 6, [7, [6, 5], 4], 3], [4]
//  ];
 
//  const result = [];
 
//  function flat(array) {
//      let counter = 0;
//      while(counter < array.length) {
//          const val = array[counter];
         
//          if (Array.isArray(val)) {
//              flat(val);
//          } else {
//              const index = result.findIndex(v => v === val);
//              if (index === -1) result.push(val);
//          }
//          counter++;
//      }
//  }
 
//  flat(arr);
//  console.log(result);
