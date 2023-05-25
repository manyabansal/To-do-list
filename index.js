var inputBox = document.getElementById("input-box");
var listContainer= document.getElementById("list-container");

function addTask(){

  if(inputBox.value===''){
    alert("You must write something!");
  }
  else{
    var li= document.createElement("li");
    li.innerHTML= inputBox.value;
    listContainer.appendChild(li);

    var sp= document.createElement("span");
    sp.innerHTML= "<img src='images/cross.png'></img>";
    li.appendChild(sp);
  }
  inputBox.value="";
  saveData();
}

listContainer.addEventListener("click", function(e){
  if(e.target.tagName==="LI"){
    e.target.classList.add("checked");
    setTimeout(function(){
      e.target.remove();
      saveData();
    },250);
  }
  else if(e.target.tagName==="IMG"){
    e.target.parentElement.parentElement.remove();
  }
  saveData();
});

document.addEventListener("keypress", function(event){
  if(event.key==="Enter"){
    addTask();
  }
});

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
  listContainer.innerHTML=localStorage.getItem("data");
}

showData();
