import { environment } from "../../../../environments/environment";

export class QuizesEndPoint{

    static baseUrl :string = environment.apiUrl
    static Quizes = `${QuizesEndPoint.baseUrl}/api/v1/subjects`;
}
