import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace ts02.controller
 */
export default class BaseController extends Controller {

  public howToTypes() {

    // Boolen
    let isDone: boolean = false;
    typeof (isDone);

    // Number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    typeof (decimal);
    typeof (hex);
    typeof (binary);
    typeof (octal);

    // String
    let name: string = "Max Mustermann";
    typeof (name);

    // Any
    let notSure: any = "kann alles sein";
    notSure = 42;
    notSure = true;
    typeof (notSure);

    // Array
    let list: number[] = [1, 2, 3];
    let fruits: Array<string> = ["Apfel", "Birne", "Banane"];
    typeof (list);
    typeof (fruits);

    // tuple
    let tuple: [string, number] = ["Max Mustermann", 42];
    typeof (tuple);

    // Enum
    enum Color {
      Red,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    typeof (c);

    // Void
    function logMessage(): void {
      console.log("Eine Nachricht loggen");
    }
    typeof (logMessage);

    // Null und Undefined
    let nullValue: null = null;
    let undefinedValue: undefined = undefined;
    typeof (nullValue);
    typeof (undefinedValue);
  }

  public Training0201(): void {
    let myTuple: [number, number, number, string] = [1, 2, 3, "Hallo"];

    let sum: number = 0;
    sum = myTuple[0] + myTuple[1] + myTuple[2];
    // So Schlau ist TypeScript leider nicht.. :-/
    // for (let i = 0; i < myTuple.length - 1; i++) {
    //     sum += myTuple[i];
    // }
    console.log(`${myTuple[3]}: ${sum}`);
  }

  public Training0202(): void {
    main();

    // Eine asynchrone Funktion, die eine API anruft und eine Liste von Benutzern zurückgibt
    async function getUsers(): Promise<any[]> {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      return data;
    }

    async function sendEmailToUsers(
      message: string,
      aEmails: string[],
      prio?: string,
      ...notes: string[]
    ): Promise<void> {
      for (const email of aEmails) {
        console.log(`Sending email to ${email} with the Message ${message} and this Notes: ${notes}`);
      }
    }

    // Ein Beispielprogramm, das diese Funktionen kombiniert, um die durchschnittliche Länge des Namens der ersten 5 Benutzer von einer API abzurufen und sie zu grüßen
    async function main() {
      const aUsers = await getUsers();
      const aEmails = aUsers.map(user => user.email);

      await sendEmailToUsers('Hallo, bitte besuche die UX55.', aEmails, undefined, "Anahnang1", "Anahng2", "Anhang3");
      console.log('E-Mails erfolgreich gesendet!');
    }



  }

  public howToFunction(): void {

    // Typiesierung von Parametern u. Rückgabewerten
    let c = add(3, 8);
    console.log(c);
    function add(a: number, b: number): number {
      return a + b;
    }

    //Standard Parameter
    let s = greet();
    console.log(s);
    function greet(name: string = 'World'): string {
      return `Hello, ${name}!`;
    }

    //Optionale Parameter
    let o = greet2();
    console.log(o);
    function greet2(name?: string): string {
      return `Hello, ${name}!`;
    }

    // Rest Parameter
    let r1 = sumNumber(1, 2, 3, 4, 5);
    let r2 = sumNumber(6, 7, 8);
    console.log(r1);
    console.log(r2);
    function sumNumber(...zahlenAdd: number[]): string {
      let Summe = zahlenAdd.reduce((total, num) => total + num, 0);
      return `Die Summe ergibt: ${Summe}!`;
    }

    // Funktion als Methode
    const obj = {
      foo() {
        console.log("Hello world");
      }
    }
    obj.foo();

    // Generatorfunktion
    function* generateNumbers() {
      yield 'Text';
      yield 3;
    }
    const generator = generateNumbers();
    console.log(generator.next()); // Text 
    console.log(generator.next()); // 3

    // Async-Function
    let a = waitAndLog();
    typeof (a);
    async function waitAndLog(): Promise<void> {
      await wait(3000);
      console.log("Nachricht nach 3 Sekunden Wartezeit");
    }
    async function wait(ms: number): Promise<void> {
      await new Promise(resolve => setTimeout(resolve, ms));
    }
  }
  
  public howToClass01(): void{
    interface IAnimal {
      name: string;
      sound: string;
      speak(): void;
    }
    
    class Dog implements IAnimal {
      name: string;
      sound: string;
    
      constructor(name: string, sound: string) {
        this.name = name;
        this.sound = sound;
      }
    
      speak(): void {
        console.log(`${this.name} says ${this.sound}`);
      }
    }
    const myDog = new Dog('Rex', 'Woof');
    myDog.speak(); // Output: "Rex says Woof"
  }

  public howToClass02(): void{
    class Car {
      private model: string;
      private brand: string;
      private year: number;
    
      constructor(model: string, brand: string, year: number) {
        this.model = model;
        this.brand = brand;
        this.year = year;
      }
    
      public getModel(): string {
        return this.model;
      }
    
      public getBrand(): string {
        return this.brand;
      }
    
      public setYear(year: number): void {
        this.year = year;
      }
    
      public getYear(): number {
        return this.year;
      }
    
      public drive(): void {
        console.log(`Driving ${this.brand} ${this.model}!`);
      }
    }
    
    // Beispiel-Nutzung
    const myCar = new Car('Civic', 'Honda', 2020);
    console.log(myCar.getModel()); // Ausgabe: 'Civic'
    console.log(myCar.getBrand()); // Ausgabe: 'Honda'
    console.log(myCar.getYear()); // Ausgabe: 2020
    myCar.setYear(2022);
    console.log(myCar.getYear()); // Ausgabe: 2022
    myCar.drive(); // Ausgabe: 'Driving Honda Civic!'
  }

  public howToClass03(): void{
    class Animal {
      name: string;
      age: number;
      weight: number;
    
      constructor(name: string, age: number, weight: number) {
        this.name = name;
        this.age = age;
        this.weight = weight;
      }
    
      eat(food: string): void {
        console.log(`${this.name} is eating ${food}.`);
      }
    }
    
    class Dog extends Animal {
      breed: string;
    
      constructor(name: string, age: number, weight: number, breed: string) {
        super(name, age, weight);
        this.breed = breed;
      }
    
      bark(): void {
        console.log(`${this.name} is barking.`);
      }
    }
    
    // Beispielverwendung
    const myDog = new Dog("Buddy", 5, 20, "Labrador");
    myDog.eat("kibble"); // "Buddy is eating kibble."
    myDog.bark(); // "Buddy is barking."
  }
  public howToCheckType(): void{
    // let zahl: number = "Test";

    function addNumber(num1: number, num2: number): number{
      return num1 + num2;
    }
    // const result = addNumber(10, 'Test');
  }

  public howToGenerics(): void {

    // Beispiel mit Generic Type
    function getFirstItem<T>(arr: T[]): T {
      return arr[0];
    }

    let arr1: string[] = ["Apfel", "Birne", "Banane"];
    let firstItem1 = getFirstItem<string>(arr1); // Typ von firstItem1 ist string

    let arr2: number[] = [1, 2, 3];
    let firstItem2 = getFirstItem<number>(arr2); // Typ von firstItem2 ist number
    // firstItem2 = "Test";

    // Beispiel mit Any Type
    function getFirstItemAny(arr: any[]): any {
      return arr[0];
    }

    let arr3: string[] = ["Apfel", "Birne", "Banane"];
    let firstItem3 = getFirstItemAny(arr3); // Typ von firstItem3 ist any
    firstItem3 = 3;

    let arr4: number[] = [1, 2, 3];
    let firstItem4 = getFirstItemAny(arr4); // Typ von firstItem4 ist any

  }
}