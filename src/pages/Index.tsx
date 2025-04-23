import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";
import { MainHero } from "@/components/MainHero";
import { SportSection } from "@/components/SportSection";
import { NutritionSection } from "@/components/NutritionSection";
import { DisposableVapesSection } from "@/components/DisposableVapesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F6F6F7] to-[#F1F0FB]">
      {/* Шапка с навигацией */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-xl text-fitness">ЗдоровьеПлюс</span>
          </div>
          
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#sport" className="px-4 py-2 text-sm font-medium hover:text-fitness transition-colors">
                  Спорт
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#nutrition" className="px-4 py-2 text-sm font-medium hover:text-nutrition transition-colors">
                  Питание
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#disposable-vapes" className="px-4 py-2 text-sm font-medium hover:text-destructive transition-colors">
                  Вред одноразок
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <div>
            <Button asChild className="bg-fitness hover:bg-fitness-dark">
              <a href="#contact">Связаться с нами</a>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Главный баннер */}
        <MainHero />
        
        {/* Секция о спорте */}
        <SportSection />
        
        {/* Секция о питании */}
        <NutritionSection />
        
        {/* Секция о вреде одноразок */}
        <DisposableVapesSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
