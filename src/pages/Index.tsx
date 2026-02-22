import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { articles } from "@/data/articles";

const Index = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <Layout>
      {/* SEO */}
      <title>The Daily Muse — Lifestyle, Technology & Wellness</title>
      <meta name="description" content="Original articles on lifestyle, technology, and wellness. Discover practical tips and thoughtful insights for modern living." />

      {/* Hero / Featured */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        <ArticleCard {...featured} featured />
      </section>

      {/* Latest Articles */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article) => (
            <ArticleCard key={article.slug} {...article} />
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-card border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Stay Inspired</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-6">
            Get our latest articles delivered to your inbox. No spam, just thoughtful content.
          </p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2.5 rounded-md border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
              required
            />
            <button
              type="submit"
              className="px-6 py-2.5 rounded-md bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
