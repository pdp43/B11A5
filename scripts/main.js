let themeCount=1;

document.getElementById("theme-btn").addEventListener("click",function(){
    console.log("clixked")
   if(themeCount==6){
    themeCount=0;
    document.getElementById("main-body").classList.remove("bg-emerald-100"); 
   }
   if(themeCount==0)
        { document.getElementById("main-body").classList.add("bg-[#f4f7ff]");
             themeCount=themeCount+1;
            }
    else if(themeCount==1)
            { document.getElementById("main-body").classList.add("bg-pink-100");
                document.getElementById("main-body").classList.remove("bg-[#f4f7ff]");
                themeCount=themeCount+1;
            }
    else if(themeCount==2)
             { document.getElementById("main-body").classList.add("bg-green-50");
                document.getElementById("main-body").classList.remove("bg-pink-100");
                 themeCount=themeCount+1;
                }
    else if(themeCount==3)
            { document.getElementById("main-body").classList.add("bg-yellow-100");
                 document.getElementById("main-body").classList.remove("bg-green-50");
                 themeCount=themeCount+1;
                 }
    else if(themeCount==4)
            { document.getElementById("main-body").classList.add("bg-violet-100");
                 document.getElementById("main-body").classList.remove("bg-yellow-100");
                 themeCount=themeCount+1;
                 }
    else if(themeCount==5)
            { document.getElementById("main-body").classList.add("bg-emerald-100");
                 document.getElementById("main-body").classList.remove("bg-violet-100");
                 themeCount=themeCount+1;
                 }
});


const date = new Date();
const week = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
document.getElementById("day").innerText = `${week[date.getDay()]}  ,`;
document.getElementById("month").innerText= `${month[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`


document.getElementById("go-to-blog").addEventListener("click",function(){
    window.location.href="./blog.html"
})



const taskNUmber = document.getElementById("task-number").innerText;
let convertedTaskNumber = parseInt(taskNUmber);

const pointNUmber = document.getElementById("point-number").innerText;
let convertedPointNumber = parseInt(pointNUmber);

let completedTask=0;

document.getElementById("card-1").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }
    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-1").disabled = true;
    document.getElementById("card-1").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-1").classList.remove("bg-blue-800");

    const work = document.getElementById("work-1").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${work} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("poppins");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-md");
    document.getElementById("history").appendChild(h1);

});

document.getElementById("card-2").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }
    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-2").disabled = true;
    document.getElementById("card-2").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-2").classList.remove("bg-blue-800");

    const work = document.getElementById("work-2").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${work} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("poppins");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-md");
document.getElementById("history").appendChild(h1);
console.log(h1.classList)
});

document.getElementById("card-3").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }
    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-3").disabled = true;
    document.getElementById("card-3").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-3").classList.remove("bg-blue-800");

    const work = document.getElementById("work-3").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${work} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("poppins");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-md");
    document.getElementById("history").appendChild(h1);
});

document.getElementById("card-4").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }
    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-4").disabled = true;
    document.getElementById("card-4").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-4").classList.remove("bg-blue-800");

    const work = document.getElementById("work-4").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${work} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("poppins");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-md");
    document.getElementById("history").appendChild(h1);
});

document.getElementById("card-5").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }
    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-5").disabled = true;
    document.getElementById("card-5").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-5").classList.remove("bg-blue-800");

    const work = document.getElementById("work-5").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${work} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("poppins");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-md");
    document.getElementById("history").appendChild(h1);
});

document.getElementById("card-6").addEventListener("click",function(){
    completedTask=completedTask+1;
    alert("Board updated successfully");
    if(completedTask===6){
        alert("congratulations!!!you have completed all current task");
    }
    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-6").disabled = true;
    document.getElementById("card-6").classList.add("bg-[#9BA8F8]");
    document.getElementById("card-6").classList.remove("bg-blue-800");

    const work = document.getElementById("work-6").innerText;
    const h1 = document.createElement("h1");
    h1.innerText=`you have completed the task ${work} at ${new Date().toLocaleTimeString()}`;
    h1.classList.add("bg-[#f4f7ff]");
    h1.classList.add("mb-4");
    h1.classList.add("p-2");
    h1.classList.add("poppins");
    h1.classList.add("opacity-60");
    h1.classList.add("rounded-lg");
    h1.classList.add("text-md");
    document.getElementById("history").appendChild(h1);
});




const history = document.getElementById("history"); 
const delteHistory = document.getElementById("clear-history");
delteHistory.addEventListener("click",function(){
    while (history.hasChildNodes()) {
        history.removeChild(history.firstChild);
      }
})

