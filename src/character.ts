import { Character, Clients, defaultCharacter, ModelProviderName } from "@elizaos/core";
import PingPal from "../characters/pingpal.character.json";

export const character: Character = {
    ...defaultCharacter,
    name: PingPal.name,
    plugins: [],
    clients: [],
    modelProvider: ModelProviderName.OPENAI,
    settings: {
        secrets: {},
        voice: {
            model: "en_US-hfc_female-medium",
        },
    },
    system: PingPal.system,
    bio: PingPal.bio,
    lore: PingPal.lore,
    messageExamples: PingPal.messageExamples,
    adjectives: PingPal.adjectives,
    topics: PingPal.topics,
    style: PingPal.style,
};
