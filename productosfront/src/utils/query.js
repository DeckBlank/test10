export const query = async (query, method, json) => {
  let options = {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...json })
  };
  switch (method.toLowerCase()) {
    case "get":
      delete options.headers;
      delete options.body;
      break;
    case "delete":
      delete options.headers;
      delete options.body;
      break;
  }
  if (method.toLowerCase() === "get") {
    delete options.headers;
    delete options.body;
  }
  try {
    let resp = await fetch(query, options);
    return resp.json();
  } catch (error) {
    return false;
  }
};
