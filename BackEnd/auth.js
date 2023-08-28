// JWT
const jwt = require("jsonwebtoken");

const authenticate = (req, res, next) => {
  //   console.log(req.Headers.Authorization);
  if (req.headers.authorization) {
    let decode = jwt.verify(req.headers.authorization, process.env.APP_SECRET);
    if (decode) {
      next();
    } else {
      res.status(401).json({
        message: "Invalid token",
      });
    }
  } else {
    res.status(401).json({ message: "User is unauthorized" });
  }
};

// const authRole = (roles) => async (req, res, next) => {
//   let { username } = req.body;
//   const user = await pool.query(
//     "SELECT * FROM super_admin_login WHERE username = $1",
//     [username]
//   );
//   !roles.includes(user.rows[0].role)
//     ? res.status(401).json("Unauthorized Access")
//     : next();
// };

module.exports = { authenticate };
