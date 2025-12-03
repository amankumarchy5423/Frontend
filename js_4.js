console.log("Working of Function")
function calculate(){
    let oper_1 = document.getElementById("userInput1").value;
    let oper_2 = document.getElementById("userInput2").value;
    let operator = document.getElementById("userInput3").value;

    switch(operator){
        case('+'):
            console.log(`The sum Is : ${oper_1 + oper_2}`);
            break;
            
            case('-'):
            console.log(`The difference Is : ${oper_1 - oper_2}`);
            break;
            
        
    }
}