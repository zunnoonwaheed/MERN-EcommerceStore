import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

export const stripe = new Stripe("sk_test_51PxpZ5P8kMJ8cLP1i2Mz7Qt1vf3vD4FO8C9tykwVmZc6XDODV4JDhxha9cyjbCBgbVUTCpUeljoGDApf5wCoUiN300DMSPyqXk");
