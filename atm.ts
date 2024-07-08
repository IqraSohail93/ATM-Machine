import inquirer from "inquirer";

let myBalance = 20000;
let myPin = 1109;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number"
})
if(pinAnswer.pin === myPin){
    console.log("Your pin is correct")
    
    let operationAns = await inquirer.prompt([
        {
            name : "operation",
            message: "Select the option",
            type: "list",
            choices:["Withdraw", "Fast cash", "Check balance"]}])
        // if user select withdraw 
        if(operationAns.operation === "withdraw") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "Enter your amount",
                    type: "number"
                }
            ])
            if (amountAns.amount <= myBalance ){
                let balance = myBalance - amountAns.amount;
                console.log(`The remaining balance is ${balance}`)
            }else{
                console.log(`You have insuggicient balance`)
            }
        }
        // if user select the fast cash
        else if(operationAns.operation === "Fast cash") {
            let FastcashAns = await inquirer.prompt([
                {
                    name: "amount",
                    type: "list",
                    choices: ["1000","3000","5000","10000"]

            }
        ])
        if(FastcashAns.amount <= myBalance) {
            let balane2 = myBalance - FastcashAns.amount;
            console.log(`The remaining balance is ${balane2}`)
        }else{
            console.log(`You have insuggicient balance`)
        }
    }
    else if(operationAns.operation === "Check Balance"){
        console.log(myBalance);
    }
 }
    else{
    console.log("You pin is wrong");
}
