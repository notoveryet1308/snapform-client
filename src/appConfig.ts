// export const BASE_URL_SERVER =
//   process.env.NODE_ENV === "development"
//     ? process.env.BASE_LOCAL_API_PATH
//     : process.env.BASE_SERVER_API_PATH;
// export const BASE_URL_SERVER_WEBSOCKET =
//   process.env.NODE_ENV === "development"
//     ? process.env.BASE_LOCAL_WEBSOCKET_PATH
//     : process.env.BASE_SERVER_WEBSOCKET_PATH;


// export const BASE_URL_SERVER="https://snapform-server.onrender.com"
// export const BASE_URL_SERVER_WEBSOCKET="wss://snapform-server.onrender.com"

export const BASE_URL_SERVER="http://localhost:3000"
export const BASE_URL_SERVER_WEBSOCKET="ws://localhost:3000"

export enum FORM_TYPE {
  LIVE_QUIZ = "LIVE-QUIZ",
  DYNAMIC_FORM = "DYNAMIC-FORM",
}
