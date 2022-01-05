/* eslint-disable no-unused-vars */

import _ from 'lodash'

import { splitLines } from 'utils/strings'
import input from './input'

/**
 * Part 1
 */

const lines = splitLines(input)
const lineWidth = lines[0].split('').length
const bitsTotal = new Array(lineWidth)
bitsTotal.fill(0)

for (let i = 0; i < lines.length; i++) {
  const line = lines[i]

  for (let b = 0; b < lineWidth; b++) {
    const bit = Number(line[b])
    bitsTotal[b] += bit
  }
}

const gammaArray = []
const epsilonArray = []
for (let b = 0; b < bitsTotal.length; b++) {
  const element = bitsTotal[b]
  if (element > lines.length / 2) {
    gammaArray[b] = 1
    epsilonArray[b] = 0
  } else {
    gammaArray[b] = 0
    epsilonArray[b] = 1
  }
}

const gammaArrayString = gammaArray.join('')
const gammaInt = Number.parseInt(gammaArrayString, 2)

const epsilonArrayString = epsilonArray.join('')
const epsilonInt = Number.parseInt(epsilonArrayString, 2)

console.log('Gamma Rate', gammaArrayString, gammaInt)
console.log('Epsilon Rate', epsilonArrayString, epsilonInt)
console.log('Part 1:', gammaInt * epsilonInt)

/**
 * Part 2
 */

function walk(tableIn, currentIndex, invert = false) {
  // console.log(tableIn, currentIndex)
  if (currentIndex > lineWidth) {
    throw new Error(
      `Maximum bit index reached: ${currentIndex} in ${lineWidth}`,
    )
  }

  if (tableIn.length === 1) {
    return tableIn[0]
  }

  // Find Most Common Bit value
  let bitTotal = 0
  for (let i = 0; i < tableIn.length; i++) {
    const line = tableIn[i]
    bitTotal += Number(line[currentIndex])
  }

  let commonBitValue
  let equalParts = false
  let compareTo
  // Determine the most common bit
  if (bitTotal === tableIn.length / 2) {
    equalParts = true
  } else {
    commonBitValue = bitTotal >= tableIn.length / 2 ? 1 : 0
  }

  // Determine what to compare to, based on the possibility of having
  // equal parts, or having to return the uncommon one
  if (equalParts) {
    compareTo = invert ? 0 : 1
  } else if (invert) {
    compareTo = commonBitValue === 1 ? 0 : 1
  } else {
    compareTo = commonBitValue
  }

  const tableOut = tableIn.filter(line => {
    return line.split('').map(Number)[currentIndex] === compareTo
  })

  return walk(tableOut, currentIndex + 1, invert)
}

const oxygenRatingString = walk(lines, 0)
const oxygenRatingInt = Number.parseInt(oxygenRatingString, 2)
console.log('Oxygen Rating:', oxygenRatingString, oxygenRatingInt)

const co2RatingString = walk(lines, 0, true)
const co2RatingInt = Number.parseInt(co2RatingString, 2)
console.log('CO2 Rating:', co2RatingString, co2RatingInt)

console.log('Part 2:', oxygenRatingInt * co2RatingInt)
