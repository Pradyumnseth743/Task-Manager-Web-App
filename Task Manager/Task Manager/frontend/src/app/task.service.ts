import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Task } from './models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  constructor(private webRequestService:WebRequestService) { }
  createList(title:string){
    //We want to send a web request to create a list
    return this.webRequestService.post('lists',{title});
  }
  updateList(id:string,title:string){
    //We want to send a web request to update a list
    return this.webRequestService.patch(`lists/${id}`,{title});
  }
  updateTask(listId:string,taskId:string,title:string){
    //We want to send a web request to update a list
    return this.webRequestService.patch(`lists/${listId}/tasks/${taskId}`,{title});
  }
  createTask(title:string,listId:string){
    //We want to send a web request to create a task
    return this.webRequestService.post(`lists/${listId}/tasks`,{title});
  }
  deleteTask(listId:string,taskId:string){
    return this.webRequestService.delete(`lists/${listId}/tasks/${taskId}`);
  }
  deleteList(id:string){
    return this.webRequestService.delete(`lists/${id}`);
  }
  getLists(){
    return this.webRequestService.get('lists');
  }
  getTasks(listId:string){
    return this.webRequestService.get(`lists/${listId}/tasks`);
  }
  complete(task:Task){
    return this.webRequestService.patch(`lists/${task._listId}/tasks/${task._id}`,{
      completed:!task.completed
    });
  }
}
