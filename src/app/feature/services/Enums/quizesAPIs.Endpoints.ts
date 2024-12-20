import { environment } from "../../../../environments/environment";

export class QuizesEndPoint{

    static baseUrl :string = environment.apiUrl
    static Quizes = `${QuizesEndPoint.baseUrl}/api/v1/subjects`;
    static ExamsOnSubject =`${QuizesEndPoint.baseUrl}/api/v1/exams?subject=`;
    static QuestionOnExam =`${QuizesEndPoint.baseUrl}/api/v1/questions?exam=`;
}
