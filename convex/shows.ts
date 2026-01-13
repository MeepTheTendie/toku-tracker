import { queryGeneric } from "convex/server";

export const getAllShows = queryGeneric({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("shows").collect();
  },
});
