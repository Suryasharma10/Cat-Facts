
const para =  document.querySelector("#fact")
const newfact = document.querySelector(".btn")
console.log("api...");
const URL ="https://meowfacts.herokuapp.com/";
newfact.addEventListener("click",getImage = async ()=>{
    //console.log("getting data...");
    let response = await fetch(URL);
    para.innerText = response;
    //console.log(response);
    //console.log(response);
    let image =  await response.json();
    para.innerText=image.data
    //console.log(para.innerText=image.data);
});


