const corsOptions = {
  origin: [
    "http://localhost:5173",
    "http://localhost:5174",
    "https://chat-app-frontend-ro67iluq0-mohiths-projects-12313acc.vercel.app",
    "http://localhost:4173",
    process.env.CLIENT_URL,
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

const CHATTU_TOKEN = "chattu-token";

export { corsOptions, CHATTU_TOKEN };
