
function setValue(name, value) {
  newVal = ''
  currentStr = localStorage.getItem(name)
  if(!currentStr) {
    currentStr = '[]'
  }

  currentVal = JSON.parse(currentStr)

  if(currentVal.constructor != Array) {
    currentVal = []
  }

  currentVal.push(value)
  newVal = currentVal
  localStorage.setItem(name, JSON.stringify(newVal))
}

["100PercentFedUp.com",
 "21stcenturywire.com",
 "asheepnomore.net",
 "breitbart.com",
 "drudgereport.com",
 "undergroundhealth.com",
 "uproxx.com",
 "uspoliticalpost.com",
 "weeklystandard.com"].forEach(function(site) {
   setValue('fakeWebsites', site)
 })

function readValue(name) {
     var veryVeryPersonalArr = JSON.parse(localStorage.getItem(name));
     if(!veryVeryPersonalArr)
          {
          return [];
          }
     return veryVeryPersonalArr;
}
