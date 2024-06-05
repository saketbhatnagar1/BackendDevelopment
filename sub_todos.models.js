import mongoose from "mongoose";

const subTododSchema = new mongoose.Schema({}, { timestamps: true });

export const subTodo = mongoose.model("SubTodo", subTodoSchema);
