interface ShoppingItem {
    name: string;
    quantity: number;
    price: number;
  }

export class ShoppingList {

    private items: ShoppingItem[] = [];

    addItem(item: ShoppingItem): void {
      this.items.push(item);
    }
  
    removeItem(item: ShoppingItem): void {
      const index = this.items.findIndex(i => i.name === item.name);
      if (index >= 0) {
        this.items.splice(index, 1);
      }
    }
  
    updateItem(item: ShoppingItem): void {
      const index = this.items.findIndex(i => i.name === item.name);
      if (index >= 0) {
        this.items[index] = item;
      }
    }
  
    totalCost(): number {
      return this.items.reduce((total, item) => total + item.quantity * item.price, 0);
    }
  
    findItemByName(name: string): ShoppingItem | undefined {
      return this.items.find(item => item.name === name);
    }
    
}