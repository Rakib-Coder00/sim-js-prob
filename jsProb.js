//Problem 01 : ana to vori


function anaToVori(num) {
    if (typeof num != "number" || num <= 0) {
        return 'Out Of Range!'
    }        
    let vori = num * 0.0625
    return vori
}
anaToVori()






//Problem 02 : pandaCost


let singaraPrice = 7
samuchaPrice = 10
jilapiPrice= 15

function pandaCost(singara, samucha, jilapi) {
    if (typeof singara  != "number" || typeof samucha != "number" || typeof jilapi != "number"  || singara <=0 || samucha <=0 ||jilapi <=0) {
        return 'Please, Provide a valid amount'
    }   
    let = singaraOrderPrice = singara * singaraPrice
    samuchaOrderPrice = samucha * samuchaPrice
    jilapiOrderPrice = jilapi * jilapiPrice

    let totalPrice = singaraOrderPrice + samuchaOrderPrice + jilapiOrderPrice
    return totalPrice
}
pandaCost()





//Problem 03 : picnicBudget



function picnicBudget(numOfParticipant) {
    if (typeof numOfParticipant != "number" || numOfParticipant <= 0) {
        return 'Please, Provide a valid number'
    }
    else if (numOfParticipant <= 100) {
        let costPerParticipant = 5000
        let totalCost = numOfParticipant * costPerParticipant
        return totalCost
    }
    else if (numOfParticipant > 100 && numOfParticipant <= 200) {
        let costFirstHundreds = 100 * 5000
        let costRestParticipant = (numOfParticipant - 100) * 4000
        let totalCost = costFirstHundreds + costRestParticipant
        return totalCost
    }
    else{
        let costFirstHundreds = 100 * 5000
        let costSecondHundreds = 100 * 4000
        let costRestParticipant = (numOfParticipant - 200) * 3000
        let totalCost = costFirstHundreds + costSecondHundreds + costRestParticipant
        return totalCost
    }
}
picnicBudget()




// Problem 04 : oddFriend


function oddFriend(names) {
    if (typeof names != 'object') {
        return 'Please, give a valid input'
    }
    for (element of names) {
        if (element.length % 2 !== 0) {
            return element 
        }
    }
}
oddFriend()