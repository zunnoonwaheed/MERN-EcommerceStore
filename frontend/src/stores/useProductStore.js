import { create } from "zustand";
import toast from "react-hot-toast";
import axios from "axios";
import axiosInstance from "../lib/axios";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,

  setProducts: (products) => set({ products }), 

  createProduct: async (productData) => {
    set({ loading: true });
    try {
      const res = await axiosInstance.post(
        "/products",
        productData,
        { withCredentials: true } // Added withCredentials
      );
      set((prevState) => ({
        products: [...prevState.products, res.data],
        loading: false,
      }));
    } catch (error) {
      toast.error(error.response.data.error);
      set({ loading: false });
    }
  },

  fetchAllProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(
        "http://localhost:8000/api/products/featured",
        { withCredentials: true } // Added withCredentials
      );
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },

  fetchProductsByCategory: async (category) => {
    set({ loading: true });
    try {
      const response = await axios.get(
        `http://localhost:8000/api/products/category/${category}`,
        { withCredentials: true } // Added withCredentials
      );
      set({ products: response.data.products, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      toast.error(error.response.data.error || "Failed to fetch products");
    }
  },

  deleteProduct: async (productId) => {
    set({ loading: true });
    try {
      await axios.delete(
        `/products/${productId}`,
        { withCredentials: true } // Added withCredentials
      );
      set((prevProducts) => ({
        products: prevProducts.products.filter((product) => product._id !== productId),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to delete product");
    }
  },

  toggleFeaturedProduct: async (productId) => {
    set({ loading: true });
    try {
      const response = await axios.patch(
        `http://localhost:8000/api/products/${productId}`,
        {},
        { withCredentials: true } // Added withCredentials
      );
      set((prevProducts) => ({
        products: prevProducts.products.map((product) =>
          product._id === productId ? { ...product, isFeatured: response.data.isFeatured } : product
        ),
        loading: false,
      }));
    } catch (error) {
      set({ loading: false });
      toast.error(error.response.data.error || "Failed to update product");
    }
  },

  fetchFeaturedProducts: async () => {
    set({ loading: true });
    try {
      const response = await axios.get(
        "http://localhost:8000/api/products/featured",
        { withCredentials: true } // Added withCredentials
      );
      set({ products: response.data, loading: false });
    } catch (error) {
      set({ error: "Failed to fetch products", loading: false });
      console.log("Error fetching featured products:", error);
    }
  },
}));
