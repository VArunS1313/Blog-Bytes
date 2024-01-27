import conf from "../Config/config";
import { Client,ID,Databases,Query,Storage } from "appwrite";


export class Service{
    client=new Client();
    databases;
    bucket;
    constructor(){
        this.client
        .setEndpoint(conf.appwrite).setProject(conf.appwrite_projectID)
        this.databases=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }
    async createPost({title,slug,content,featureimage,status,userID}){
        try{
            return await this.databases.createDocument(conf.appwrite_DatabaseID,conf.appwrite_CollectionID,slug,{
                title,content,featureimage,status,userID
            })

        }
        catch(e)
        {
            console.log("configservice create post error",e)
        }
    }
    async updatePost(slug, {title, content, featureimage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwrite_DatabaseID,
                conf.appwrite_CollectionID,
                slug,
                {
                    title,
                    content,
                    featureimage,
                    status,

                }
            )
        } catch (error) {
            console.log("Appwrite serive :: updatePost :: error", error);
        }
    }
    async deletePost(slug){
        try{
            await this.databases.deleteDocument(conf.appwrite_DatabaseID,conf.appwrite_CollectionID,slug)
            return true;
        }
        catch(e)
        {
            console.log("configservice Delete post error",e)
            return false;
        }
    }
    async getPostbyID(slug){
        try{
           return await this.databases.getDocument(conf.appwrite_DatabaseID,conf.appwrite_CollectionID,slug)
            //return true;
        }
        catch(e)
        {
            console.log("configservice Get post by ID error",e)
           
        }
    }
    // async getPostbyID(slug){
    //     try{
    //        return await this.databases.getDocument(conf.appwrite_DatabaseID,conf.appwrite_CollectionID,slug)
    //         //return true;
    //     }
    //     catch(e)
    //     {
    //         console.log("configservice Get post by ID error",e)
           
    //     }
    // }
    async getPosts(querry=[Query.equal("status","active")]){
        try{
           const data= await this.databases.listDocuments(conf.appwrite_DatabaseID,conf.appwrite_CollectionID,querry)
           console.log("data "+data)
           return data;
            //return true;
        }
        catch(e)
        {
            console.log("configservice Get All post  error",e)
            return false;
        }
    }
    async fileupload(file){
        try{
           return await this.bucket.createFile(conf.appwrite_BucketID,ID.unique(),file)
            //return true;
        }
        catch(e)
        {
            console.log("configservice file ulpoad  error",e)
            return false;
        }
    }
    async deletefile(fileID){
        try{
            await this.bucket.deleteFile(conf.appwrite_BucketID,fileID)
            return true;
        }
        catch(e)
        {
            console.log("configservice file ulpoad  error",e)
            return false;
           
        }
    }
    getfilepreview(fileID){
        return this.bucket.getFilePreview(conf.appwrite_BucketID,fileID)
    }

}
const service=new Service();
export default service;