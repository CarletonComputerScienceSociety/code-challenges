import axios from "axios";

export enum DiscordMessageType {
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  INFO = "INFO",
}

interface DiscordMessage {
  type: DiscordMessageType;
  data: any;
}

const TYPE_TO_EMOJI = {
  [DiscordMessageType.SUCCESS]: "✅",
  [DiscordMessageType.ERROR]: "🚨",
  [DiscordMessageType.INFO]: "ℹ️",
};

export const sendAlert = async (message: DiscordMessage) => {
  const alertWebhook =
    "https://discord.com/api/webhooks/1278553786675363984/4eWeYdvqlxJJjV7s5Y3VQpWh_EZkeIBpgBw20Ov3y1OgBGRKJkXFpTEvJUpJ0Xcw-QPw";
  const emoji = TYPE_TO_EMOJI[message.type];
  try {
    const jsonFormatted = JSON.stringify(message, null, 2);
    const discordFormatted = "```json\n" + jsonFormatted + "\n```";
    await axios.post(alertWebhook, {
      content: `${emoji} **Code Challenge Alert: ${message.type === DiscordMessageType.ERROR ? "<@147881865548791808>" : ""}** ${discordFormatted}`,
    });
  } catch (error) {
    console.error("Failed to send Discord message", error);
  }
};
