import { Client, Account, ID } from "appwrite";
import { Client, Account, ID, Databases, Query, Storage } from "appwrite";
import { nanoid } from "nanoid";

import conf from "../conf/conf";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const uniqueId = nanoid();
      const userAccount = await this.account.create({
        uniqueId,
        email,
        password,
        name,
      });

      if (userAccount) {
        // login the user
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      return await this.account.createEmailSession({ email, password });
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions("current");
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();

export default authService;
