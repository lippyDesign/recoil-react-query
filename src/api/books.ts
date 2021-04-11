import axios from 'axios';

import { Book } from '../types/book';

export const getBooks = async (): Promise<Book[]> => {
  const { data } = await axios.get('http://localhost:8080/api/books');
  return data;
};

export const getBookById = async (id: string): Promise<Book> => {
  const { data } = await axios.get(`http://localhost:8080/api/books/${id}`);
  return data;
};

export const addBook = async (book: Book): Promise<Book> => {
  const { data } = await axios.post('http://localhost:8080/api/books', book);
  return data;
};
