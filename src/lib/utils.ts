import type { ClassValue } from "clsx"
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Prefix a public/ asset path with the configured base URL (needed for GitHub Pages subpath deploys). */
export function asset(path: string) {
  return import.meta.env.BASE_URL + path.replace(/^\//, "")
}
