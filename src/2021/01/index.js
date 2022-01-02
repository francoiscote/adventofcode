/* eslint-disable no-unused-vars */

import _ from 'lodash'

import { splitLines } from 'utils/strings'
import input from './input'

const lines = splitLines(input, Number)

/*
 * Part 1
 */
const countIncs = lines.reduce((count, currentVal, currentIndex, array) => {
  if (currentIndex === 0) return 0
  return currentVal > array[currentIndex - 1] ? count + 1 : count
}, 0)

console.log(`Part 1: ${countIncs}`)

/*
 * Part 2
 */
const groupsby3 = []
for (let i = 0; i < lines.length; i++) {
  const prevprev = lines[i - 2]
  const prev = lines[i - 1]
  const current = lines[i]

  if (prevprev && prev) {
    groupsby3.push(prevprev + prev + current)
  }
}

const countGroupIncs = groupsby3.reduce(
  (count, currentVal, currentIndex, array) => {
    if (currentIndex === 0) return 0
    return currentVal > array[currentIndex - 1] ? count + 1 : count
  },
  0,
)

console.log(`Part 2: ${countGroupIncs}`)
