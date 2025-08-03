import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//convert a prisma object into a regular plain js object
export function convertToPlainObject<T>(value: T):T {
  return JSON.parse(JSON.stringify(value))
}

// format number with decimal places

export function formatNumWithDecimal( value: string): string {
  const [int, decimal] = value.split('.')
  return decimal ? `${int}.${decimal.padEnd(2, '0')}` : `${int}.00`
}