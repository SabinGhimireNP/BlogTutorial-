import conf from "../conf/conf.js";

import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImg, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }

    return null;
  }

  async updatePost(slug, { title, content, featuredImg, status }) {
    try {
      return await this.databases.updateDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featuredImg,
          status,
        }
      );
    } catch (error) {
      throw error;
    }

    return null;
  }

  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async getPosts(quiries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDataBaseId,
        conf.appWriteCollectionId,
        quiries
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  //file Upload
  async uploadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appWriteBucketId,
        ID.unique(),
        file
      );
    } catch (error) {
      throw error;
      return false;
    }
  }

  async deleteFile(fileID) {
    try {
      await this.storage.deleteFile(conf.appWriteBucketId, fileID);
      return true;
    } catch (error) {
      throw error;
      return false;
    }
  }

  getFilePreview(fileID) {
    return this.storage, this.getFilePreview(conf.appWriteBucketId, fileID);
  }
}

const service = new service();
export default service;
