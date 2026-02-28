import { readFileSync } from 'fs'
import { join } from 'path'

export interface Article {
  title: string
  desc: string
  category: string
  views: number
  date: string
}

export function getArticles(): Article[] {
  try {
    const filePath = join(process.cwd(), 'data', 'ai-articles.json')
    const fileContent = readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    return []
  }
}

export interface Tool {
  name: string
  category: string
  description: string
  price: string
  rating: number
  tags: string[]
}

export function getTools(): Tool[] {
  try {
    const filePath = join(process.cwd(), 'data', 'ai-tools.json')
    const fileContent = readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    return []
  }
}

export interface Product {
  name: string
  description: string
  price: number
  sales: number
  rating: number
  category: string
}

export function getProducts(): Product[] {
  try {
    const filePath = join(process.cwd(), 'data', 'claw-products.json')
    const fileContent = readFileSync(filePath, 'utf-8')
    return JSON.parse(fileContent)
  } catch (error) {
    return []
  }
}