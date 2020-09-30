
exports.min = function min (array = '') {
  if(array.length == 0 || array == '') return 0;
  if(array.length == 1) return array[0];
  let minValue = parseFloat(array[0]);
  for(let i = 1; i < array.length;i++){
    if(array[i] < minValue){
      minValue = array[i];
    } 
  }
  return minValue;
}

exports.max = function max (array = '') {
  if(array.length == 0 || array == '') return 0;
  if(array.length == 1) return array[0];
  let maxValue = parseFloat(array[0]);
  for(let i = 1; i < array.length;i++){
    if(array[i] > maxValue){
      maxValue = array[i];
    } 
  }
  return maxValue;
}

exports.avg = function avg (array = '') {
  if(array.length == 0 || array == '') return 0;
  if(array.length == 1) return array[0];
  let sum = 0;
  for(let i = 0; i < array.length;i++){
    sum += parseFloat(array[i])
  }
  return sum/array.length
}
