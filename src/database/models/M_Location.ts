import mongoose from 'mongoose';

const IntegratedNewsSchema = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    newsurlList: [{ type: String, required: true }],
    full_contents: { type: String, required: true },
    Thumbnail_image: { type: String, required: true },
  }
);

const Integrated_News_Society = mongoose.models.Integrated_News_Society || mongoose.model('Society', IntegratedNewsSchema, 'Society');

export { Integrated_News_Society };
