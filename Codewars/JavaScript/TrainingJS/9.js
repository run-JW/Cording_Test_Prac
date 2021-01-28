function padIt(str,n){
  //coding here
  let i = 0;
  
  while(i < n) {
    if(i % 2 == 0)
      str = '*' + str;
    else
      str = str + '*';
    
    i++;
    }
  
  return str;
}
