import { contactLabels } from "./contactLabels";

export function buildAutoReply(body: Record<string, unknown>) {
  const {
    name = "",
    category = "お問い合わせ",
    ...rest
  } = body;

  const detailText = Object.entries(rest)
    .filter(
      ([key, value]) =>
        key !== "email" && value !== ""
    )
    .map(
      ([key, value]) =>
        `${contactLabels[key] ?? key}：

${value}`
    )
    .join("\n\n");

  return {
    subject:
      "【雪入美優】お問い合わせありがとうございます",

    text: `${name} 様

この度は雪入美優ホームページより
お問い合わせいただき、
誠にありがとうございます。

以下の内容で受け付けいたしました。

━━━━━━━━━━━━━━━━━━

お問い合わせ種類：
${category}

${detailText}

━━━━━━━━━━━━━━━━━━

内容を確認の上、ご返信いたします。

どうぞよろしくお願いいたします。

━━━━━━━━━━━━━━━━━━

雪入 美優

※このメールは自動送信です。

━━━━━━━━━━━━━━━━━━`,
  };
}