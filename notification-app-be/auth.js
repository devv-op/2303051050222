const BASE_URL = "http://4.224.186.213/evaluation-service";

let token = null;

export async function authenticate() {
  const res = await fetch(`${BASE_URL}/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: "ramkrishna@abc.edu",
      name: "Ram Krishna",
      rollNo: "aa1bb",
      accessCode: "xgAsNC",
      clientID: "your-client-id",
      clientSecret: "your-client-secret",
    }),
  });

  if (!res.ok) {
    throw new Error("Authentication failed");
  }

  const data = await res.json();
  token = data.access_token;
  return token;
}

export function getToken() {
  return token;
}