import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Running, Heart } from "lucide-react";

export const SportSection = () => {
  return (
    <section id="sport" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как правильно заниматься спортом</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Физическая активность — ключ к здоровому телу и разуму. Узнайте основные принципы эффективных тренировок.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-fitness/20 hover:border-fitness transition-colors">
            <CardHeader className="space-y-1">
              <div className="bg-fitness-light p-2 rounded-md w-fit mb-2">
                <Dumbbell className="h-6 w-6 text-fitness" />
              </div>
              <CardTitle>Силовые тренировки</CardTitle>
              <CardDescription>Развивайте мышцы и укрепляйте кости</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Тренируйтесь 2-3 раза в неделю</li>
                <li>Начинайте с малых весов</li>
                <li>Увеличивайте нагрузку постепенно</li>
                <li>Следите за техникой выполнения</li>
                <li>Отдыхайте между подходами 1-2 минуты</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-fitness/20 hover:border-fitness transition-colors">
            <CardHeader className="space-y-1">
              <div className="bg-fitness-light p-2 rounded-md w-fit mb-2">
                <Running className="h-6 w-6 text-fitness" />
              </div>
              <CardTitle>Кардиотренировки</CardTitle>
              <CardDescription>Укрепляйте сердечно-сосудистую систему</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Занимайтесь 3-5 раз в неделю</li>
                <li>Начинайте с 15-20 минут</li>
                <li>Постепенно увеличивайте время до 30-45 минут</li>
                <li>Контролируйте пульс (120-150 уд/мин)</li>
                <li>Чередуйте интенсивность нагрузки</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-fitness/20 hover:border-fitness transition-colors">
            <CardHeader className="space-y-1">
              <div className="bg-fitness-light p-2 rounded-md w-fit mb-2">
                <Heart className="h-6 w-6 text-fitness" />
              </div>
              <CardTitle>Восстановление</CardTitle>
              <CardDescription>Не забывайте о правильном отдыхе</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Спите 7-8 часов в сутки</li>
                <li>Делайте разминку перед тренировкой</li>
                <li>Растяжка после занятий обязательна</li>
                <li>Делайте 1-2 дня отдыха между тренировками</li>
                <li>Слушайте своё тело и не перетренировывайтесь</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
