import { Button } from "@/components/ui/button";

export const MainHero = () => {
  return (
    <div className="container mx-auto py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Здоровый образ <span className="text-fitness">жизни</span> доступен каждому
          </h1>
          <p className="text-lg text-gray-600 max-w-md">
            Узнайте всё о правильных тренировках, сбалансированном питании и вредных привычках на нашем информационном портале.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-fitness hover:bg-fitness-dark">
              Начать путь к здоровью
            </Button>
            <Button size="lg" variant="outline" className="border-fitness text-fitness hover:bg-fitness-light">
              Узнать больше
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -z-10 w-full h-full rounded-full bg-fitness/10 blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
          <img 
            src="/placeholder.svg" 
            alt="Здоровый образ жизни" 
            className="w-full h-auto object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};
