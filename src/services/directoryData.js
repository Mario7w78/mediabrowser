const API_URL = 'http://localhost:3000/';

export const getDirectories = async () => {
  try {

    const response = await fetch(`${API_URL}directories`)
    return await response.json();

  } catch (e) {

    console.error("Error en mostrar directories:", e);
    throw e;

  }
}

export const getPages = async () => {
  try {

    const response = await fetch(`${API_URL}pages`)
    return await response.json();

  } catch (e) {

    console.error("Error en mostrar pages:", e);
    throw e;

  }
}

export const addDirectory = async (directory) => {
  try {

    const response = await fetch(`${API_URL}directories`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(directory)
    });
    return await response.json();

  } catch (e) {
    console.error("Error en agregar directory:", e);
    throw e;
  }
}

export const addPage = async (page) => {
  try {

    const response = await fetch(`${API_URL}pages`, {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(page)
    });
    return await response.json();

  } catch (e) {

    console.error("Error en agregar page:", e);
    throw e;

  }
}