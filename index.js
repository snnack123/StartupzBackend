const {contactFormSchema} = require('./utils/yupSchemas');
const {app, emailjs, PORT} = require("./app");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  const isValid = contactFormSchema.isValidSync(req.body);

  if (!isValid) {
    return res.status(400).json({ message: "Invalid data" });
  }
  
  const templateParams = {
    email_to: email,
    from_name: name,
    message,
  };

  emailjs
    .send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      templateParams
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        res.status(200).json({ message: "Email sent successfully!" });
      },
      (err) => {
        console.log("FAILED...", err);
        res.status(500).json({ message: "Email failed to send." });
      }
    );
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});
