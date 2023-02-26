const postData = async (url, data) => {
  let resolve = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: data,
  });
  if (!resolve.ok) {
    throw new Error();
  }
  return await resolve.json();
};

async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }
  return await res.json();
}

export { postData, getResource };
