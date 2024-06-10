import mongoose from 'mongoose';

const IntegratedNewsSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    newsurlList: [{ type: String, required: true }], // ここを修正
    full_contents: { type: String, required: true },
    Thumbnail_image: { type: String, required: true },
  }
);

const Integrated_News_Society = mongoose.models.Integrated_News_Society || mongoose.model('Integrated_News_Society', IntegratedNewsSchema, 'Integrated_Society');

export { Integrated_News_Society };
