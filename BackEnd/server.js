const express = require("express");
const app = express();
app.use(express.json());

const port = 3001 || process.env.PORT;
const pool = require("./db");

const cors = require("cors");
app.use(cors());

const bcrypt = require("bcryptjs");

const { authenticate, authRole } = require("./auth");

//ROUTES

// Post Admin
app.post("/admin", authenticate, async (req, res) => {
  try {
    let { username, email, password, role } = req.body;
    const salt = bcrypt.genSaltSync(10);
    let hashedPassword = bcrypt.hashSync(password, salt);
    password = hashedPassword;

    const AddAdmin = await pool.query(
      "INSERT INTO super_admin_login (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *",
      [username, email, password, role]
    );
    res.status(201).json(AddAdmin.rows[0]);
  } catch (error) {
    res.status(500).json("Posting Admin went wrong");
    console.error(error);
  }
});
const jwt = require("jsonwebtoken");

// Admin login
app.post("/admin_login", async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      res.status(400).json("Please enter all fields");
    }
    // Check If the user exists
    let admin = await pool.query(
      "SELECT * FROM super_admin_login WHERE username = $1",
      [username]
    );
    admin = admin.rows[0];

    // if (admin.role !== "Reviewer") {
    //   res.status(401).json("Invalid role credentials");
    // }
    if (admin) {
      let validPassword = await bcrypt.compareSync(password, admin.password);
      if (validPassword) {
        // const iat = Math.floor(Date.now() / 1000);
        // const exp = iat + 5;
        // Create JWT
        let token = jwt.sign(
          { username: admin.username, password: admin.password },
          process.env.APP_SECRET,
          { expiresIn: "2 days" }
        );
        res
          .status(200)
          .json({ token: token, role: admin.role, username: admin.username });
      } else {
        res.status(401).json("Invalid Password");
      }
    } else {
      res.status(401).json("Invalid credentials");
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Something went wrong" });
  }
});

// Admin Dashboard
app.get(
  "/admin_dashboard",
  authenticate,
  //   authRole(["Admin"]),
  async (req, res) => {
    try {
      const admin = await pool.query("SELECT * FROM super_admin_login");
      res.status(200).json(admin.rows);
    } catch (error) {
      console.error(error);
      res.status(403).json({ message: "Something went wrong" });
    }
  }
);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
