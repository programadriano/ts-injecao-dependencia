import * as mongoose from "mongoose";
import { NewsSchema } from "../models/newsSchema";

export const NewsRepository = mongoose.model("news", NewsSchema);