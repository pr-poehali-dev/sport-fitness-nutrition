import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Coffee, Clock } from "lucide-react";

export const NutritionSection = () => {
  return (
    <section id="nutrition" className="py-16 bg-[#F6F6F7]">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Как правильно питаться</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Сбалансированное питание — основа здоровья и хорошего самочувствия. Узнайте, как составить свой рацион правильно.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-nutrition/20 hover:border-nutrition transition-colors">
            <CardHeader className="space-y-1">
              <div className="bg-nutrition-light p-2 rounded-md w-fit mb-2">
                <Apple className="h-6 w-6 text-nutrition" />
              </div>
              <CardTitle>Баланс БЖУ</CardTitle>
              <CardDescription>Основные питательные вещества</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Белки: 1.5-2г на кг веса (мясо, рыба, яйца)</li>
                <li>Жиры: 1г на кг веса (растительные масла, орехи)</li>
                <li>Углеводы: 3-5г на кг веса (крупы, овощи)</li>
                <li>Клетчатка: 25-35г в день (овощи, фрукты)</li>
                <li>Вода: 30мл на кг веса в день</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-nutrition/20 hover:border-nutrition transition-colors">
            <CardHeader className="space-y-1">
              <div className="bg-nutrition-light p-2 rounded-md w-fit mb-2">
                <Clock className="h-6 w-6 text-nutrition" />
              </div>
              <CardTitle>Режим питания</CardTitle>
              <CardDescription>Оптимальное распределение приемов пищи</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Ешьте 3-5 раз в день небольшими порциями</li>
                <li>Завтракайте в течение часа после пробуждения</li>
                <li>Последний прием пищи за 2-3 часа до сна</li>
                <li>Соблюдайте интервал 3-4 часа между приемами пищи</li>
                <li>Не пропускайте приемы пищи</li>
              </ul>
            </CardContent>
          </Card>
          
          <Card className="border-nutrition/20 hover:border-nutrition transition-colors">
            <CardHeader className="space-y-1">
              <div className="bg-nutrition-light p-2 rounded-md w-fit mb-2">
                <Coffee className="h-6 w-6 text-nutrition" />
              </div>
              <CardTitle>Советы для здоровья</CardTitle>
              <CardDescription>Полезные рекомендации</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 list-disc pl-5">
                <li>Ограничьте потребление сахара и соли</li>
                <li>Выбирайте цельнозерновые продукты</li>
                <li>Употребляйте рыбу 2-3 раза в неделю</li>
                <li>Увеличьте потребление свежих овощей и фруктов</li>
                <li>Минимизируйте потребление обработанных продуктов</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
