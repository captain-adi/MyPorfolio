import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

function Blog() {
  const blogPosts = [
    {
      title: "How React Works Under the Hood",
      date: "Aug 3, 2025",
      description:
        "An in-depth look at how React operates internally, including DOM its virtual DOM and reconciliation process , React Fiber , Diffing Algorithms .",
      link: "https://medium.com/@captain-adi/how-react-works-under-the-hood-683ce807d1df",
    },
    {
      title: "Setup react-router-dom",
      date: "Aug 26, 2024",
      description: "A guide on how to set up react-router-dom in your React application in an efficient way for your large-scale applications.",
      link: "https://medium.com/@captain-adi/️setup-react-router-7e240c5b1264",
    },
    {
        title : "Send Form Data from Frontend to Backend",
        date: "Mar 11, 2025",
        description:
          "Learn how to send form data from your React frontend to a backend server in MERN stack.",
        link: "https://medium.com/@captain-adi/how-to-send-data-from-frontend-to-backend-using-a-form-39413f165e46",
    }
  ];
  return (
    <div className="py-3 md:h-[80vh]">
      <h1 className="text-5xl font-bold mb-20">My Blogs</h1>
      <section className="flex flex-col gap-6 ">
        {blogPosts.map((post) => (
          <Card key={post.title}>
            <CardContent>
              <article className="">
                <h2 className="text-2xl font-semibold text-green-400">
                  <Link to={post.link}>{post.title}</Link>
                </h2>
                <time className="block text-sm text-muted-foreground mb-6">
                  {post.date}
                </time>
                <p className="mt-2">{post.description}</p>
              </article>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default Blog;
