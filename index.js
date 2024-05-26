//for execution and rest api development

const express = require("express")
const users = require("./MOCK_DATA.json")
const app = express()
const PORT= 8000

app.listen(PORT,()=>console.log("SERVER STARTED"))



//middleware plugin : 


//routes
app.get('/api/users',(req,res)=>{
    return res.json(users)
})

app.get('/users',(req,res)=>{
    const html = `<ul>
    ${users.map(user=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;

    res.send(html)
})

//dynamic path parameteres => GET /api/users/:id -> the colon : depects a dynamic field

app.get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(user => user.id === id);
    return res.json(user);

})

//post and put requests

app.route("/api/users/:id/:id2").get((req,res)=>{
    const id = Number(req.params.id);
    const id2 = Number(req.params.id2);
    const user2 = users.find((user)=>user.id2===id2)
    const user = users.find((user)=>user.id === id)
    return res.json({user,user2})
}).put((req,res)=>{
    return res.json({status:pending})
})
.delete((req,res)=>{})

app.post("/api/users",(req,res)=>{
    return res.json({status:"pending"})
})

//MIDDLEWARES: CLIENT->(GET REQ->)->SERVER 

