import { GraphQLResolveInfo } from 'graphql'
import { mutationTest } from './mutationTest'

export default {
  mutationTest: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) => mutationTest(parent, args, context, info),
}
