const express = require('express');
const connectwithdb = require("./db");
const housekeeping= require("./model/housekeepingGuest.model");

const app = express();
connectwithdb();

app.get("/",(req,res) =>{
    res.send("Hello backend");
})
app.get("/housekeepingGuestcreation", (req,res) =>{
    const housekeepcreate = housekeeping.create({
        guestID : 6,
        name : "akshay Singh",
        roomno : 206,
        check_in :"2024-06-12T12:00:00.000+00:00",
        check_out :"2024-06-16T12:00:00.000+00:00",
        time: "Currently Checked In",
        status :"Not Done"
});
    console.log(housekeepcreate);
    res.send("request created");
})
app.get("/housekeeping", async(req,res)=>{
    const details = await housekeeping.find({}); 
    console.log(details);
    res.send("housekeeping");
})
app.listen(3000, () => {
    console.log("app is listening on port number 3000");

})