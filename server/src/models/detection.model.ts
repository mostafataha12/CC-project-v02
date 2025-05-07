import mongoose from 'mongoose';

export interface IDetection extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  imageUrl: string;
  result: {
    prediction: string;
    confidence: number;
    details: any;
  };
  createdAt: Date;
}

const detectionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  result: {
    prediction: {
      type: String,
      required: true
    },
    confidence: {
      type: Number,
      required: true
    },
    details: {
      type: mongoose.Schema.Types.Mixed
    }
  }
}, {
  timestamps: true
});

export const Detection = mongoose.model<IDetection>('Detection', detectionSchema); 