import { API_URL } from "@/constants";

export async function fetchServices() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Failed to fetch services');
    return res.json();
  }