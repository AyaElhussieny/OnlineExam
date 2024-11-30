export interface LoginApiRes{
    message : string,
    token : string,
    user: UserData
}


interface UserData{
    _id : string,
    username : string,
    firstName : string,
    lastName : string,
    email : string,
    phone : string,
    role : string,
    createdAt : string,
    isVerified : boolean,

}