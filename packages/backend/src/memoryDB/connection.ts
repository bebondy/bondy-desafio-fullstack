import mongoose from 'mongoose'
import { User } from '../models/User'
import bcrypt from 'bcrypt'

export const connection = async () => {
  const connState = mongoose.connection.readyState
  if (connState.valueOf() !== 1) {
    await mongoose.connect(
      'mongodb+srv://test:99mM35scnc@test.5wrvlov.mongodb.net/',
      { dbName: 'test' }
    )
    const userPassword = await bcrypt.hash('123456', 8)
    await User.findOneAndUpdate(
      { email: userMock.email },
      { ...userMock, password: userPassword },
      { upsert: true }
    )
  }
}

const userMock = {
  name: 'Usuário teste',
  email: 'desafio@bondy.com.br',
  company: 'Desafio Bondy',
}
