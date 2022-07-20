import { readFileSync } from 'fs';
import { hasUncaughtExceptionCaptureCallback } from 'process';
import {createMap, removeDaysFromHoursToCompare, deletesDaysFromHours, turnsHoursIntoArray, mapValidation} from '../functions.js'
const PATH = 'data.txt';
let obj = {}
readFileSync(PATH, 'utf8').split('|').forEach(val => {
  val.split('|').forEach((value) => {
    const name = value.split('=')[0];
    const schedule = value.split('=')[1];
    if (!obj[name]) {
      obj[name] = schedule.trim().split(',')
    }
  });
  return obj
})

// Removes the two letters from each element of the array.
test('Removes days from numbers', () => {
  let arr = ['MO10:00-12:00'];
  for(let i = 0; i < arr.length; i++){
    const hours = removeDaysFromHoursToCompare(arr,i)
    expect(hours).toBe('MO')
  }
})

test('Removes days from numbers', () => {
  let arr = ['MO10:00-12:00'];
  for(let i = 0; i < arr.length; i++){
    const hours = deletesDaysFromHours(arr,i)
    expect(hours).toBe('10:00-12:00')
  }
})

test('turn the combination oh hours into an array', () => {
  const combHours = '10:00-11:00'
  expect(turnsHoursIntoArray(combHours)).toStrictEqual(['10:00', '11:00'])
})