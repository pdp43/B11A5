let themeCount=1;

document.getElementById("theme-btn").addEventListener("click",function(){
   if(themeCount==3){
    themeCount=0;
    document.getElementById("main-body").classList.remove("bg-pink-100");
    document.getElementById("main-body").classList.remove("bg-green-50");  
   }
   if(themeCount==0)
        { document.getElementById("main-body").classList.add("bg-blue-50");
             themeCount=themeCount+1;
            }
    else if(themeCount==1)
            { document.getElementById("main-body").classList.add("bg-pink-100");
                document.getElementById("main-body").classList.remove("bg-blue-50");
                themeCount=themeCount+1;
            }
    else if(themeCount==2)
             { document.getElementById("main-body").classList.add("bg-green-50");
                document.getElementById("main-body").classList.remove("bg-pink-100");
                document.getElementById("main-body").classList.remove("bg-blue-50");
                 themeCount=themeCount+1;
                }
});

const taskNUmber = document.getElementById("task-number").innerText;
let convertedTaskNumber = parseInt(taskNUmber);

const pointNUmber = document.getElementById("point-number").innerText;
let convertedPointNumber = parseInt(pointNUmber);

document.getElementById("card-1").addEventListener("click",function(){
    alert("card-1 done");
    convertedTaskNumber=convertedTaskNumber-1;
    convertedPointNumber=convertedPointNumber+1;
    document.getElementById("task-number").innerText =convertedTaskNumber;
    document.getElementById("point-number").innerText= convertedPointNumber;
    document.getElementById("card-1").disabled = true;
    document.getElementById("card-1").classList.add("bg-gray-800");
    document.getElementById("card-1").classList.remove("bg-blue-800");
});

