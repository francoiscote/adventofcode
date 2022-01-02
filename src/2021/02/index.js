/* eslint-disable no-unused-vars */

import _ from 'lodash'

import { splitLines } from 'utils/strings'
import input from './input'

let x = 0
let y = 0

const lines = splitLines(input)

/*
 *  Part 1
 */
for (let i = 0; i < lines.length; i++) {
  const [direction, value] = lines[i].split(' ')
  switch (direction) {
    case 'forward':
      x += Number(value)
      break
    case 'down':
      y += Number(value)
      break
    case 'up':
      y -= Number(value)
      break
    default:
      break
  }
}

console.log({ x, y })
console.log('Part 1: ', x * y)

/*
 *  Part 2
 */

let aim = 0
let x2 = 0
let y2 = 0

for (let i = 0; i < lines.length; i++) {
  const [direction, value] = lines[i].split(' ')
  switch (direction) {
    case 'forward':
      x2 += Number(value)
      y2 += aim * Number(value)
      break
    case 'down':
      aim += Number(value)
      break
    case 'up':
      aim -= Number(value)
      break
    default:
      break
  }
}

console.log({ x2, y2, aim })
console.log('Part 1: ', x2 * y2)
