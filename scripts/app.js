//player selection function
function playerSelect(playerId, btnId) {
    const player = document.getElementById(playerId);
    const PlayerList = document.getElementById('player-list');
    const li = document.createElement('li');
    li.innerText = player.innerText;
    PlayerList.appendChild(li);

    const disabledButton = document.getElementById(btnId);
    disabledButton.setAttribute('disabled', '');
    disabledButton.style.backgroundColor = 'gray';
    disabledButton.innerText = 'SECECTED';
}
//over five selection disabled function
function selectedPlayer(playerId, btnPlayerId) {
    const orderList = document.getElementById('player-list').childElementCount;

    if (orderList >= 5) {

        return alert('You cant Select over 5 Player')
    }
    else {
        playerSelect(playerId, btnPlayerId)
    }
}
//Get input Field Value Funcation

function getInputFieldValue(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldString);
    return inputFieldValue;

}
//Get Element Field Value Funcation
function getElementFieldValue(ElementId) {
    const elementField = document.getElementById(ElementId);
    const elementFieldString = elementField.innerText;
    const elementFieldValue = parseFloat(elementFieldString);

    return elementFieldValue;
}
//Element Set Funcation 
function setElementValue(elementId, value) {
    const elementField = document.getElementById(elementId);
    elementField.innerText = value;
}
document.getElementById('btn-player-1').addEventListener('click', function () {
    selectedPlayer('player-1', 'btn-player-1')
})
document.getElementById('btn-player-2').addEventListener('click', () => {
    selectedPlayer('player-2', 'btn-player-2')
})
document.getElementById('btn-player-3').addEventListener('click', () => {
    selectedPlayer('player-3', 'btn-player-3')
})
document.getElementById('btn-player-4').addEventListener('click', () => {
    selectedPlayer('player-4', 'btn-player-4')
})
document.getElementById('btn-player-5').addEventListener('click', () => {
    selectedPlayer('player-5', 'btn-player-5')
})
document.getElementById('btn-player-6').addEventListener('click', () => {
    selectedPlayer('player-6', 'btn-player-6')
})

function getPlayerExpanses() {
    const playerNumber = document.getElementById('player-list').childElementCount;
    const perPlayer = getInputFieldValue('per-player-field');
    const playersCharge = playerNumber * perPlayer;

    if (isNaN(playersCharge)) {
        alert('Please give Number Value');
    }
    else {
        setElementValue('player-expenses', playersCharge)
    }
}
//total caculate funcction 
function totalCostCalculate() {
    const playerCharge = getElementFieldValue('player-expenses');
    const managerCharge = getInputFieldValue('manager-field');
    const coachCharge = getInputFieldValue('coach-field');

    const totalCost = playerCharge + managerCharge + coachCharge;

    if (isNaN(totalCost)) {
        alert('Please give number value')
    }
    else {
        setElementValue('total-cost', totalCost)
    }
}
document.getElementById('btn-calculate').addEventListener('click', () => {
    getPlayerExpanses()
})

document.getElementById('btn-total-calculate').addEventListener('click', () => {
    totalCostCalculate()
})
