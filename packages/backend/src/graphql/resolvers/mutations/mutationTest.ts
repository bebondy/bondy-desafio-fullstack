import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'

export const mutationTest = async (_parent, args, _context, _info) => {
  await connection()
  const teste = await User.find()
  console.log(teste)
  // await conn.stop()
  return args.test
}
