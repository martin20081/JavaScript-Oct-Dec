function catsManager (arr){

    class cat {
        constructor(name  , age ){
            this.name = name;
            this.age = age;
        }

        meow () {
            console.log(`${this.name} , age ${this.age} says Meow`);
            
        }
    }


}

catsManager(['Mellow 2', 'Tom 5'])