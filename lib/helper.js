'userStrict';

function chgLetNum (item){
  if(typeof(item)==='number'){
    return String.fromCharCode(item);
  }
  else if(typeof(item)==='string'){
    return item.charCodeAt(0);
  }
  else{
    return false;
  }
}


let letterChange = (numLet, start, end) =>{
  if( numLet === end){
    numLet = start;
  }
  numLet = numLet + 1;
  return numLet;
};
  
module.exports = {letterChange, chgLetNum};