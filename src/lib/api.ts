const API_BASE = 'https://dummyjson.com';

// API endpoints
export const API_ENDPOINTS = {
  // Products
  PRODUCTS: `${API_BASE}/products`,
  PRODUCT_BY_ID: (id: number) => `${API_BASE}/products/${id}`,
  SEARCH_PRODUCTS: (query: string) => `${API_BASE}/products/search?q=${query}`,
  PRODUCT_CATEGORIES: `${API_BASE}/products/categories`,
  
  // Users (Customers)
  USERS: `${API_BASE}/users`,
  USER_BY_ID: (id: number) => `${API_BASE}/users/${id}`,
  
  // Carts (Orders)
  CARTS: `${API_BASE}/carts`,
  CART_BY_ID: (id: number) => `${API_BASE}/carts/${id}`,
};

// API functions
export const fetchProducts = async () => {
  const response = await fetch(API_ENDPOINTS.PRODUCTS);
  return response.json();
};

export const fetchCustomers = async () => {
  const response = await fetch(API_ENDPOINTS.USERS);
  return response.json();
};

export const fetchOrders = async () => {
  const response = await fetch(API_ENDPOINTS.CARTS);
  return response.json();
};