import { Schema, model } from "mongoose";
import isEmail from "validator/lib/isEmail";
import bcrypt from "bcrypt";
import { IuserDocument } from "../interfaces/user.interface";

const userSchema: Schema<IuserDocument> = new Schema(
  {
    name: {
      type: String,
      required: [true, "please provide a valid name"],
    },
    email: {
      type: String,
      required: [true, "please provide your email"],
      validate: [isEmail, "please enter a valid email"],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "please provide your password"],
      comfirmPassword: {
        type: String,
        required: [true, "please enter a password"],
      },
    },
    role: {
      type: Boolean || String,
      enum: ["user", "admin", "manager"],
      message: "you must either, be a user an admin, or a manager",
      default: "user",
    },
  },
  {
    timestamps: true,
  }
);

// Middleware for hashing password
userSchema.pre("save", async function (next) {
  let user = this;

  if (!user.isModified("password")) next();

  const salt = await bcrypt.genSalt(12);

  user.password = await bcrypt.hash(user.password, salt);
  user.comfirmPassword = user.password;

  next();
});

// Method to compare password
userSchema.methods.comparePassword = async function (userPassword: string) {
  const isMatch = await bcrypt.compare(userPassword, this.password);
  return isMatch;
};

const UserModel = model<IuserDocument>("User", userSchema);

export default UserModel;
