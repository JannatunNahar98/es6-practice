class Parent{
    constructor(name){
         this.fatherName="xyz";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name=name;

    }
}
const baby= new Child("arnold");
const baby2=new Child("tom")
console.log(baby,baby2);
//oop er tinta core concent inheritance,encapsulation,polymorphism;