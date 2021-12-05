import type { NextApiRequest, NextApiResponse } from "next";
import type { User } from "../../../types/models";
import dbConnect from "../../../utils/dbConnect";
import UserModel from "../../../models/User";

type Data = {
  success: boolean;
  data?: User;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const {
    method,
    query: { _id },
  } = req;

  if (method === "GET") {
    await dbConnect();

    try {
      if (typeof _id !== "string") throw new Error("Invalid _id");
      const user = await UserModel.findById(_id);
      if (!user) throw new Error("User not found");
      res.status(200).json({ success: true, data: user?.toObject() });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else res.status(400).json({ success: false });
}
