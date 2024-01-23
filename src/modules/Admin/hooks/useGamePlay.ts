import { useEffect, useState } from "react";
import { useAdminSocket } from "../../../Context/adminSocketProvider";
import { useReadSocketMessage } from "../../../hooks";
import { GAME_COUNT_DOWN } from "../../../type";

// const javascriptQuiz = {
//   metaInfo: {
//     point: 1000,
//     title: "JavaScript Quiz",
//     totalQuestions: 6,
//     timeBound: 30,
//   },
//   questions: [
//     {
//       questionLabel:
//         "Which keyword is used to declare a constant in JavaScript?",
//       options: ["var", "let", "const", "final"],
//       answer: "const",
//     },
//     {
//       questionLabel: "What does the DOM stand for?",
//       options: [
//         "Document Object Model",
//         "Data Object Model",
//         "Document Oriented Model",
//         "Digital Ordinance Model",
//       ],
//       answer: "Document Object Model",
//     },
//     {
//       questionLabel:
//         "How can you check if a variable is an array in JavaScript?",
//       options: [
//         "isArray(variable)",
//         "variable.isArray()",
//         "Array.isArray(variable)",
//         "variable.isTypeOf('array')",
//       ],
//       answer: "Array.isArray(variable)",
//     },
//     {
//       questionLabel:
//         "What is the purpose of the 'use strict' directive in JavaScript?",
//       options: [
//         "Enforce strict type checking",
//         "Enable new ECMAScript features",
//         "Improve performance",
//         "Catch common coding errors",
//       ],
//       answer: "Catch common coding errors",
//     },
//     {
//       questionLabel: "Which of the following is a JavaScript package manager?",
//       options: ["Bower", "Grunt", "npm", "Maven"],
//       answer: "npm",
//     },
//     {
//       questionLabel: "What is closure in JavaScript?",
//       options: [
//         "A block of code",
//         "A data type",
//         "A way to create private variables",
//         "A function inside another function that has access to the outer function's variables",
//       ],
//       answer:
//         "A function inside another function that has access to the outer function's variables",
//     },
//   ],
// };

export const useGameAdminCountDown = () => {
  const socket = useAdminSocket();
  const [isCountDownStarted, setCountDownStarted] = useState(false);
  const [isCountDownDone, setCountDownDone] = useState(false);
  const [countDownNumber, setCountDownNumber] = useState<number>(5);

  const serverMessage = useReadSocketMessage<number>({ ws: socket });

  useEffect(() => {
    if (!isCountDownDone && socket && !isCountDownStarted) {
      const countDownMessage = {
        action: GAME_COUNT_DOWN.START,
        payload: countDownNumber - 1,
      };
      socket.send(JSON.stringify(countDownMessage));
      setCountDownStarted(() => true);
    }

    if (serverMessage && socket) {
      const { action, payload } = serverMessage;

      if (action === GAME_COUNT_DOWN.IN_PROGRESS) {
        setCountDownNumber(() => payload);
      }

      if (action === GAME_COUNT_DOWN.DONE) {
        setCountDownDone(() => true);
      }
    }
  }, [
    socket,
    isCountDownDone,
    serverMessage,
    isCountDownStarted,
    countDownNumber,
  ]);

  return { countDownNumber, isCountDownDone };
};
