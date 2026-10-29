let count = Number(localStorage.getItem("counter")) || 1;

const spawnPatternAndMessage = async () => {
  let data = await sendMessageRequest(count);
  let object = await getVectorByRequest();

  spawnPattern(object.vector);
  localStorage.setItem("vectorPath", object.vector);

  if (data.erro) {
    alert(
      "Nenhuma inspiração encontrada no momento. O banco de dados está vazio!",
    );
    return;
  }

  receiveNewItem(data);

  const lastId = data.l_id;

  if (lastId && count >= lastId) {
    count = 1;
  } else {
    count++;
  }

  localStorage.setItem("counter", count);
};
