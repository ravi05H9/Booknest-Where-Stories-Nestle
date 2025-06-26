# BookNest: Where Stories Nestle

## Project Overview
BookNest is a Bookstore Application developed using the MERN stack. It provides an excellent user experience with hassle-free browsing and a seamless interface.

## Backend Configuration
### Create a `.env` file in the backend folde
Navigate to the backend directory and create a `.env` file with the following variables:
```env
DB_URL=your_mongodb_connection_string
JWT_SECRET_KEY=your_secret_key
```
> **Note:** Replace `your_mongodb_connection_string` and `your_secret_key` with actual values.

## Firebase Authentication Setup
1. Open [Firebase Console](https://console.firebase.google.com/)
2.  Create a new project
3.  Navigate to **Authentication** > **Sign-in Method**
4.  Enable desired sign-in providers (e.g., Google Authentication)
5.   Configure Firebase environment variables:
```env
apiKey=your_api_key
authDomain=your_project.firebaseapp.com
projectId=your_project
storageBucket=your_project.appspot.com
messagingSenderId=your_messaging_sender_id
appId=your_app_id
measurementId=your_measurement_id
```
> **Note:** Replace placeholders with actual Firebase credentials.

## Frontend Configuration
### Create a `.env.local` file in the frontend folder
Navigate to the frontend directory and create a `.env.local` file with the following:
```env
VITE_API_KEY=your_api_key
VITE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_PROJECT_ID=your_project
VITE_STORAGE_BUCKET=your_project.appspot.com
VITE_MESSAGING_SENDERID=your_messaging_sender_id
VITE_APPID=your_app_id
VITE_MEASUREMENT_ID=your_measurement_id
```

## Installing Dependencies
### Install Node Modules
Run the following commands in separate terminals for frontend and backend:
```sh
# For frontend
d:
cd BookNest/frontend
npm install

# For backend
d:
cd BookNest/backend
npm install
```

### Install Firebase in Frontend
```sh
npm install firebase
```

## Running the Application
Run both frontend and backend servers simultaneously:
```sh
# Start backend
cd BookNest/backend
npm start

# Start frontend
cd BookNest/frontend
npm run dev
```
Once both servers are running:
 The backend will connect to MongoDB and start the server.
 The frontend will launch on `http://localhost:5173/`.

 ## Documentation & Demo Video
 - 📽️ **Demo Video**: [watch here] (https://drive.google.com/file/d/16mLxrRt3TbonobTG-Ovt-wt7EWPx0hTx/view?usp=share_link)
- 📄 **Documentation**:[watch here] (https://1drv.ms/w/c/faae29955b2a4b95/EYdta92djbJNo7Lg8nWkJugBUB_vdcDwwEh1cSdsXtKb3w?e=mQ77ku)
