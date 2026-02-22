import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 max-w-3xl">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">About The Daily Muse</h1>

        <div className="space-y-5 text-foreground/85 leading-relaxed">
          <p>
            The Daily Muse is an independent online publication dedicated to thoughtful, original content about lifestyle, technology, and wellness. Founded in 2024, we believe that quality writing can inspire meaningful change in how people live, work, and care for themselves.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground pt-4">Our Mission</h2>
          <p>
            We exist to provide well-researched, practical, and engaging articles that help our readers make informed decisions about their daily lives. In a world overflowing with clickbait and superficial content, we strive to offer depth, nuance, and genuine value.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground pt-4">Our Team</h2>
          <p>
            Our team consists of experienced writers, researchers, and subject matter experts passionate about their respective fields. Each article undergoes a thorough editorial process to ensure accuracy, clarity, and relevance.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground pt-4">Editorial Standards</h2>
          <p>
            We are committed to journalistic integrity. All claims in our articles are fact-checked and supported by credible sources. We clearly distinguish between opinion pieces and informational content. When we reference studies or statistics, we link to the original sources whenever possible.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground pt-4">Contact Us</h2>
          <p>
            We welcome feedback, story ideas, and collaboration inquiries. Please visit our <a href="/contact" className="text-primary hover:underline">contact page</a> to get in touch with our team.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
