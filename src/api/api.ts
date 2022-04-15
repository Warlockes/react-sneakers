import axios from "axios";

export const API = {
  async fetchItems() {
    const { data } = await axios.get(
      `https://61752ca008834f0017c70b34.mockapi.io/sneakers`
    );
    return data;
  },

  // async deleteCartItem(id: string) {
  //   const { data } = await axios.delete(
  //     `https://61752ca008834f0017c70b34.mockapi.io/cart/${id}`
  //   );
  //   return data;
  // },

  // async addCartItem(item: SneakersItem) {
  //   const { data } = await axios.post(
  //     "https://61752ca008834f0017c70b34.mockapi.io/cart",
  //     item
  //   );
  //   return data;
  // },
};
