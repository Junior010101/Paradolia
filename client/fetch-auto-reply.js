const sendMessageRequest = (id) =>
  fetch(`${CONFIG.API_BASE_URL}/reply/auto/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Erro:", error);
      throw error;
    });
