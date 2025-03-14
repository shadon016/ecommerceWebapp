const getAllProducts = async () => {
  try {
    const response = await fetch(process.env.PRODUCT_URL);
    if (!response.ok) {
      console.log("fetch failed");
    }
    return response.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

export { getAllProducts };
