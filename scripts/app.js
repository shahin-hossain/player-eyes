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
function selectedPlayer(playerId, btnPlayerId) {
    const orderList = document.getElementById('player-list').childElementCount;

    if (orderList >= 5) {

        return alert('You cant Select over 5 Player')
    }
    else {
        playerSelect(playerId, btnPlayerId)
    }
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
/* 
function playerSelect(playerId) {
    const player = document.getElementById(playerId);
    const PlayerList = document.getElementById('player-list');

    const li = document.createElement('li');
    li.innerText = player.innerText;
    PlayerList.appendChild(li);
}
const btnSelects = document.getElementsByClassName('btn-select');
for (const btnSelect of btnSelects) {
    btnSelect.addEventListener('click', function () {
        playerSelect('player-1')
        playerSelect('player-2')
    })
} */