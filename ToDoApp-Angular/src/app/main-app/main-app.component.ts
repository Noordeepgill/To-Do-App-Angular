import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  public todoelements : Array<any> = [
    { task : "Task 1", description : "This is a description for Task 1"},
    { task : "Task 2", description : "This is a description for Task 2"},
    { task : "Task 3", description : "This is a description for Task 3"}
  ];

  task : string = '';
  desc : string = '';

  updatetaskval : string = 'Update Task';
  updatedescval : string = 'Update Description';

  updateindex : number = 0;
  addtaskdisplayval : string = 'none';
  updatetaskdisplayval : string = 'none';
  taskheadbordercolor : string = '4px solid red';

  addtask() {
    if(this.task != '' && this.desc != ''){
      this.todoelements.push({ task : this.task, description : this.desc});
    }
    else{
      alert("Task & Description fields cannot be empty !")
    }
    this.hideAddTask();
    return console.log(this.todoelements);
  }

  removeTask(indexOfelement : number){
    this.todoelements.splice(indexOfelement, 1);
    return console.log(this.todoelements);
  }

  updatetask(indexOfelement : number){
    this.updateindex = indexOfelement;
    this.updatetaskval = this.todoelements[indexOfelement].task; 
    this.updatedescval = this.todoelements[indexOfelement].description;
    this.displayUpdateTask();
    return console.log(this.todoelements);
  }

  updatecurrenttask(){
    this.todoelements[this.updateindex].task = this.updatetaskval; 
    this.todoelements[this.updateindex].description = this.updatedescval; 
    this.hideUpdateTask();
    return console.log(this.todoelements);
  }

  displayAddTask(){
    this.addtaskdisplayval = 'block';
  }

  hideAddTask(){
    this.addtaskdisplayval = 'none';
  }

  displayUpdateTask(){
    this.updatetaskdisplayval = 'block';
  }

  hideUpdateTask(){
    this.updatetaskdisplayval = 'none';
  }

  markascompleted(indexOfelement:number){
    document.getElementsByClassName("task-head")[indexOfelement].classList.add("completed-task");
  }
}
