var dnaTranscriber = function() {

}

dnaTranscriber.prototype.toRna = function(input) {
  var matches = {
    C: 'G',
    G: 'C',
    A: 'U',
    T: 'A'
  }
  var result = [];
  var split = input.split('');

  split.forEach(function(item) {
    if (!matches[item]) {
      throw 'Invalid input';
    } else {
      result.push(matches[item])
    }
  })
  return result.join('');
}

module.exports = dnaTranscriber;
