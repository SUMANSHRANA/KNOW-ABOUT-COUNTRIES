const countryName = new URLSearchParams(window.location.search).get('name')
//1
const flagImage=document.querySelector('img')
//2
const cname=document.querySelector('.cname')
//3
const nativename=document.querySelector('.native-name')
//4
const population=document.querySelector('.population')
//5
const region=document.querySelector('.region')
//6
const subregion=document.querySelector('.sub-region')
//7
const capital=document.querySelector('.capital')
//8
const tld=document.querySelector('.tld')
//9
const currencies=document.querySelector('.currency')
const languages=document.querySelector('.languages')

const border=document.querySelector('.border-countries')
const back=document.querySelector('.back')


const dark=document.querySelector('.dark')
const light=document.querySelector('.light')
const body=document.querySelector('body')



fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
  
//1
// console.log(Object.values(data[0].borders))
   flagImage.src=data[0].flags.svg
//2
   cname.innerText=data[0].name.common
//3
   if(data[0].name.nativeName){
   nativename.innerText=Object.values(data[0].name.nativeName)[0].common;
   }
   else{
   nativename.innerText =data[0].name.common;
   }
//4   
  population.innerText=data[0].population.toLocaleString('en-IN')
//5   
   region.innerText=data[0].region;
   //6
   if(data[0].subregion){subregion.innerText=data[0].subregion}
   else{subregion.innerText=data[0].region}
//7
if(data[0].capital){
 capital.innerText=data[0].capital.join(',')
}
else{capital.innerText='NO CAPITAL'}
//8
tld.innerText=data[0].tld.join(',')
//p
if(data[0].currencies){
currencies.innerText=Object.values(data[0].currencies)[0].name
}
else{
   currencies.innerText='NO CURRENCY'
}//10
if(data[0].languages){
languages.innerText=Object.values(data[0].languages).join(',')
}
else{
   languages.innerText='no language'
}
// if(Object.values(data[0].borders))
//    {
// const tb=Object.values(data[0].borders);

// //we cnnot do this way becuase it will return nshort name as in data onoy shart name is given 
// // console.log(tb.length)
// // for(let i=0;i<tb.length;i++)
// //    {
// //       const link=document.createElement('a')
// //       console.log(`${tb[i]}`);
// //       link.innerHTML=`${tb[i]}`; 
// //  border.append(link);

// // }
// //so to get full name we will agaoin fetch the data for that articualr country and giet its full name

// }

if(data[0].borders)
{
   
   for(let i=0;i<data[0].borders.length;i++){
      //now i want to print the full name but data[0].borders will return the short name so we will need to use a another link that will open the country using its short name so we will use a differetnapi
      fetch(`https://restcountries.com/v3.1/alpha/${data[0].borders[i]}`)
      .then((res)=>res.json())
      .then((bordernation)=>{
         //this boprdernation will return an array showcasing all the border countries
         const anchortag=document.createElement('a');
         anchortag.innerText=bordernation[0].name.common;
         //ab hum anchor ma link add karenga
         anchortag.href=`country.html?name=${bordernation[0].name.common}`
         border.append(anchortag);
      })
   }
}
else{
   const anchortag=document.createElement('a');
   anchortag.innerText='NO BORDER';
   border.append(anchortag);
}
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