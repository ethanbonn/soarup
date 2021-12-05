import type { NextApiRequest, NextApiResponse } from "next";
import { setAuthCookies } from "next-firebase-auth";
import initAuth from "../../../utils/initAuth";

type Data = {
  success: boolean;
};

initAuth();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    await setAuthCookies(req, res);
  } catch (e) {
    return res.status(500).json({ success: false });
  }
  return res.status(200).json({ success: true });
}
