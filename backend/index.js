const { WebClient } = require("@slack/web-api");
const token = process.env.SLACK_API_TOKEN;
const CHANNEL = "free-space";
const web = new WebClient(token);

// slackにメッセージを投稿
exports.postMessage = async () => {
  const result = await web.chat.postMessage({
    text: "slack post message test",
    channel: CHANNEL,
  });

  console.log(`Successfully send message ${result.ts}`);
};
