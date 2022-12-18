function loginHandler(req, res) {
  const body = req.body;
  console.log(body);
}

function signUpHandler(req, res) {}

module.exports = { loginHandler, signUpHandler };
