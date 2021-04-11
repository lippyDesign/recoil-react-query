import { atom, selector } from 'recoil';

export const countState = atom({
  key: 'countState',
  default: 1,
});

export const diviserState = atom({
  key: 'diviserState',
  default: '',
});

export const dividedCountState = selector({
  key: 'dividedCountState',
  get: ({ get }) => {
    const count = get(countState);
    const diviserStr = get(diviserState);
    const diviser = parseFloat(diviserStr);
    return count / diviser;
  },
});
