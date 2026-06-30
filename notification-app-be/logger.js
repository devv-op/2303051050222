const LOG_URL = "http://4.224.186.213/evaluation-service/logs";

export async function Log(stack, level, pkg, message) {
  try {
    await fetch(LOG_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stack,
        level,
        package: pkg,
        message,
      }),
    });
  } catch (err) {
    console.log("logging failed", err);
  }
}