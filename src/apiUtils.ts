import { BASE_URL_SERVER_WEBSOCKET } from "./appConfig";

export async function connectToServer({ path }: { path: string }) {
  const ws = new WebSocket(`${BASE_URL_SERVER_WEBSOCKET}/${path}`);
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      if (ws.readyState === 1) {
        console.log("Handshake done!!");
        resolve(ws);
        clearInterval(timer);
      }
    }, 5000);
  });
}

export const noop = () => {};

export function debounce(func: () => void, delay: number) {
  let timerId;

  return function (...args) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this;

    clearTimeout(timerId);

    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
