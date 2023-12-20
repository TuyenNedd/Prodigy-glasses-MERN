const mongoose = require("mongoose");
const cron = require("node-cron");

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        discount: { type: Number },
        type: { type: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullName: { type: String, required: true },
      address: { type: String, required: true },
      city: { type: String, required: true },
      phone: { type: Number, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true },
    shippingPrice: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isPaid: { type: Boolean, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false },
    deliveredAt: { type: Date },
    scheduledDelivery: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderSchema);
// Sử dụng node-cron để lập lịch kiểm tra và cập nhật isDelivered
// cron.schedule("0 0 * * *", async () => {
//   const threeDaysAgo = new Date();
//   threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);

//   try {
//     const result = await Order.updateMany(
//       {
//         createdAt: { $lte: threeDaysAgo },
//         isDelivered: false,
//         scheduledDelivery: false,
//       },
//       { $set: { isDelivered: true, scheduledDelivery: true } }
//     );
//     console.log(`${result.nModified} orders updated successfully.`);
//   } catch (error) {
//     console.error("Error updating orders:", error);
//   }
// });

// Sử dụng node-cron để lập lịch kiểm tra và cập nhật isDelivered mỗi 5 phút
// cron.schedule("*/5 * * * *", async () => {
//   console.log("Cron job is running");
//   const fiveMinutesAgo = new Date();
//   fiveMinutesAgo.setMinutes(fiveMinutesAgo.getMinutes() - 5);

//   const ordersToUpdate = await Order.find({
//     updatedAt: { $lte: fiveMinutesAgo },
//     isDelivered: false,
//     scheduledDelivery: false,
//   });

//   console.log("Orders to update:", ordersToUpdate);
//   try {
//     const result = await Order.updateMany(
//       {
//         updatedAt: { $lte: fiveMinutesAgo },
//         isDelivered: false,
//         scheduledDelivery: false,
//       },
//       { $set: { isDelivered: true, scheduledDelivery: true } }
//     );
//     console.log(`${result.nModified} orders updated successfully.`);
//   } catch (error) {
//     console.error("Error updating orders:", error);
//   }
// });

cron.schedule("*/1 * * * *", async () => {
  console.log("Cron job is running");

  const now = new Date();
  console.log("cron now:", now);
  // const fiveMinutesAgo = new Date(now.getTime() - 10);
  const fiveMinutesAgo = new Date(now.getTime() - 3 * 40 * 1000);
  console.log("cron fiveMinutesAgo:", fiveMinutesAgo);

  try {
    const result = await Order.updateMany(
      {
        createdAt: { $lte: fiveMinutesAgo },
        isDelivered: false,
        scheduledDelivery: false,
        // isPaid: false,
      },
      {
        $set: {
          isDelivered: true,
          scheduledDelivery: true,
          isPaid: true,
          deliveredAt: now,
          paidAt: now,
        },
      }
    );
    console.log("Orders updated successfully.");
  } catch (error) {
    console.error("Error updating orders:", error);
  }
});

module.exports = Order;
