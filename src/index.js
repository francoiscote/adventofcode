/* eslint-disable no-unused-vars */

import _ from 'lodash'

import Matrix from 'utils/Matrix'
import input from './input'

const lottoAll = input.split('\n')[0].split(',')
console.log('lottoAll', lottoAll)

const cards = input
  .split('\n\n')
  .slice(1)
  .map(card => {
    const cardMap = new Map()
    card.split('\n').map(line =>
      line
        .split(' ')
        .filter(c => !!c)
        .map(Number)
        .forEach(n => cardMap.set(n, false)),
    )
    return cardMap
  })

const lotto = lottoAll
function draw() {
  if (!lotto.length) {
    throw new Error('No more lotto numbers to draw from')
  }

  // Pick a number
  const pickedNo = Number.parseInt(lotto.splice(0, 1)[0], 10)
  console.log('Picked:', pickedNo)

  // Loop cards and mark numbers
  for (let c = 0; c < cards.length; c++) {
    const card = cards[c]
    if (card.has(pickedNo)) {
      card.set(pickedNo, true)
    }
  }
  console.log('cards', cards)
}

function getWinningCard() {
  const CARD_HEIGHT = 5
  const CARD_HEIGHT = 5
  // Loop cards
  for (let c = 0; c < cards.length; c++) {
    const card = cards[c]
    // Check for winning row
    for (let r = 1; r < CARD_HEIGHT; r++) {
      for()
    }
    // Check for winning column
  }

  return cards[0]
}

function drawUntilWinner() {
  draw()

  const winningCard = getWinningCard()

  if (winningCard) {
    return 'winner'
  }

  return drawUntilWinner()
}

// Repeat draw until a winner is found.
const finalScore = drawUntilWinner()
console.log('Part 1:', finalScore)
