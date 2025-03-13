
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="flex min-h-screen w-full items-center justify-center bg-gradient-to-b from-background to-secondary/20 px-4"
    >
      <div className="container max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col items-start space-y-6 text-left animate-fade-in">
            <span className="text-xl font-medium text-primary">{t.hero.greeting}</span>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              {t.hero.title}
            </h1>
            <p className="max-w-md text-xl text-muted-foreground">{t.hero.subtitle}</p>
            <div className="mt-4 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="group transition-all hover:scale-105"
                onClick={() => scrollToSection("#projects")}
              >
                {t.hero.viewProjects}
                <ChevronDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="transition-all hover:scale-105"
                onClick={() => scrollToSection("#contact")}
              >
                {t.hero.contactMe}
              </Button>
            </div>
          </div>
          <div className="relative aspect-square animate-scale-in lg:ml-auto">
            {/* Empty div where the circular background and emoji were */}
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection("#projects")}>
            <ChevronDown className="h-10 w-10 text-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
