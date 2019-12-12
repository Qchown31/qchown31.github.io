const url = 'https://swapi.co/api/people/'

 fetch(url).then(x => {
  return x.json()

}).then(x => {
  
  console.log(x);

  x.results.forEach(writeToPage);


  console.log('loaded')
  setTimeout(function() {
    updateDisplay()
  }, 1500);

}).catch(err => {
  writeToPage('I am sorry, ')
})


function updateDisplay () {
   const load = document.querySelector('#loading')  
  load.className = ('hidden')
}


function writeToPage(text) {
  
  const el = document.createElement('div')
  el.className = 'display'
 
  // el.textContent = text.name 
  document.body.appendChild(el)


  const title = document.createElement('h1')
  title.className = 'display'
  title.textContent = text.name 
  el.appendChild(title)

  const birthYear = document.createElement('p')
  birthYear.className = 'hidden'
  birthYear.textContent = 'Birth Year: ' + text.birth_year
  el.appendChild(birthYear)

  const mass = document.createElement('p')
  mass.className = 'hidden'
 
  mass.textContent = 'Weight (Kg): ' + text.mass
  el.appendChild(mass)

  const height = document.createElement('p')
  height.className = 'hidden'
 
  height.textContent = 'Height: ' + text.height
  el.appendChild(height)

  const hair = document.createElement('p')
  hair.className = 'hidden'
 
   if (text.hair_color === "n/a"){
    hair.textContent = "Hair Color: Robots don't have hair "
  } else if ( text.hair_color === 'none' ) {
    hair.textContent = 'Hair Color: Was burned off in the "incident"'
  }
  
  
  else {
    hair.textContent = 'Hair Color: ' + text.hair_color
  }


  el.appendChild(hair)

  el.addEventListener('click', function() {

    if (el.id === 'open') {
      el.id = ''
    } else {
      el.id = 'open'
    }

    if (birthYear.className === 'hidden') {
      birthYear.className = 'yes'
    } else {
      birthYear.className = 'hidden'
    }

    if (mass.className === 'hidden') {
      mass.className = 'yes'
    } else {
      mass.className = 'hidden'
    }

    if (height.className === 'hidden') {
      height.className = 'yes'
    } else {
      height.className = 'hidden'
    }

    if (hair.className === 'hidden') {
      hair.className = 'yes'
    } else {
      hair.className = 'hidden'
    }
  })
  
}


