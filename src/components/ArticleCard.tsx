import { Link } from "react-router-dom";

interface ArticleCardProps {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  imageUrl: string;
  featured?: boolean;
}

const ArticleCard = ({ slug, title, excerpt, category, date, author, imageUrl, featured }: ArticleCardProps) => {
  if (featured) {
    return (
      <Link to={`/article/${slug}`} className="group block animate-fade-in">
        <article className="grid md:grid-cols-2 gap-6 bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow">
          <div className="aspect-[16/10] overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          </div>
          <div className="p-6 flex flex-col justify-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{category}</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
              {title}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{excerpt}</p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="font-medium">{author}</span>
              <span>·</span>
              <span>{date}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link to={`/article/${slug}`} className="group block animate-fade-in">
      <article className="bg-card rounded-lg overflow-hidden border border-border hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="aspect-[16/10] overflow-hidden">
          <img src={imageUrl} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-5 flex flex-col flex-1">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">{category}</span>
          <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors leading-snug">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2 flex-1">{excerpt}</p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="font-medium">{author}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ArticleCard;
