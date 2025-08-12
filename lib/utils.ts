import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import z from "zod"

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function formatError (error: any) {
  if(error.name === 'ZodError') {
    const parsedError = JSON.parse(error)
    const fieldErrors = Object.keys(parsedError).map(field => parsedError[field].message)
    return fieldErrors.join('. ')

  }else if (error.name === 'PrismaClientKnownRequestError' && error.code === 'P2002') {
    const field = error.meta?.target ? error.meta.target[0]: 'Field'
    return `${field.charAt(0).toUpperCase() + field.slice(1)} already exist`
  } else {
    return typeof(error.message) === 'string' ? error.message : JSON.stringify(error.message)
  }
}