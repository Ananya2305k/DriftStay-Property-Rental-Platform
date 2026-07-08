//we will write here complete logic of initialzation

const mongoose = require("mongoose");
const initData= require("./data.js");
const Listing= require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err);
});

async function main(){   //for database
     await mongoose.connect(MONGO_URL);
}

const initDB= async () =>{  // make db empty first
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"6a48559875fd6b00a7ca4659"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();
