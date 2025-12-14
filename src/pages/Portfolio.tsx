import { ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { CTASection } from '@/components/sections/CTASection';

const projects = [
  {
    title: 'E-Commerce Platform',
    client: 'Fashion Retailer',
    category: 'Web Development',
    description: 'A modern e-commerce platform with real-time inventory, AI-powered recommendations, and seamless checkout.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: null,
  },
  {
    title: 'Workflow Automation',
    client: 'Financial Services',
    category: 'Automation',
    description: 'Automated document processing and approval workflows, reducing processing time by 80%.',
    technologies: ['Python', 'AWS Lambda', 'OCR', 'PostgreSQL'],
    image: null,
  },
  {
    title: 'Healthcare Dashboard',
    client: 'Medical Startup',
    category: 'Web Application',
    description: 'Patient management dashboard with real-time monitoring, appointment scheduling, and analytics.',
    technologies: ['React', 'TypeScript', 'Firebase', 'Chart.js'],
    image: null,
  },
  {
    title: 'Marketing Analytics',
    client: 'Digital Agency',
    category: 'Data & Analytics',
    description: 'Comprehensive marketing analytics platform integrating data from multiple channels into unified insights.',
    technologies: ['Python', 'React', 'BigQuery', 'Looker'],
    image: null,
  },
  {
    title: 'Cloud Migration',
    client: 'Enterprise SaaS',
    category: 'Cloud & DevOps',
    description: 'Complete infrastructure migration to AWS with zero downtime and 40% cost reduction.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    image: null,
  },
  {
    title: 'Mobile-First Website',
    client: 'Hospitality Brand',
    category: 'Web Design',
    description: 'Award-winning responsive website design with booking integration and multi-language support.',
    technologies: ['Next.js', 'Tailwind CSS', 'Sanity CMS', 'Stripe'],
    image: null,
  },
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection>
                <span className="text-primary text-sm font-semibold tracking-wider uppercase mb-4 block">
                  Our Portfolio
                </span>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h1 className="heading-xl mb-6">
                  Projects That Speak{' '}
                  <span className="text-gold-gradient">For Themselves</span>
                </h1>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <p className="body-lg">
                  Explore a selection of our work across industries. Each project 
                  represents our commitment to quality and client success.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-20">
          <div className="container-custom">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <StaggerItem key={project.title}>
                  <article className="group h-full bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
                    {/* Image placeholder */}
                    <div className="aspect-video bg-secondary relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <ExternalLink className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium text-foreground">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="text-sm text-muted-foreground mb-2">{project.client}</div>
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span 
                            key={tech}
                            className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-secondary rounded text-xs text-muted-foreground">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
