// In src/character.ts (or wherever you define the final character object)
import {
  Character,
  Clients,
  defaultCharacter,
  ModelProviderName,
} from "@elizaos/core";

import PingPal from "../characters/pingpal.character.json" with { type: "json" };

export const character: Character = {
  ...defaultCharacter,
  name: PingPal.name,
  clients: [Clients.TELEGRAM],
  modelProvider: ModelProviderName.OPENAI,
  settings: {
    ...PingPal.settings, // Include all settings from JSON
    secrets: { // Merge secrets correctly
      ...PingPal.settings?.secrets,
      key: process.env.TELEGRAM_API_KEY, // Your Telegram API Key
      // Add OpenAI Key if not already configured elsewhere
      OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    },
  },
  system: PingPal.system,
  bio: PingPal.bio,
  lore: PingPal.lore,
  messageExamples: PingPal.messageExamples,
  postExamples: PingPal.postExamples,
  adjectives: PingPal.adjectives,
  topics: PingPal.topics,
  style: PingPal.style,
  // allowDirectMessages: PingPal.allowDirectMessages,
  // shouldOnlyJoinInAllowedGroups: PingPal.shouldOnlyJoinInAllowedGroups,
  // You might not need to explicitly map all these if using defaultCharacter and merging settings
  // allowedGroupIds: PingPal.allowedGroupIds,
  // messageTrackingLimit: PingPal.messageTrackingLimit,
  // templates: PingPal.templates,
};