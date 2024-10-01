import mongoose from "mongoose";

export const connectDB = async () => {
	try {
		const conn = await mongoose.connect("mongodb+srv://pnymeet:Kwk1yf7xU5iIDIGr@cluster0.n2ul6.mongodb.net/online_store?retryWrites=true&w=majority&appName=Cluster0");
		console.log(`MongoDB connected: ${conn.connection.host}`);
	} catch (error) {
		console.log("Error connecting to MONGODB", error.message);
		process.exit(1);
	}
};
