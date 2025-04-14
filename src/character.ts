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
    secrets: {
      key: process.env.TELEGRAM_API_KEY,
    },
    model: "gpt-4o-mini",
    voice: {
      model: "en_US-hfc_female-medium",
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
  // allowedGroupIds: PingPal.allowedGroupIds,
  // messageTrackingLimit: PingPal.messageTrackingLimit,
  // templates: PingPal.templates,
  // secrets: PingPal.secrets,
};
