import axios from "axios";
import { SneakersItem } from "../redux/features/sneakers/sneakersSlice";

export const API = {
  async fetchItems() {
    const { data } = await axios.get(
      `https://61752ca008834f0017c70b34.mockapi.io/sneakers`
    );
    return data;
  },

  async addCartItem(item: SneakersItem) {
    const { data } = await axios.put(
      `https://61752ca008834f0017c70b34.mockapi.io/sneakers/${item.id}`,
      { ...item, added2Cart: true }
    );
    return data;
  },

  async deleteCartItem(item: SneakersItem) {
    const { data } = await axios.put(
      `https://61752ca008834f0017c70b34.mockapi.io/sneakers/${item.id}`,
      { ...item, added2Cart: false }
    );
    return data;
  },

  async addFavoriteItem(item: SneakersItem) {
    const { data } = await axios.put(
      `https://61752ca008834f0017c70b34.mockapi.io/sneakers/${item.id}`,
      { ...item, added2Favorites: true }
    );
    return data;
  },

  async deleteFavoriteItem(item: SneakersItem) {
    const { data } = await axios.put(
      `https://61752ca008834f0017c70b34.mockapi.io/sneakers/${item.id}`,
      { ...item, added2Favorites: false }
    );
    return data;
  },
};
