import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Lungs, Skull, Thermometer } from "lucide-react";

export const DisposableVapesSection = () => {
  return (
    <section id="disposable-vapes" className="py-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Вред одноразовых электронных сигарет</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Одноразовые электронные сигареты («одноразки») представляют серьезную опасность для здоровья, несмотря на распространенное заблуждение об их безопасности.
          </p>
        </div>
        
        <Alert className="mb-8 border-destructive/50 bg-destructive/5">
          <AlertTriangle className="h-5 w-5 text-destructive" />
          <AlertTitle className="text-destructive font-semibold">Внимание!</AlertTitle>
          <AlertDescription>
            Одноразовые электронные сигареты содержат никотин, который вызывает сильную зависимость и негативно влияет на развитие мозга у подростков и молодых людей.
          </AlertDescription>
        </Alert>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-destructive/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-destructive/10 p-2 rounded-md">
                <Lungs className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-bold text-lg">Влияние на дыхательную систему</h3>
            </div>
            <ul className="space-y-2 list-disc pl-5">
              <li>Воспаление дыхательных путей</li>
              <li>Повышенный риск астмы и ХОБЛ</li>
              <li>Снижение функции легких</li>
              <li>Риск развития липоидной пневмонии</li>
              <li>Хронический кашель и одышка</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-destructive/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-destructive/10 p-2 rounded-md">
                <Thermometer className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-bold text-lg">Химический состав</h3>
            </div>
            <ul className="space-y-2 list-disc pl-5">
              <li>Высокая концентрация никотина (до 50 мг/мл)</li>
              <li>Пропиленгликоль и глицерин</li>
              <li>Ароматизаторы с неизвестным эффектом</li>
              <li>Формальдегид и акролеин при нагревании</li>
              <li>Тяжелые металлы (свинец, никель, олово)</li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-destructive/20">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-destructive/10 p-2 rounded-md">
                <Skull className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-bold text-lg">Системные эффекты</h3>
            </div>
            <ul className="space-y-2 list-disc pl-5">
              <li>Повышенный риск сердечно-сосудистых заболеваний</li>
              <li>Влияние на развитие мозга у молодежи</li>
              <li>Сильная никотиновая зависимость</li>
              <li>Повышенный риск перехода к традиционным сигаретам</li>
              <li>Возможные репродуктивные проблемы</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-destructive/5 p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-4 text-center">Основания отказаться от одноразовых электронных сигарет:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3 list-disc pl-5">
                <li className="font-medium">Неизвестный долгосрочный эффект на здоровье</li>
                <li className="font-medium">Доказанный вред для дыхательной системы</li>
                <li className="font-medium">Высокий потенциал формирования зависимости</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 list-disc pl-5">
                <li className="font-medium">Нерегулируемое качество продукции</li>
                <li className="font-medium">Экологический вред от одноразовых устройств</li>
                <li className="font-medium">Экономические затраты при регулярном использовании</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
