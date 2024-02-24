let btn = document.getElementById("btn")
let city = document.getElementById("city")

const  getData = async (cityname)=>{
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=5f3f3e0ba2fb4f03938103003242102&q=${cityname}&aqi=yes`)
    const data = await promise.json()
    return  data
}


btn.addEventListener("click",async(e)=>{
    e.preventDefault()
    let value = city.value
    const result = await getData(value)
    console.log(result);
    console.log("hii..");
    document.getElementById("cityname").innerHTML=result.location.name
    document.getElementById("citytime").innerHTML=result.location.localtime
    document.getElementById("citytemp").innerHTML=result.current.temp_c
    document.getElementById("citycondition").innerHTML=result.current.condition.text
})