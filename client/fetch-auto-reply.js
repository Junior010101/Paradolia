const send_message_request = (id) =>
  fetch(`${CONFIG.API_BASE_URL}/reply/auto/${id}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Erro:", error));
