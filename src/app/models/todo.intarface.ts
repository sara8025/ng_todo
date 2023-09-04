export interface ITodo{
    id:number;
   title:string;
   description:string;
   isComplited:boolean;
    isArchived:boolean;
    endDate:Date | number | string
    selected:boolean
}