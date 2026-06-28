import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA8SWkKvPvPPTpUTcqxLyNqpEa1UuPRBO8",
  authDomain: "unidel-dc0e7.firebaseapp.com",
  projectId: "unidel-dc0e7",
  storageBucket: "unidel-dc0e7.firebasestorage.app",
  messagingSenderId: "933491443734",
  appId: "1:933491443734:web:3c181423a61b1c1c518d37",
  measurementId: "G-JRZN0DVHEH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
