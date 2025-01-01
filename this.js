const csk = {
    player1: 'dhoni',
    player2: 'jaddu',
    teamName: 'csk',
    printPlayerName: function () {
         console.log(`${this.player1} and ${this.player2} are ${this.teamName} players`);
    }
}
const mi = {
    player1: 'rohit',
    player2: 'surya',
    teamName: 'mi',
}

csk.printPlayerName.call(mi);
