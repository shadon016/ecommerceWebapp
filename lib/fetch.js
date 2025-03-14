const getAllProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      console.log("fetch failed");
    }
    return response.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

export { getAllProducts };
