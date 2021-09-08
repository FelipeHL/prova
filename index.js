const todoObjectList = [];

class Toda_Class {
            constructor(item){
                        this.ulElement = item;
            }
            add(){
            }
            done_undone(){
            }
            deleteElement(){
            }
            display(){
            }
}
            const listSelection = document.querySelector("#myUL");
                        myTodoList = new Todo_Class(listSelection);

                        document.querySelector(".addBtn").addEventListener("click", function(){
                        myTodoList.add()
                        })
                        add(){
                                    const todoInput = document.querySelector("#myInput").value;
                                    if (todoInput =="") {
                                    alert("")
                                    } else{
                                                const todoObjec = {
                                                            id : todoObjectList.length,
                                                            todotext : todoInput,
                                                            isDone : false,
                                    }
                                    todoObjectList.unshift(todoObject);
                                    this.display();
                                    document.querySelector("#myInput").value = '';
                                    }
            }
            display(){
                        this.ulElement.innerHTML = "";
                        todoObjectList.forEach((Object_item)) = >{
                                    const liElement = document.createElement("li");
                                    const delBtn = document.createElement("i");
                        }
            }
