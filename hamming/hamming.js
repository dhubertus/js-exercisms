var Hamming = function() {

}

Hamming.prototype.compute = function(str1, str2) {
  let distance = 0;
  let split1 = str1.split('')
  let split2 = str2.split('')

  if(str1.length !== str2.length) {
    throw 'DNA strands must be of equal length.'
  }

  if(str1 == str2) {
    return distance;
  } else {
    split1.forEach(function(item, i) {
      if (item == split2[i]) {
        return
      } else {
        distance++;
      }
    })
    return distance;
  }


}


module.exports = Hamming;
