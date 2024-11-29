import { environment } from "../../../../../src/environments/environment.development";

export class AuthEndPoint{

    baseUrl : string = environment.apiUrl;

    static SignUp =`${environment.apiUrl}/v1/auth/signup`;
    static SignIn =`${environment.apiUrl}/v1/auth/signin`;
    static ChangePassword =`${environment.apiUrl}/v1/auth/changePassword`;
    static DeleteAccount =`${environment.apiUrl}/v1/auth/deleteMe`;
    static EditProfile =`${environment.apiUrl}/v1/auth/editProfile`;
    static Logout =`${environment.apiUrl}/v1/auth/logout`;
    static ProfileData =`${environment.apiUrl}/v1/auth/profileData`;
    static ForgotPassword =`${environment.apiUrl}/v1/auth/forgotPassword`;
    static VerifyResetCode =`${environment.apiUrl}/v1/auth/verifyResetCode`;
    static ResetPassword =`${environment.apiUrl}/v1/auth/resetPassword`;
}