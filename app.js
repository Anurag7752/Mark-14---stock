// setup 1 - selecting all the element
var initialPrice = document.querySelector('#Initial-price');
var stocksQuantity = document.querySelector('#Stacks-quantity');
var currentPrice = document.querySelector('#Current price');
var submitBtn = document.querySelector('#submit-btn');
var outputBox = document.querySelector('#output-box');

submitBtn.addEventListener('click', submitHandler);

function submitHandler(){
    var ip = Number (initialPrice.value);
    var qty = Number (stocksQuantity.value);
    var curr = Number (currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity,
    Current){
        if (initial > Current){
            var loss = (initial - Current) * quantity;
            var lossPercentage = (loss / initial) * 100;
            showOutput('Hey the loss is $(loss) and the percent is ${lossPercentage}%');
        }else if (Current > initial) {
            var profit = (current - initial * quantity);
            var profitPercentage = (profit / initial)* 100;
        
            showOutput('Hey the profit is ${profit} and the percent is ${profitPercentage}%');
        }else{
            showOutput('No pain no pain and  no gain no pain');

        }
    } 

    function showOutput(message, statics){
        // switch (key){
        //     case "PROFIT";
        //     outputBox.innerHTML = message
        //     break;
        // case "Loss";
        //      outputBox.innerHTML = message
        //     case""
        //     default:
        //         break;
        // }

        outputBox.innerHTML = message;

    }
