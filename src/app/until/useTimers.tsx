import { useEffect, useReducer } from "react";

interface Item {
  src: string;
  titel: string;
  price: number;
  discount: number;
  timeLeft?: number;
}

const getRandomTime = (): number =>
  Math.floor(Math.random() * (24 * 60 * 60 - 3600)) + 3600;


const initialState = (items: Item[]): Item[] =>
  items.map((item) => ({
    ...item,
    timeLeft: getRandomTime(),
  }));


const timerReducer = (state: Item[], action: { type: string }): Item[] => {
  switch (action.type) {
    case "TICK":
      return state.map((item) => ({
        ...item,
        timeLeft: item.timeLeft && item.timeLeft > 0 ? item.timeLeft - 1 : 0,
      }));
    default:
      return state;
  }
};


export function useTimers(items: Item[]): Item[] {
  const [state, dispatch] = useReducer(timerReducer, initialState(items));

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch({ type: "TICK" });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return state;
}


export function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}:${s
    .toString()
    .padStart(2, "0")}`;
}
