class Person{
    constructor(name = "Vineesha", age=0){
        this.name = name;
        this.age = age;
    }
    getGrettings(){
        return `Hi. I'm ${this.name}`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person{
    constructor(name , age, Qualification){
        super(name, age);
        this.Qualification = Qualification;
    }

    hasQualification(){
        return !!this.Qualification;
    }

    getDescription(){
        let description = super.getDescription();

        if(this.hasQualification()){
            description += ` . He is Qualified in ${this.Qualification}`;
        }
        return description;
    }
}

class Traveller extends Student{
    constructor(name, age, Qualification, place){
        super(name, age, Qualification);
        this.place = place;
    }
    getGrettings(){
        let grettinges = super.getGrettings();
        let description = super.getDescription();
        return grettinges += `. I'm from ${this.place}.Age is ${this.age}`;

    }
}

const p1 = new Traveller('Saiteja', 26, 'AWS Engineer', "hyderabad");
console.log(p1.getGrettings());

const p2 = new Traveller();
console.log(p2.getGrettings());