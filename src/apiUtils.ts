export async function connectToServer({ path }: { path: string }) {
  const ws = new WebSocket(`ws://localhost:3000/${path}`);
  return new Promise((resolve, reject) => {
    const timer = setInterval(() => {
      if (ws.readyState === 1) {
        console.log("Handshake done!!");
        clearInterval(timer);
        // clearTimeout(timeout);
        resolve(ws);
      }
    }, 5000);

    // const timeout = setTimeout(() => {
    //   clearInterval(timer);
    //   reject(new Error("Handshake timed out"));
    // }, 5000); 
  });
}
