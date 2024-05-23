import { connection } from '../../../memoryDB/connection'
import { User } from '../../../models/User'

export const mutationTest = async (_parent, args, _context, _info) => {
  return args.test
}
