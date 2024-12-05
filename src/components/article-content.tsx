import { Card } from "@/components/ui/card";
interface ArticleContentProps {
  post: Article;
}
interface ArticleData {
  pubDate: string;
}

interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  data: ArticleData;
}

export function ArticleContent({ post }: ArticleContentProps) {
  return (
    <article className="container py-12 space-y-8">
      <Card className="w-full aspect-[21/9] bg-gray-200" />

      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-[#004282]">{post.title}</h1>

        <div className="flex items-center gap-2 text-gray-600">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.data.pubDate}</span>
        </div>

        <div className="prose max-w-none">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
