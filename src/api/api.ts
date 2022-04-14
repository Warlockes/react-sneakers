import axios from "axios";

export const API = {
  async fetchSneakers() {
    const { data } = await axios.get(
      "https://61752ca008834f0017c70b34.mockapi.io/sneakers"
    );
    return data;
  },

  async fetchCartItems() {
    const { data } = await axios.get(
      "https://61752ca008834f0017c70b34.mockapi.io/cart"
    );
    return data;
  },

  async fetchOrdersItems() {
    const { data } = await axios.get(
      "https://61752ca008834f0017c70b34.mockapi.io/orders"
    );
    return data;
  },

  async fetchFavoritesItems() {
    const { data } = await axios.get(
      "https://61752ca008834f0017c70b34.mockapi.io/favorites"
    );
    return data;
  },
};
