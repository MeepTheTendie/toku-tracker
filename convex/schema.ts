import { defineSchema, defineTable } from 'convex/server'
import { v } from 'convex/values'

export default defineSchema({
  shows: defineTable({
    id: v.string(),
    title: v.string(),
    era: v.string(),
    franchise: v.string(),
    order: v.number(),
  }).index('by_franchise', ['franchise']),
  userProgress: defineTable({
    showId: v.string(),
    watched: v.boolean(),
    watchedAt: v.number(),
  }).index('by_show', ['showId']),
})
