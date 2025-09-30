import { model, models, Schema } from "mongoose";


const SubscriberSchema = new Schema({
    phoneNumber: String
},
    {
        timestamps: true
    }
);

const Subscriber = models.Subscriber || model("Subscriber", SubscriberSchema)

export default Subscriber