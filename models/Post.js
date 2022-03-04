import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  postText: { type: String, required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  likes: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }]
});

export default mongoose.model('Post', PostSchema);