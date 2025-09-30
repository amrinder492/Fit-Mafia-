// import { EnterDeliveryInstructionEnum } from "@/lib/types";
import { model, models, Schema } from "mongoose";


const UserSchema = new Schema({
    userName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    OTP: {
        type: String,
        default: null
    },
    otpExpire: {
        type: Date,
        default: null
    },
    isOtpVerified: {
        type: Boolean,
        default: false,
    },
    otpVerifiedAt: Date,
    paymentHistory: [{
        type: Schema.Types.ObjectId,
        ref: "PaymentHistory"
    }],
    isPaymentVerified: {
        type: Boolean,
        default: false
    },
    deliveryAddress: {
        firstName: String,
        lastName: String,
        street: String,
        addressLine2: String,
        city: String,
        province: String,
        postalCode: String,
        phoneNumber: String,
        deliveryInstructions: String,
        customDeliveryInstruction: String
    },
    isBanned: {
        type: Boolean,
        default: false
    },
    isSubscribed: {
        type: Boolean,
        default: false
    },
    isSubscriptionPaused: {
        type: Boolean,
        default: false
    },
    subscriptionPausedAt: {
        type: Date,
        default: null
    },
    subscribedAt: {
        type: Date,
        default: null
    },
    subscriptionEndDate: {
        type: Date,
        default: null
    },
    offDays: {
        type: [Date],
        default: []
    },
    currentSubscribedPlan: {
        duration: String,
        preference: String,
        plan: String
    },
    subscribePlans: [{
        duration: String,
        preference: String,
        plan: String
    }],
},
    {
        timestamps: true
    }
);

const User = models.User || model("User", UserSchema)

export default User;