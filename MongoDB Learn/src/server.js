const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/UserData")
.then(()=>{
    console.log("Connected Successfully...");
}).catch((err)=>{
    console.log("Something Went Wrong!!!");
})

const usersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: [5, "Minimum Letter 5 required"] 
    },
    Email:{
        type: String,
        lowercase: true,
        trim:true
    },
    PhoneNo: {
        type: Number,
        max: 10
    },
    Active: {
        type: Boolean,
        default: true
    }
})
const Data = mongoose.model("Data", usersSchema);

// Creating Our First Documnet
const createDocument = async ()=>{
    try{
        const firstData = new Data({
            name: "Arbaz Khan",
            Email: "arbazkhaan.cs@gmail.com",
            PhoneNo: 9953532472,
            Active: true
        })
        
        const result = await firstData.save();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
} 
// createDocument();


// ===============================Crud Operation Starting...==================================

// Creating Multiple Documents
const createMultiDocument = async ()=>{
    try{
        const FirstData = new Data({
            name: "Saif Ali Khan",
            Email:"saifalikhan.sre@gmail.com",
            PhoneNo: 9870142462,
            Active: false  
        })

        const SecondData = new Data({
            name: "Imran Khan",
            Email:"imrankhan.nlp@gmail.com",
            PhoneNo: 8700110442,
        })

        const result = await Data.insertMany([FirstData, SecondData]);
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
// createMultiDocument();


// Reading Documents
const ReadDocuments = async ()=>{
    try{
        const result = await Data.find({Active:true}, {name:1});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}
// ReadDocuments();


// Updating Document
const updateDocumnet = async (_id)=>{
    try{
        const result1 = await Data.updateOne({_id}, {
            $set: {
                Active: true
            }
        })

        // If we want to see the updated value
        const result2 = await Data.findOneAndUpdate({_id}, {
            $set: {
                Active:true
            }
        }, {new: true})
        console.log(result1);
        console.log(result2);
    }
    catch(err){
        console.log(err);
    }
}
// updateDocumnet("6430f5b9ba27ab9d2eaaeaac");


// Deleting Document
const deleteDocument = async (_id)=>{
    try{
        // const result = await Data.deleteOne({_id});
        // const result = await Data.deleteMany({_id})

        // To show the deleted item
        const result = await Data.findByIdAndDelete(_id);
        console.log(result) 
    }
    catch(err){
        console.log(err);
    }
}
// deleteDocument("6430f732faffb364c95c6bc0");
