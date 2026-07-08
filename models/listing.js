const mongoose = require("mongoose");
const Schema= mongoose.Schema;
const Review = require("./review.js");

const listingSchema= new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image:{
        type: String,
        default:"https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/the-fairy-pools-1534396580-735X412.jpg",
        set:(v)=>v===""?"https://d3hne3c382ip58.cloudfront.net/files/uploads/bookmundi/resized/cms/the-fairy-pools-1534396580-735X412.jpg":v,
    },
    
    price: Number,
    location: String,
    country: String,
    reviews:[
        {
            type: Schema.Types.ObjectId,
            ref:"Review",
        },
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

listingSchema.post("findOneAndDelete", async(listing)=>{
    if(listing){
        await Review.deleteMany({_id: {$in: listing.reviews}});
    }
});

const Listing= mongoose.model("Listing",listingSchema);
module.exports=Listing;
