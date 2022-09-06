// router
const router = require("express").Router();

// Login Page
router.get("/login", async (req, res) => {
  const session = req.session;
  if (session.admin) {
    if (session.admin == process.env.admin_email) {
      res.redirect("/admin/review");
    } else {
      return res.render("adminlogin");
    }
  } else {
    return res.render("adminlogin");
  }
});

router.post("/login", (req, res) => {
  //capture the input fields
  const collect = req.body;
  const session = req.session;
  if (collect.email != null && collect.passwrd != null) {
    if (
      collect.email == process.env.admin_email &&
      collect.passwrd == process.env.admin_passwrd
    ) {
      session.admin = collect.email;
      res.redirect("/admin/review");
    } else {
      res.render("adminlogin");
    }
  } else {
    console.log("empty input");
  }
});


router.get('/review', (req,res)=>{
    const session  = req.session
    if (session.admin) {
        res.render('adminreview')

    }else{
        res.render('adminlogin')
    }
})


module.exports = router;
