import { User } from "next-auth";


export type CarouselItem = {
    title?: string;
    description?: string;
    imageUrl: string;
  };

export type CarouselProps = {
  items: CarouselItem[];
};

export enum MealsPlanEnum {
    chefsChoice = "Chef's Choice",
    proteinPlus = "Protein Plus",
    poultryFishVeggie = "Poultry, Fish, & Veggie",
    calorieSmart = "Calorie Smart",
    keto = "Keto",
    glp1Balance = "GLP-1 Balance"
};

export enum EnterDeliveryInstructionEnum {
    leaveAtFrontDoor = "Leave at front door",
    leaveAtBackDoor = "Leave at back door",
    other = "Other"
}

export interface CredentialsProps {
  username: string;
  password: string;
}

export interface AuthorizedUserProps extends User {
  _id: string;
  username: string;
  // add other fields you return
}

export interface SubscribePlanType {
  duration: string; // or number if parsed earlier
  preference: string;
  plan: string;
  meals: string;
  portion: string;
  goal: string;
}

export interface DeliveryAddressType {
  firstName: string;
  lastName: string;
  street: string;
  addressLine2?: string | null;
  city: string;
  province: string;
  postalCode: string;
  phoneNumber: string;
  enterDeliveryInstruction: string;
}

export interface UserType {
  userName?: string;
  email: string;
  isSubscribed: boolean;
  isBanned: boolean;
  isPaymentVerified: boolean;
  offDays: Date[]
  subscribedAt: Date | null;
  subscriptionEndDate: Date | null;
  currentSubscribedPlan?: SubscribePlanType;
  deliveryAddress?: DeliveryAddressType;
  subscribePlans?: SubscribePlanType[];
}

export interface UserDocument extends Document, UserType {}

export interface EmailRequestBody {
    // email?: string;
    // subject?: string;
    [key: string]: string;
}

export interface MailOptions {
    from: string;
    to: string;
    subject: string;
    text: string;
}