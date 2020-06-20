const postRequest = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: new Headers({
      "Content-type": "application/json",
    }),
    body: JSON.stringify(data), // body data type must match "Content-Type" header
    credentials: "include",
  })
    .then(res => res.json())
    .then(json => json)
    .catch(err => {
      return { success: false }
    })

  return res
}

export default postRequest
