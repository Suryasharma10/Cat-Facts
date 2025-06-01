const para =  document.querySelector("#fact")
const newfact = document.querySelector("#btn")
console.log("api...");
const URL ="https://meowfacts.herokuapp.com/";
const getImage = async ()=>{
    //console.log("getting data...");
    let response = await fetch(URL);
    //console.log(response);
    let image =  await response.json();
    para.innerText=image.data
    //console.log(para.innerText=image.data);
} 
getImage()
newfact.addEventListener("click",getImage);