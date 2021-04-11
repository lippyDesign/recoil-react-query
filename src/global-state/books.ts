import { atom, selector } from 'recoil';

import { ViewedBook } from '../types/book';

export const viewedBooksState = atom({
  key: 'viewedBooksState',
  default: [] as ViewedBook[],
});

export const numberOfViewedBookState = selector({
  key: 'numberOfViewedBookState',
  get: ({ get }) => {
    const viewedBooks = get(viewedBooksState);
    return viewedBooks.length;
  },
});
