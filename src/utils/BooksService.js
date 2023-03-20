import axios from 'axios';
import React from 'react';

const API_KEY = process.env.REACT_APP_API_KEY;
export default class BooksService {
  httpClient;

  constructor(client) {
    this.httpClient = client;
  }

  // https://www.googleapis.com/books/v1/volumes?q=${bookToSearch}&key=${API_KEY}&maxResults=10

  async getBooks(bookToSearch) {
    try {
      const { data } = await this.httpClient.get(
        `https://www.googleapis.com/books/v1/volumes?q=${bookToSearch}&key=${API_KEY}&maxResults=10`
      )
      console.log(data);
      return data;
    } catch (e) {
      console.error('Something went wrong', e)
    }
  }
}

export const booksService = new BooksService(axios);
