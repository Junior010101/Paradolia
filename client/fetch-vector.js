const getVectorByRequest = () =>
  fetch(`${CONFIG.API_BASE_URL}/vector`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Erro:", error);
      throw error;
    });
