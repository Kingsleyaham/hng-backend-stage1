const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  const slackUsername = "KINGSLEY AHAM";
  const backend = true;
  const age = 22;
  const bio =
    "A fullstack Javascript and Php Developer who is passionate about contribute to the development of the world through codes";

  const user = {
    slackUsername,
    backend,
    age,
    bio,
  };

  res.status(200).json(user);
});

module.exports = router;
