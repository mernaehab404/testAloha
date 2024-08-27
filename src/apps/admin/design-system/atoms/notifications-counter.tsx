import { atom } from "@mongez/react-atom";

export const CounterAtom = atom<any>({
  key: "counter",
  default: {
    counter: 2,
    resetCounter() {
      CounterAtom.update({
        ...CounterAtom,
        counter: 0,
      });
    },
  },
});

export const notificationsAtom = atom({
  key: "notifications",
  default: [],
});
