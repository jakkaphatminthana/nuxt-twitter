import { userTransform } from '~/server/transforms/user.transform';

export default defineEventHandler(async (event) => {
  return {
    data: userTransform(event.context.auth?.user),
  };
});
