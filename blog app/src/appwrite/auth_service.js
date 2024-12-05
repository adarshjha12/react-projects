import config from "../conf/conf";

import {Client, Account, ID} from 'appwrite'

class AuthService {
    client = new Client()
    account;
    constructor() {
        this.client.setEndpoint(config.appwrite_url).setProject(config.appwrite_project_id)

        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            } else{
                return userAccount
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}){

        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            const user =  await this.account.get()
            return user
        } catch (error) {
             console.log(error);
             
        }
        return null;
    }

    async logout() {
        try {
            return this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}

const authService = new AuthService()
export default authService