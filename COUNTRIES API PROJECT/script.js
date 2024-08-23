const countriesContainer = document.querySelector('.countries-container')
const filterByregion=document.querySelector('.filter-by-region')
const searchinput=document.querySelector('.search-cotainer input ')
const dark=document.querySelector('.dark')
const light=document.querySelector('.light')
const body=document.querySelector('body')

// now to search countries we need to store the data of all the countriues
let allcountriesdata

fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
    //ya data ek array return karega 
   fetchdata(data)
    allcountriesdata=data
  })
  filterByregion.addEventListener('change',(e)=>{
    
    fetch(`https://restcountries.com/v3.1/region/${filterByregion.value}`)
    .then((res) => res.json())
    .then((data) => {
      //abhi ,er home page par pehla sa hi data ha toh pehla ma us data ko remove karunga or ma boh ma karunga oehlka sa jo interhtml ha use remove karka
      countriesContainer.innerHTML=''
      fetchdata(data)
    })
  })



function fetchdata(data){
  
  data.forEach((country) => {      
  const countryCard = document.createElement('a')
  countryCard.classList.add('country-card')
  countryCard.href = `/country.html?name=${country.name.common}`
  countryCard.innerHTML = `
  <img src="${country.flags.svg}" alt="flag" />
  <div class="card-text">
    <h3 class="card-title">${country.name.common}</h3>
    <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
    <p><b>Region: </b>${country.region}</p>
    <p><b>Capital: </b>${country.capital?.[0]}</p>
  </div>
    `
  countriesContainer.append(countryCard)
    })
  }

  searchinput.addEventListener('input',(e)=>{
  //  console.log(e.target.value) it will return us the input after every time we write something
  //we will match with the common name
  //country.name.cimmon will return a string
 
   const filteredCountries = allcountriesdata.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
 //NOW BY USING THE FUNCTION NWHICB WE HAVE MADE WE WILL  RENDER ALL THESE FILTERED COUNTIRES BUT FIRST WE  WILL REMOVE REPIVOUS
 
 countriesContainer.innerHTML=''
 fetchdata(filteredCountries)
  })
 
dark.addEventListener('click',()=>{
  body.classList.toggle('class')
  dark.classList.toggle('darkcall')
  light.classList.toggle('lightcall')
})
light.addEventListener('click',()=>{
  body.classList.toggle('class')
  dark.classList.toggle('darkcall')
  light.classList.toggle('lightcall')
})
  