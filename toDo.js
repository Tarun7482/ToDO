const readline=require('readline').createInterface(
    {
        input:process.stdin,
        output:process.stdout
    }
)
let toDos=[]
function displayTodos(){
    console.log("\n your to do list")
    if(toDos.length===0){
        console.log("no task added")
    }
    else{
        toDos.forEach((toDos,index)=>{
            console.log(`${index+1}. ${toDos}`)
    });
    
}
}
function addtoDos(){
    readline.question("enter yur task here",(task) =>{
        toDos.push(task);
        console.log("task added");
        displayTodos();
        askForFunction();

})};

function removetoDos(){
    displayTodos();
    readline.question("enter the number of the task to be removed",(index)=>
    {
        const taskIndex=parseInt(index)-1;
        if(taskIndex>0 &&taskIndex<=toDos.length){
            toDos.splice(taskIndex,1);
            console.log("task removed");
        }
        else{(
            console.log("invalid index")
        )}
        askForFunction();


    }


)
}
function askForFunction(){
    readline.question("do you want to add, remove or exit",(choice)=>{
        switch(choice){
            case "add":
                addtoDos();
                break;
            case "remove":
                removetoDos();
                break;
            case "list":
                displayTodos();
                askForFunction();
                break;
            case "exit":
                console.log("goodbye");
                process.exit();
                break;
            default:
                console.log("invalid choice");
                askForFunction();

}});
}

console.log("TO-DO list me aapka swagat hai aa jao");{
    askForFunction();
}
