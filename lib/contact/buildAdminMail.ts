import { contactLabels } from "./contactLabels";


export function buildAdminMail(
  body: Record<string, unknown>
) {

  const {
    name = "",
    email = "",
    category = "お問い合わせ",
    ...rest
  } = body;



  const detailText = Object.entries(rest)

    .filter(([, value]) => value !== "")

    .map(
      ([key, value]) => {


        // 演奏会申込の場合
        if (
          key === "concert" &&
          typeof value === "object" &&
          value !== null
        ) {

          const concert =
            value as {
              title?: string;
              date?: string;
              time?: string;
              venue?: string;
              price?: string;
            };


          return `
演奏会名：
${concert.title ?? ""}

日時：
${concert.date ?? ""}
${concert.time ?? ""}

会場：
${concert.venue ?? ""}

料金：
${concert.price ?? ""}
          `.trim();

        }



        return `${contactLabels[key] ?? key}：

${value}`;

      }

    )

    .join("\n\n");



  return {

    subject:
      `【ホームページ】${category}`,



    text:
`ホームページより新しいお問い合わせが届きました。

━━━━━━━━━━━━━━━━━━

お名前：
${name}

メールアドレス：
${email}

お問い合わせ種類：
${category}

${detailText}

━━━━━━━━━━━━━━━━━━`

  };

}