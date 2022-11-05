const { Router } = require("express");

const router = Router();

const getOperationType = (str) => {
  str = str?.toLowerCase();

  if (!str) {
    str = "";
  } else if (str.includes("add") || str.includes("addition")) {
    str = "addition";
  } else if (str.includes("subtract") || str.includes("subtraction")) {
    str = "subtraction";
  } else if (str.includes("multiply") || str.includes("multiplication")) {
    str = "multiplication";
  }

  return str;
};

const checkString = (str) => {
  if (!str) return null;

  return str;
};

const calculateValues = (num1, num2, operation) => {
  let result = 0;

  switch (operation) {
    case "addition":
      result = num1 + num2;
      break;

    case "subtraction":
      result = num1 - num2;
      break;

    case "multiplication":
      result = num1 * num2;
      break;

    default:
      break;
  }

  return Math.round(result);
};

router.post("/", (req, res) => {
  const operation_type = getOperationType(checkString(req.body.operation_type));
  const num1 = parseFloat(req.body.x);
  const num2 = parseFloat(req.body.y);

  if (!operation_type || !num1 || !num2) {
    res
      .status(400)
      .send("Bad request sent. Please ensure all values are provided");

    return;
  }

  const result = calculateValues(num1, num2, operation_type);

  const output = {
    slackUsername: "Zublexo",
    result,
    operation_type,
  };

  res.status(200).json(output);
});

module.exports = router;
