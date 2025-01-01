let printPlayerName =  function (jerseyColor) {
         console.log(`${this.player1} and ${this.player2} are ${this.teamName} players color-${jerseyColor}`);
    }

const csk = {
    player1: 'dhoni',
    player2: 'jaddu',
    teamName: 'csk',
}
const mi = {
    player1: 'rohit',
    player2: 'surya',
    teamName: 'mi',
}

printPlayerName.call(mi, 'blue');
printPlayerName.apply(csk, ['yellow']);

const players = printPlayerName.bind(csk)

players('yellow')

