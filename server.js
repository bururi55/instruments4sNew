import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(
  session({
    secret: "your_secret_key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

// Обслуживание статических файлов из папки public
app.use(express.static(path.join(__dirname, "public")));

// Обслуживание скомпилированных файлов из папки dist
app.use("/dist", express.static(path.join(__dirname, "dist")));

const VALID_USERNAME = "s4s";
const VALID_PASSWORD = "1488";

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  if (username === VALID_USERNAME && password === VALID_PASSWORD) {
    req.session.logged_in = true;
    res.redirect("/main");
  } else {
    res.redirect("/?error=true");
  }
});

app.get("/main", (req, res) => {
  if (req.session.logged_in) {
    res.sendFile(path.join(__dirname, "public", "main.html"));
  } else {
    res.redirect("/");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
