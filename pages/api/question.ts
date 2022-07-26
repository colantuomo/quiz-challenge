import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuid, validate } from 'uuid';
import { Answer } from '../interfaces';

type Data = {
  id: string;
  startDate: Date;
  endDate?: Date;
};

let sessionId = '';
let startDate: Date;
let endDate: Date;
let answers: Answer | [] = [];

function post(res: NextApiResponse<Data>) {
  sessionId = uuid();
  startDate = new Date();
  return res
    .status(200)
    .json({ id: sessionId, startDate: new Date(), endDate });
}

function put(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;
  if (!id) return res.status(404).json({});
  if (!validate(id)) res.status(404).json({});
  const body = JSON.parse(req.body);
  answers = body.answers;
  endDate = new Date();
  return res.status(200).json({ id: sessionId, startDate, endDate, answers });
}

function get(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id as string;
  if (!id) return res.status(404).json({});
  if (!validate(id)) res.status(404).json({});
  console.log('answers', answers);
  return res.status(200).json({ id, startDate, endDate, answers });
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    return post(res);
  }
  if (req.method === 'PUT') {
    return put(req, res);
  }
  return get(req, res);
}
