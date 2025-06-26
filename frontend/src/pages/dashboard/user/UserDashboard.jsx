import { motion } from "framer-motion";
import React from "react";
import { useAuth } from "../../../context/AuthContext";
import { useGetOrderByEmailQuery } from "../../../redux/features/orders/ordersApi";

// Floating animation for background particles
const floatingVariants = {
  animate: {
    y: [0, -20, 0], 
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const OrderList = ({ orders }) => (
  <ul className="space-y-4">
    {orders.map((order) => (
      <li key={order._id} className="bg-white/70 backdrop-blur-md p-4 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900">Order ID: {order._id}</p>
        <p className="text-gray-700">Date: {new Date(order?.createdAt).toLocaleDateString()}</p>
        <p className="font-semibold text-blue-500">Total: ${order.totalPrice.toFixed(2)}</p>
        {order.productIds?.length > 0 && (
          <div>
            <p className="font-semibold mt-2 text-gray-900">Products:</p>
            <ul className="ml-4 list-disc text-gray-700">
              {order.productIds.map((productId) => (
                <li key={productId}>{productId}</li>
              ))}
            </ul>
          </div>
        )}
      </li>
    ))}
  </ul>
);

const UserDashboard = () => {
  const { currentUser } = useAuth();
  const userName = currentUser?.name || currentUser?.displayName || "User";
  
  const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser?.email);

  if (isLoading) return <div className="text-center py-10 text-white">Loading...</div>;
  if (isError) return <div className="text-center py-10 text-red-500">Error fetching orders. Please try again.</div>;

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-600 overflow-hidden">
      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-12 h-12 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 100}vw`,
          }}
          variants={floatingVariants}
          animate="animate"
        />
      ))}

      {/* Main Card */}
      <motion.div
        className="max-w-4xl mx-auto bg-white/30 backdrop-blur-lg shadow-xl rounded-lg p-8 border border-white/20 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">User Dashboard</h1>
        <p className="text-gray-700 mb-6">Welcome, <span className="text-indigo-600 font-bold">{userName}</span>! Here are your recent orders:</p>

        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Orders</h2>
          {orders.length > 0 ? <OrderList orders={orders} /> : <p className="text-gray-600">You have no recent orders.</p>}
        </div>
      </motion.div>
    </div>
  );
};

export default UserDashboard;
