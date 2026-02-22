import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import ArticleCard from "@/components/ArticleCard";
import { getArticlesByCategory } from "@/data/articles";

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : "";
  const categoryArticles = getArticlesByCategory(categoryName);

  return (
    <Layout>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-2">
          <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">← Back to Home</Link>
        </div>
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{categoryName}</h1>
        <p className="text-muted-foreground mb-8">
          Browse all articles in the {categoryName.toLowerCase()} category.
        </p>

        {categoryArticles.length === 0 ? (
          <p className="text-muted-foreground">No articles found in this category.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryArticles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        )}
      </section>
    </Layout>
  );
};

export default CategoryPage;
