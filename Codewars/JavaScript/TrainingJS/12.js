function giveMeFive(obj){
  //coding here
  let retArr = [];
  
  for(let key in obj) {
    if(key.length == 5)
      retArr.push(key);
    
    if(obj[key].length == 5)
      retArr.push(obj[key]);
  }
  
  return retArr;
}
