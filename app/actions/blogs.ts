"use server"

import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
import { addBlogs, increaseLikes } from "../services/blogs"

export const createBlog = async (formData: FormData) => {
  const title = formData.get("title") as string
  const autor = formData.get("autor") as string
  const url = formData.get("url") as string
  addBlogs(title, autor, url)
  revalidatePath("/blogs")
  redirect("/blogs")
}

export const increaseBlogLikes = async (formData: FormData) => {
  const id = Number(formData.get("id"))
  increaseLikes(id)
  revalidatePath(`/blogs/${id}`)
  revalidatePath("/blogs")
}
