function rangeOfNumbers(startNum, endNum) {
    //var range = endNum-startNum;
    var countArray = [startNum];
     if(startNum > endNum){

      return [] + "startNum must be less or equal to endNum";
    } 
    else {
    while (startNum <= endNum) {
      startNum++;
      countArray.push[startNum];
      countArray = rangeOfNumbers(startNum, endNum);
      break;
    }
    }
    return countArray;

  }
  
  console.log(rangeOfNumbers(9,1));
  console.log(rangeOfNumbers (1,5));
  console.log(rangeOfNumbers(6,9));
  console.log(rangeOfNumbers(4,4));
  