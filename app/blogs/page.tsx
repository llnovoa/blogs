import Link from "next/link"
import { getBlogs } from "../services/blogs"

const Blogs = async ({
  searchParams,
}: {
  searchParams: Promise<{ title?: string }>
}) => {
  const { title } = await searchParams
  const allBlogs = getBlogs()

  const blogs = title && title.trim() !== ""
    ? allBlogs.filter(blog =>
        blog.title.toLowerCase().includes(title.toLowerCase())
      )
    : allBlogs

  return (
    <div>
      <h2>Blogs</h2>
        <div>
        <form method="GET">
        <input
          name="title"
          defaultValue={title || ""}
          placeholder="Buscar por título..."
        />
        <button type="submit">Buscar</button>
      </form>
      </div>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            {blog.autor} {blog.url} {blog.likes}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Blogs