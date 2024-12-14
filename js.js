let input=document.getElementById("input")

async function find(a) {
    let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
    if (t.ok && 400 != t.status) {
        let a = await t.json();
        showfrist(a.location, a.current)
        showsecond(a.forecast.forecastday)
        showthird(a.forecast.forecastday)

        
    }
}
input.addEventListener("keyup", a => {
    find(a.target.value)
}
);
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
function showfrist(a, t) {
    if (null != t) {
        var e = new Date(t.last_updated.replace(" ", "T"));
        let show = `<div class="oneup d-flex justify-content-between">
        <p class="day pt-2">${days[e.getDay()]}</p>
        <p class="date pt-2">${e.getDate() + monthNames[e.getMonth()]}</p>
      </div>
      <div class="onedown pb-2">
        <p class="ps-2">${a.name}</p>
        <h1 class="ps-3">${t.temp_c}<sup>o</sup>C</h1>
        <img src="https:${t.condition.icon}">
        <p class="blue ps-2">${t.condition.text}</p>
        <span class="ps-2"><img src="./img/icon-umberella.png">20% </span>
        <span class="ps-2"><img src="./img/icon-wind.png"> 18km/h </span>
        <span class="ps-2"><img src="./img/icon-compass.png"> East </span>
      </div>`
        document.getElementById("one").innerHTML=show;
    }
}
function showsecond(a){
    let cartona=''
    const num=1;
    var e = new Date(a[num].date.replace(" ", "T"));
    cartona=`<div class="twoup">
    <p class="day pt-2">${days[e.getDay()]}</p>
  </div>
  <div class="twodown text-center ">
    <img class="py-3" src="https:${a[num].day.condition.icon}">
   <div class="degree mt-2">
    <p>${a[num].day.maxtemp_c}<sup>o</sup>C</p>
    <small>${a[num].day.mintemp_c}<sup>o</sup>C</small>
   </div>
    <p class="blue  pt-4">${a[num].day.condition.text}</p>
  </div>`
  document.getElementById("two").innerHTML=cartona;


}
function showthird(a){
    let cartona=''
    const num=2;
    var e = new Date(a[num].date.replace(" ", "T"));
    cartona=`<div class="twoup">
    <p class="day pt-2">${days[e.getDay()]}</p>
  </div>
  <div class="twodown text-center ">
    <img class="py-3" src="https:${a[num].day.condition.icon}">
   <div class="degree mt-2">
    <p>${a[num].day.maxtemp_c}<sup>o</sup>C</p>
    <small>${a[num].day.mintemp_c}<sup>o</sup>C</small>
   </div>
    <p class="blue  pt-4">${a[num].day.condition.text}</p>
  </div>`
  document.getElementById("three").innerHTML=cartona;


}
find('cairo')



// async function find(a) {
//     let t = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${a}&days=3`);
//     if (t.ok && 400 != t.status) {
//         let a = await t.json();
//        console.log(a)
        
//     }
// }
// find('lond')