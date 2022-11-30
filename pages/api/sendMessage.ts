import { getXataClient } from '@src/xata'
const xata = getXataClient();
export default async function handler(req, res) {
  const { email, message, name, company } = req.body
  const record = await xata.db.messages.create({
    name,
    company,
    email,
    message
  });
  res.status(200).json(record)
}