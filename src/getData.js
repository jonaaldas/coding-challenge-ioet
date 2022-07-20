import {map, createMap} from '../src/functions.js' 

export const gettingData = async () =>{
  let res = await getDataFromTxtFile()
  createMap(res)
  console.log(map)
}
  
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


(async () => {
  await gettingData()
})()
