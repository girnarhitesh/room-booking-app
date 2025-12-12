// Sample data script to populate the database with initial rooms
import mongoose from "mongoose";
import dotenv from "dotenv";
import Room from "./models/Room.js";

dotenv.config();

const sampleRooms = [
  {
    roomNumber: "101",
    type: "Single",
    price: 100,
    status: "available",
    capacity: 1,
    amenities: ["WiFi", "TV", "AC"],
    description: "Cozy single room with all basic amenities",
    floor: 1,
    bedType: "Single Bed",
    view: "City View",
    smokingAllowed: false,
    petFriendly: false
  },
  {
    roomNumber: "102",
    type: "Double",
    price: 150,
    status: "available",
    capacity: 2,
    amenities: ["WiFi", "TV", "AC", "Mini Bar"],
    description: "Comfortable double room for couples",
    floor: 1,
    bedType: "Queen Bed",
    view: "Garden View",
    smokingAllowed: false,
    petFriendly: true
  },
  {
    roomNumber: "201",
    type: "Suite",
    price: 300,
    status: "available",
    capacity: 4,
    amenities: ["WiFi", "TV", "AC", "Mini Bar", "Jacuzzi", "Balcony"],
    description: "Luxurious suite with premium amenities",
    floor: 2,
    bedType: "King Bed",
    view: "Ocean View",
    smokingAllowed: false,
    petFriendly: false
  },
  {
    roomNumber: "202",
    type: "Double",
    price: 175,
    status: "booked",
    capacity: 2,
    amenities: ["WiFi", "TV", "AC", "Mini Bar"],
    description: "Modern double room with city view",
    floor: 2,
    bedType: "Queen Bed",
    view: "City View",
    smokingAllowed: false,
    petFriendly: false
  },
  {
    roomNumber: "301",
    type: "Family",
    price: 250,
    status: "available",
    capacity: 5,
    amenities: ["WiFi", "TV", "AC", "Kitchenette", "Sofa Bed"],
    description: "Spacious family room with kitchenette",
    floor: 3,
    bedType: "King Bed + Sofa Bed",
    view: "Garden View",
    smokingAllowed: false,
    petFriendly: true
  }
];

const insertSampleData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    console.log("MongoDB connected successfully");
    
    // Clear existing data
    await Room.deleteMany({});
    console.log("Existing data cleared");
    
    // Insert sample data
    await Room.insertMany(sampleRooms);
    console.log("Sample data inserted successfully");
    
    // Disconnect from database
    await mongoose.connection.close();
    console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error inserting sample data:", error);
    process.exit(1);
  }
};

insertSampleData();