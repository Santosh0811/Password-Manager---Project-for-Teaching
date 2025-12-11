const express = require('express')
const app = express()
const port = 5000
const mongoDbConnect = require("./db.js");
const cors = require('cors');
const form = require('./model/form.js');

mongoDbConnect();
app.use(express.json());

app.use(cors({
  origin: "http://localhost:5173"
}))

app.get('/', (req, res) => {
  res.send('Hello World this is my Password manager Backend Server!')
})

// get -> getting/returing a Data; -> read
// post -> sending a data; -> create
// put -> updating a data; -> update
// delete -> deleting a data; -> delete

app.post("/createForm", async (req, res) => {
  try {
    const { formData } = req.body;

    if (!formData.emailId || !formData.password || !formData.websiteName) {
      return res.status(400).json({ message: "Missing required fileds!" });
    }

    const newFormData = new form({
      emailId: formData.emailId,
      password: formData.password,
      websiteName: formData.websiteName,
    })

    await newFormData.save();

    res.status(200).json({ message: "Password saved Successfully" });

  } catch (error) {
    console.log("Error while saving a password");
    res.status(400).json({ message: "Error while saving a password" })
  }
})

app.get('/readForm', async (req, res) => {
  try {
    const formReaddata = await form.find();

    if (!formReaddata || formReaddata.length === 0) {
      return res.status(400).json({ message: "No Password is saved" });
    }

    res.status(200).json({ formReaddata });

  } catch (error) {
    console.log("Error while fetching a password");
    res.status(400).json({ message: "Error while fetching a password" })
  }
})

app.put('/updateForm/:Id', async (req, res) => {
  try {
    const { Id } = req.params;

    const isId = await form.findById(Id);

    if (!isId) {
      return res.status(404).json({ message: "Id not found" });
    }

    const { formData } = req.body;

    if (!formData.emailId || !formData.password || !formData.websiteName) {
      return res.status(400).json({ message: "Missing required fileds!" });
    }

    const updateFormData = await form.findByIdAndUpdate(Id, { emailId: formData.emailId, password: formData.password, websiteName: formData.websiteName });

    if (!updateFormData) {
      return res.status(400).json({ message: "Updating data failed" });
    }

    res.status(200).json({ message: "Updated Successfully" });

  } catch (error) {
    console.log("Error while updating a password");
    res.status(400).json({ message: "Error while updating a password" })
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
