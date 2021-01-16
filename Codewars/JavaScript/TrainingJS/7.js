function saleHotdogs(n){
  var ret;
  
  if(n < 5) ret = 100 * n;
  else if (n < 10) ret = 95 * n;
  else ret = 90 * n;
  
  return ret;
}

/*
other solutions

function saleHotdogs(n){
  return n*(n<5?100:n<10?95:90);
}

const saleHotdogs=n=>n*(n<5?100:n<10?95:90);

let saleHotdogs=n=>(
n<5
    ?100*n
    :n<10
        ?95*n
        :90*n
);

*/
