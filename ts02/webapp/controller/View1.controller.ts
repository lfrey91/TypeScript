import BaseController from "ts02/controller/BaseController";
import { OutSource } from "ts02/utils/OutSource";
import { ShoppingList } from "ts02/utils/OutSource2";
import { Decorator } from "ts02/utils/OutSource3";

export default class View1 extends BaseController {

  public onInit(): void {

    debugger;
    // this.howToTypes();
    // this.Training0201();
    this.howToFunction();
    // this.Training0202();
    // this.howToClass01();
    // this.howToClass02();
    // this.howToClass03();

    // const instanz = new OutSource();
    // instanz.howToClass04();

    // const shoppingList = new ShoppingList();
    // shoppingList.addItem({ name: 'Milk', quantity: 1, price: 1.99 });
    // shoppingList.addItem({ name: 'Bread', quantity: 2, price: 2.49 });
    // shoppingList.updateItem({ name: 'Bread', quantity: 1, price: 2.99 });
    // shoppingList.removeItem({ name: 'Milk', quantity: 1, price: 1.99 });
    // console.log(shoppingList.totalCost()); // 5.98
    // console.log(shoppingList.findItemByName('Bread')); // { name: 'Bread', quantity: 1, price: 2.99 }

    // this.howToCheckType();
    // this.howToGenerics();
    
    // const deco = new Decorator();
    // deco.howToDocorator();
  }
}