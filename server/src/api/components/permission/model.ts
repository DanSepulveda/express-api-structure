import { Schema, Types, model } from 'mongoose';

const permissionSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
    tag: { type: String, required: true, index: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    roles: [{ type: Types.ObjectId, ref: 'role' }],
    users: [{ type: Types.ObjectId, ref: 'user' }]
  },
  { timestamps: true }
);

export default model('permission', permissionSchema);
