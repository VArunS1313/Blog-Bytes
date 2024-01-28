import conf from "../Config/config";
import { Client,Account,ID } from "appwrite";


export class AuthService{
    client=new Client();
    account;
    constructor(){
        this.client
        .setEndpoint(conf.appwrite)
        .setProject(conf.appwrite_projectID);
        this.account = new Account(this.client);
    }
    async createAccount({email,username,password}){
        try{
           const userAccount= await this.account.create(ID.unique(),email,password,username)
           if (userAccount) {
            this.loginAccont({email,password});
            ////
           } else {
            return userAccount
           }
        }
        catch(e){
            throw e;
        }
    }
    async loginAccont({email,password})
    {
        try{
         const userlogin=   await this.account.createEmailSession(email,password)
         return userlogin
        }
        catch(e){
            throw e;
        }
    }
    async getCurrentUser()
    {
        try{
            return await this.account.get();
            
        }
        catch(e)
        {
            console.log("USer getCurrentuser :",e);
            
        }
        return null;
    }
    async logout()
    {
        try{
            await this.account.deleteSessions();
        }
        catch(e)
        {
            console.log("Logout not Happen");
        }
    }
}

const authservice=new AuthService();
export default authservice;