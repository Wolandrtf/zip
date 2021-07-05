function zip(string) {
  //short way
  if (string.length <= 1) {
    return string;
  }
  
  const stringToArray = string.split('');
  const stringToArraySorted = stringToArray.sort();
  
  const charArray = stringToArraySorted.map(char => char.charCodeAt(0));
  
  let result = [];
  let innerArr = [];
  
  for (let i = 0; i < charArray.length; i++) {
    const diff = charArray[i+1] - charArray[i];
    if (diff === 1) {
      innerArr.push(charArray[i]);
    } else {
      innerArr.push(charArray[i]);
      result.push(innerArr);
      innerArr = [];
    }
  }
  let result2 = [];
  
  result.forEach(res => {
    switch(res.length) {
      case 2:
        result2.push(String.fromCharCode(res[0]), String.fromCharCode(res[1]));
        break;
      case 1:
        result2.push(String.fromCharCode(res[0]));
        break;
      default:
        result2.push(String.fromCharCode(res[0]) +  '-' + String.fromCharCode(res[res.length - 1]))
        break;
    }
  })

  
return result2.join(',')
}


module.exports.zip = zip;
