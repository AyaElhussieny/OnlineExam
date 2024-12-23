import { Exam } from "./exam"
import { Quize } from "./quize"

export interface Question{
    _id: string ,
    question : string ,
    answers : Answer [] ,
    correct : string ,
    type : string ,
    subject : Quize ,
    exam : Exam
}
 
  interface Answer {
    answer : string ,
    key : string
  }