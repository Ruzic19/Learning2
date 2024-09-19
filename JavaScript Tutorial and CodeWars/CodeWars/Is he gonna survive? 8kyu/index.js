function hero(bullets, dragons){
    const dragons2 = dragons * 2;
    if (bullets >= dragons2) {
      return true;
    } else {
      return false;
    }
  }

console.log(hero(1500,751));

/*
function hero(bullets, dragons){
  return bullets >= dragons * 2
}
*/