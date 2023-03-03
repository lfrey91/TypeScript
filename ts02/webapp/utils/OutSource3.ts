function testClass(C: any){
    console.log("test Class Decorator");
    return C;
}

function testMethod(M: any){
    console.log("test Method Decorator");
    return M;
}

// @testClass
export class Decorator {

    // @testMethod(1)
    howToDocorator(){
        console.log("Method Output");
    }
    
}