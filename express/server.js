const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/:id", (req, res) => {
   
    console.log(req.query, req.body, req.params)
    
    return res.json({...req.query, ...req.body, ...req.params})


});

app.post("/", (req, res) => {
    console.log(req.body)
    return res.status(201).json(req.body)
})

app.put("/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    return res.json({...req.body, id: req.params.id})
})

app.delete("/:id", (req, res) => {
    console.log(req.body)
    console.log(req.params)
    return res.json({...req.body, id: req.params.id})
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});
