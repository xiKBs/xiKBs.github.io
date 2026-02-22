import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { getArticleBySlug, articles } from "@/data/articles";
import ArticleCard from "@/components/ArticleCard";

const ArticlePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = getArticleBySlug(slug || "");

  if (!article) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Return to Home</Link>
        </div>
      </Layout>
    );
  }

  const related = articles.filter((a) => a.category === article.category && a.slug !== article.slug).slice(0, 3);

  // Convert markdown-like content to paragraphs
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return <h2 key={i} className="font-display text-xl font-bold text-foreground mt-8 mb-3">{block.replace("## ", "")}</h2>;
      }
      return <p key={i} className="text-foreground/85 leading-relaxed mb-4">{block}</p>;
    });
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-3xl">
        <div className="mb-6">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Home</Link>
        </div>

        <span className="text-xs font-semibold uppercase tracking-wider text-primary">{article.category}</span>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 leading-tight">{article.title}</h1>

        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span className="font-medium">{article.author}</span>
          <span>·</span>
          <span>{article.date}</span>
        </div>

        <div className="aspect-[16/9] rounded-lg overflow-hidden mb-8">
          <img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose-custom">
          {renderContent(article.content)}
        </div>
      </article>

      {related.length > 0 && (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-border">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((a) => (
              <ArticleCard key={a.slug} {...a} />
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
};

export default ArticlePage;
