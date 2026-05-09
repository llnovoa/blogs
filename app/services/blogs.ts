import { title } from "process";

const blogs = [
  { id: 1, title: "Blog # 1", autor: "Leodan", url: "/url1", likes: 5},
  { id: 2, title: "Blog # 2", autor: "Luis", url: "/url2", likes: 15},
  { id: 3, title: "Blog # 3", autor: "Day", url: "/url3", likes: 50},
]
let nextId = 4

export const getBlogs = () => {
  return [...blogs].sort((a, b) => b.likes - a.likes);
}

export const addBlogs = (title: string, autor: string, url: string,) => {
  blogs.push({ id: nextId++, title, autor, url, likes: 0 })
}

export const getBlogById = (id: number) => {
  return blogs.find((blog) => blog.id === id)
}

export const increaseLikes  = (id: number) => {
  const blog = blogs.find((blog) => blog.id === id)
  if (blog) {
    blog.likes++
  }
}



