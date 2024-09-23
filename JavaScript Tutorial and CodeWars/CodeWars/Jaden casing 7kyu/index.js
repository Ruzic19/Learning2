String.prototype.toJadenCase = function () {
    return this.split(' ').
      map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
  };


  //znaci, String.prototype se referira na svaku string tip varijablu na koju ce se pozvat funkcija toJadenCase
  // nakon toga, this oznacava ova rijec na koju se pozvala funkcija, da se .split(' ') radi. sto znaci da cemo tu rijec na koju smo pozvali funkciju, da cemo je splitat u array sa razmacima. map(w => w[0].toUpperCase() + w.slice(1)).join(' '); ovaj map keyword znaci da ova funkcija loopa kroz array i primjenjuje sljedece, a to je da prvi clan arraya bude veliko slovo w[0].toUpperCase()  a drugi dio je da od indexa [1] na dalje, da se normalno spoje slova u prvotnu rijec w.slice(1)).join(' ')