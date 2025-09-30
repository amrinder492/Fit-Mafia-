import { MealsPlanEnum } from "@/lib/types";
import { model, models, Schema } from "mongoose";


const MealsPlanSchema = new Schema({
    mealsPerWeek: {
        type: Number,
        enum: [6, 8, 10, 12, 14, 18],
        required: true
    },
    preferences: [{
        type: String,
        enum: Object.values(MealsPlanEnum),
        required: true
    }],
},
    {
        timestamps: true
    }
);

const MealsPlan = models.MealsPlan || model("MealsPlan", MealsPlanSchema)

export default MealsPlan