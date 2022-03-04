import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
  friendRequests: [{ type: Schema.Types.ObjectId, ref: 'User', required: true }],
});

export default mongoose.model('User', UserSchema);