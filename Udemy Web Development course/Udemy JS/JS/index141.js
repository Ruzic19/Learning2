// PRIMJER CONSTRUCTION FUNKCIJE I KAKO SE PRIMJENJUJE




var houseKeeper1 = {
    name: ' Marinela',
    age: 25,
    language: ["English","Spanish"],
    yearsOfExperience: 3,
    
}
//Construction Funkcija, vidi se po oba capital lettera a ne cammel casing
function HouseKeeper (name,age,language,yearsOfExperience) {
    this.name = name;
    this.age = age;
    this.language = language;
    this.yearsOfExperience = yearsOfExperience;
    this.clean = function() {
        alert('Cleaning in progress');
    };
    
}
// radjenje novog elementa uz pomoc pozivanja Construnction funkcije i njenih parametara
var houseKeeper2 = new HouseKeeper('Angelica',30,["Chinese",'Portugese','English'],5);
var houseKeeper3 = new HouseKeeper('Milivoj',28,["Chinese",'Portugese','English','Rvatski'],60);