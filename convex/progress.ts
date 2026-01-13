import { queryGeneric, mutationGeneric } from "convex/server";
import { v } from "convex/values";

export const getProgress = queryGeneric({
  args: {},
  handler: async (ctx) => {
    const progress = await ctx.db.query("userProgress").collect();
    return Object.fromEntries(progress.map((p) => [p.showId, p.watched]));
  },
});

export const toggleShow = mutationGeneric({
  args: { showId: v.string(), watched: v.boolean() },
  handler: async (ctx, { showId, watched }) => {
    const existing = await ctx.db
      .query("userProgress")
      .withIndex("by_show", (q) => q.eq("showId", showId))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { watched, watchedAt: Date.now() });
    } else {
      await ctx.db.insert("userProgress", {
        showId,
        watched,
        watchedAt: Date.now(),
      });
    }
  },
});

export const setShows = mutationGeneric({
  args: {
    shows: v.array(
      v.object({
        id: v.string(),
        title: v.string(),
        era: v.string(),
        franchise: v.string(),
        order: v.number(),
      }),
    ),
  },
  handler: async (ctx, { shows }) => {
    for (const show of shows) {
      await ctx.db.insert("shows", show);
    }
  },
});
