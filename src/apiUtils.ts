export async function connectToServer({ path }: { path: string }) {
  const ws = new WebSocket(`ws://localhost:3000/${path}`);
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
