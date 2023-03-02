import Controller from "sap/ui/core/mvc/Controller";

/**
 * @namespace ts02.utils
 */
export default class BaseController extends Controller {

  public howToTypes() {

    // Boolen
    let isDone: boolean = false;
    typeof(isDone); 

    // Number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    typeof(decimal);
    typeof(hex);
    typeof(binary);
    typeof(octal);

    // String
    let name: string = "Max Mustermann";
    typeof(name); 

    // Any
    let notSure: any = "kann alles sein";
    notSure = 42;
    notSure = true;
    typeof(notSure); 

    // Array
    let list: number[] = [1,2,3];
    let fruits: Array<string> = ["Apfel", "Birne", "Banane"];
    typeof(list);
    typeof(fruits);

    // tuple
    let tuple: [string, number] = ["Max Mustermann", 42];
    typeof(tuple);

    // Enum
    enum Color {
      Red,
      Green,
      Blue,
    }
    let c: Color = Color.Green;
    typeof(c);

    // Void
    function logMessage(): void{
      console.log("Eine Nachricht loggen");
    }
    typeof(logMessage);

    // Null und Undefined
    let nullValue: null = null;
    let undefinedValue: undefined = undefined;
    typeof(nullValue);
    typeof(undefinedValue);
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