const mongoose = require("mongoose"); 

const TransactionSchema = new mongoose.Schema({
    items: [
        {
          category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Category', // Reference to the Category model
            required: true
          },
          quantity: {
            type: Number,
            required: true,
            trim: true,
          },
          price: {
            type: Number,
            required: true,
          },
          discount: {
            type: Number,
            required: false,
            default: 0,
          },
          than: {
            type: Number,
            required: false,
            default: 1,
          },
          type: {
            type: String,
            required: true,
          },
        },
    ],
    grandTotal: {
        type: Number,
        required: true,
    },
    customerName: { //customer Table cnic
        type: String,
        trim: true,
    },
    builty: {
      type: String,
      trim: true,
      default: ""
    },
    cnic: {
      type: String,
      trim: true,
      default: ""
    },
    contact: {
      type: String,
      trim: true,
      default: ""
    }

},{timestamps: true});

const Transaction = mongoose.model('Transaction', TransactionSchema);
module.exports = Transaction;