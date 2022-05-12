import type { NextApiRequest, NextApiResponse } from 'next'
import { connectdb, disconnectdb } from '../../db'

const users = require('../../models/users.mongo')

type Data = {
  error: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const email = req.body.email
    const password = req.body.password
    console.log('api ' + email)
    console.log(password)
    if (email && password) {
      if (validateForm(email, password)) {
        if (await registerUser(email, password)) {
          return res.status(200).json({ error: 'no' })
        } else {
          return res.status(400).json({ error: 'Error registering user' })
        }
      } else {
        return res
          .status(400)
          .json({ error: 'Error registering user form invalid' })
      }
    }
    return res
      .status(400)
      .json({ error: 'Error registering user undefined fields' })
  } else {
    return res
      .status(400)
      .json({ error: 'Error g' })
  }
}

function validateForm(email: string, password: string) {
  if (email.length > 0 && password.length > 0) {
    return true
  }
}

async function registerUser(email: string, password: string) {
  await connectdb()
  const user = await users.findOne({ email: email }).exec()
  if (await !user) {
    await users.create({
      email: email,
      password: password,
    })
    await disconnectdb()
    return true;
  }
  await disconnectdb()
}
