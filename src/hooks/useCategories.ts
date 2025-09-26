'use client';
import { useState } from 'react';
import { Category } from '../types/category';

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([
    { id: 1, name: 'Electronics', description: 'Smart devices and gadgets' },
    { id: 2, name: 'Fashion', description: 'Clothes, shoes, and accessories' },
    { id: 3, name: 'Home', description: 'Furniture and home appliances' },
  ]);

  const addCategory = (category: Omit<Category, 'id'>) => {
    setCategories([
      ...categories,
      { id: categories.length + 1, ...category },
    ]);
  };

  const updateCategory = (id: number, updated: Omit<Category, 'id'>) => {
    setCategories(categories.map(cat =>
      cat.id === id ? { ...cat, ...updated } : cat
    ));
  };

  const deleteCategory = (id: number) => {
    setCategories(categories.filter((cat) => cat.id !== id));
  };

  return { categories, addCategory, updateCategory, deleteCategory };
}
