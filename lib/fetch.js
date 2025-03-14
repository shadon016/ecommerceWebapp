const getAllProducts = async (id = "") => {
  try {
    const response = await fetch(`${process.env.PRODUCT_URL}/${id}`);
    if (!response.ok) {
      console.log("fetch failed");
    }
    return response.json();
  } catch (err) {
    throw new Error(err.message);
  }
};

export { getAllProducts };
