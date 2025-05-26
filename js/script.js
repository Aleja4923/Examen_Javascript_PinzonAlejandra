async function GetApi(){
    const APIURL= await fetch ("https://www.themealdb.com/api/json/v1/1/categories.php");
    const Data = await APIURL.json();
    console.log(Data);
    
}
const key =document.getElementById("index")

function fetchData() {
    let request = new XMLHttpRequest();
    request.open("GET", APIURL);
    request.send();
    request.onload = () => {
      console.log("REQUEST: ", request);
  
      if (request.status == 200) {
        console.log("RAW JSON: ", JSON.parse(request.response));
        let json = JSON.parse(request.response);
  
        for (let i = 0; i < json.meals.length; i++) {
          let obj = json.meals[i];
          console.log("JSON OBJECT: ", obj.idMeal);
        }
    }
}
}
