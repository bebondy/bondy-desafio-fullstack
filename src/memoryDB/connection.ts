import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'
import { User } from '../models/User'
import bcrypt from 'bcrypt'

export const connection = async () => {
  const mongoServer = await MongoMemoryServer.create()
  const connState = mongoose.connection.readyState
  if (connState.valueOf() !== 1) {
    await mongoose.connect(mongoServer.getUri(), { dbName: 'master' })
    const userPassword = await bcrypt.hash('123456', 8)
    await User.create({ ...userMock, userPassword })
  }
}

const userMock = {
  name: 'Usuário teste',
  email: 'desafio@bondy.com.br',
  company: 'Desafio Bondy',
}
