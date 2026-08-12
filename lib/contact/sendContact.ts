export async function sendContact(data: unknown) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("お問い合わせの送信に失敗しました。");
  }

  return response.json();
}