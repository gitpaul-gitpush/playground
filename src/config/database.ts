import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const {
  MONGODB_URI = 'mongodb://localhost:27017/playground',
  MONGODB_USERNAME,
  MONGODB_PASSWORD,
} = process.env;

// Construct the connection URI with credentials if they exist
const getConnectionUri = () => {
  if (MONGODB_USERNAME && MONGODB_PASSWORD) {
    const uri = new URL(MONGODB_URI);
    uri.username = MONGODB_USERNAME;
    uri.password = MONGODB_PASSWORD;
    return uri.toString();
  }
  return MONGODB_URI;
};

// Database connection
export const connectToDatabase = async () => {
  try {
    const uri = getConnectionUri();
    await mongoose.connect(uri);
    console.log('Successfully connected to MongoDB.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
};

// Handle connection events
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
});

process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close();
    console.log('MongoDB connection closed through app termination');
    process.exit(0);
  } catch (err) {
    console.error('Error closing MongoDB connection:', err);
    process.exit(1);
  }
});
