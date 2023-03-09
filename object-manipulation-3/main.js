console.log('Lodash is loaded:', typeof _ !== 'undefined');

var players = [
  {
    name: 'Justin',
    hand: [],
    total: 0
  },
  {
    name: 'Janay',
    hand: [],
    total: 0
  },
  {
    name: 'Paul',
    hand: [],
    total: 0
  },
  {
    name: 'Michelle',
    hand: [],
    total: 0
  }
];

var deck = [];
var rankCards = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
var suitCards = ['clubs', 'diamonds', 'heart', 'spades'];
for (var i = 0; i < 4; i++) {
  for (var k = 0; k < 13; k++) {
    deck.push({ rank: rankCards[k], suit: suitCards[i] });
  }
}
var shuffle = _.shuffle(deck);

// first deal //
players[0].hand.push(shuffle[0]);
players[1].hand.push(shuffle[1]);
players[2].hand.push(shuffle[2]);
players[3].hand.push(shuffle[3]);

// second deal//
players[0].hand.push(shuffle[4]);
players[1].hand.push(shuffle[5]);
players[2].hand.push(shuffle[6]);
players[3].hand.push(shuffle[7]);

for (var n = 0; n < players.length; n++) {
  for (var t = 0; t < 2; t++) {
    if (players[n].hand[t].rank === 'Ace') {
      players[n].total += 11;
    } else if (players[n].hand[t].rank === 'Jack' || players[n].hand[t].rank === 'Queen' || players[n].hand[t].rank === 'King') {
      players[n].total += 10;
    } else if (Number.isInteger(players[n].hand[t].rank)) {
      players[n].total += players[n].hand[t].rank;
    }
  }
}

var winnerTotal = players[0].total;
var winner = players[0].name;
for (var x = 1; x < players.length; x++) {
  if (players[x].total > winnerTotal) {
    winnerTotal = players[x].total;
    winner = players[x].name;
  }
}
console.log('The winner is:', winner);
console.log('Players', players);
