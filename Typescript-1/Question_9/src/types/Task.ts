
export enum TaskPriority {

}
   

export interface Task{

    id : number,
    description : string,
    priority : TaskPriority;
    completed : boolean 
}



