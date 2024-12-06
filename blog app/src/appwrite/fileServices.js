import config from "../conf/conf";
import {Client, Databases, Storage, Query, ID} from 'appwrite'

class Service {
    client = new Client
    Databases;
    bucket;

    constructor() {
        this.client.setEndpoint(config.appwrite_url).setProject(config.appwrite_project_id)

        this.Databases = new Databases(this.client)
        this.bucket = new Storage(this.client)
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.Databases.createDocument(
                config.appwrite_database_id,
                config.appwrite_collection_id,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log(error);
            
        }

    }

    async updatePost (slug, {title, content, featuredImage, status}){
        try {
            return await this.Databases.updateDocument(
                config.appwrite_database_id,
                config.appwrite_collection_id,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            )
        } catch (error) {
            console.log(error);

        }
    }

    async deletePost (slug){
        try {
             await this.Databases.deleteDocument(
                config.appwrite_database_id,
                config.appwrite_collection_id,
                slug
            )
            return true
        } catch (error) {
            console.log(error);

            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.Databases.getDocument(
               config.appwrite_database_id,
               config.appwrite_collection_id,
               slug
           )
       } catch (error) {
           console.log(error);
           return false
       }
    }

    async getPosts(queries = [Query.equal('status', 'active')]) {
        try {
            return await this.Databases.listDocuments(
               config.appwrite_database_id,
               config.appwrite_collection_id,
               queries
           )
       } catch (error) {
           console.log(error);

           return false
       }
    }

    async fileUpload (file) {
        try {
            this.bucket.createFile(
                config.appwrite_bucket_id,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    async fileDelete(fileId) {
        try {
            return await this.bucket.deleteFile(
                config.appwrite_bucket_id,
                fileId
            )
        } catch (error) {
            console.log(error);
            return false
        }
    }

    getFilePreview(fileId){
        this.bucket.getFilePreview(
            config.appwrite_bucket_id,
            fileId
        )
    }
}

export const fileService = new Service()

export default fileService