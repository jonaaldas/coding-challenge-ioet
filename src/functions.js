export const map = new Map()
export function createMap(obj) {

  let keys = Object.keys(obj)
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      let a = obj[keys[i]]
      let b = obj[keys[j]]
      mapBuilder(a, b, keys[i], keys[j])
    }
  }
}

function mapBuilder(a_hours, b_hours, person1, person2) {
  for (let i = 0; i < a_hours.length; i++) {
    for (let k = 0; k < b_hours.length; k++) {
      let coincides;
      const str1 = removeDaysFromHoursToCompare(a_hours, i)
      const str2 = removeDaysFromHoursToCompare(b_hours, k)
      if (str1 === str2) {
        let aTimeFrame = deletesDaysFromHours(a_hours, i);
        let bTimeFrame = deletesDaysFromHours(b_hours, k);
        let a = turnsHoursIntoArray(aTimeFrame);
        let b = turnsHoursIntoArray(bTimeFrame)
        if (a[0] >= b[0] && b[0] <= b[1]) {
          coincides = true
        } else if (b[0] >= a[0] && b[0] <= a[1]) {
          coincides = true
        }
        if (coincides === true) {
          mapValidation(person1, person2)
        }
      }
    }
  }
}

export const mapValidation = (person1, person2) => {
  if (map.has(`${person1}-${person2}`) || map.has(`${person2}-${person1}`)) {
    map.set(`${person1}-${person2}`, map.get(`${person1}-${person2}`) + 1)
  } else {
    map.set(`${person1}-${person2}`, 1)
  }
}

export const deletesDaysFromHours = (hours, letter) => {
  return hours[letter].replace(/[a-zA-Z]/g, '');
}

export const removeDaysFromHoursToCompare = (hours, letter) => {
  return hours[letter].substr(0, 2)
}

export const turnsHoursIntoArray = (hours) => {
  return hours.split('-');
}