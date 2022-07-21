import {map, seperatingNames} from './functions.js' 
// we wait for the data to come and we save it to a variable and exceute the code
export const gettingData = async () =>{
  let res = await getDataFromTxtFile()
  seperatingNames(res)
  console.log(map)
}

// Gets data from .txt file and makes it an object
const getDataFromTxtFile = async () => {
  try{
    let obj = {}
    await fetch('/data.txt').then(res => res.text()).then(data => {
      data.split('|').forEach((value) => {
         const name = value.split('=')[0];
         const schedule = value.split('=')[1];
         if (!obj[name]) {
           obj[name] = schedule.trim().split(',')
         }
       });
     })
     return obj
   } catch(err){
    console.log(err)
   }
}

// IIFE (immediately invoked function expression)
// Runs the code as soon as its define  
// (async () => {
//   await gettingData()
// })()
