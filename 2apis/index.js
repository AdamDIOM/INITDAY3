async function go(){
    console.log("test")
    const response = await fetch(`https://api.postcodes.io/random/postcodes`)
        .then(response => response.json());
        json = response
        console.log(json.result.postcode)
        part2(json.result.postcode)
    /*image();*/

}
async function image(){
    const response = await fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json());
    json = response
    console.log(json.message);
    document.getElementById("theImage").innerHTML = `<img src="${json.message}">`;
}

async function part2(postcode){
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=c8f3b7097046493a948214424212903&q=${postcode}&aqi=no`)
        .then(response => response.json());
        json = response
        console.log(json.current.temp_c);
    document.getElementById("word").innerHTML = json.current.temp_c;
}