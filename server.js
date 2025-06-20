const express = require("express");
const app = express();
const port = 4000;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extented: true }));

let users = [];

app.get("/", (req, res) => {
  res.render("user", { users });
});

app.post("/create", (req, res) => {
  const carname = req.body.carname;
  const carcolor = req.body.carcolor;
  const carmodel = req.body.carmodel;

  users.push({
    carname,
    carcolor,
    carmodel,
  });

  res.redirect("/");
});

// For Delete

app.get("/delete/:index", (req, res) => {
  const index = req.params.index;
  users.splice(index, 1);
  res.redirect("/");
});

// show edit form
app.get("/edit/:index", (req, res) => {
  const index = req.params.index;
  res.render("edit", { user: users[index], index });
});

app.post("/update/:index", (req, res) => {
  const index = req.params.index;
  const { carname,carcolor, carmodel  } = req.body;
  users[index] = { carname, carmodel, carmodel };
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
