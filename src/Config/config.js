const conf={
    appwrite:String(import.meta.env.VITE_APPWRITE_URL),
    appwrite_projectID:String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    appwrite_DatabaseID:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    appwrite_BucketID:String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    appwrite_CollectionID:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    
}


export default conf;