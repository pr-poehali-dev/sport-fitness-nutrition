import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">ЗдоровьеПлюс</h3>
            <p className="text-gray-400">
              Ваш проводник в мире здорового образа жизни, правильного питания и отказа от вредных привычек.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Разделы</h4>
            <ul className="space-y-2">
              <li><a href="#sport" className="text-gray-400 hover:text-white transition-colors">Спорт</a></li>
              <li><a href="#nutrition" className="text-gray-400 hover:text-white transition-colors">Питание</a></li>
              <li><a href="#disposable-vapes" className="text-gray-400 hover:text-white transition-colors">Вред одноразок</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Подписка</h4>
            <p className="text-gray-400">Подпишитесь на нашу рассылку, чтобы получать полезные материалы.</p>
            <div className="flex gap-2">
              <Input placeholder="Ваш email" className="bg-gray-800 border-gray-700" />
              <Button className="bg-fitness hover:bg-fitness-dark whitespace-nowrap">Подписаться</Button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Контакты</h4>
            <p className="text-gray-400">Есть вопросы? Свяжитесь с нами!</p>
            <p className="text-gray-400">Email: info@zdravplus.ru</p>
            <p className="text-gray-400">Телефон: +7 (999) 123-45-67</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2023 ЗдоровьеПлюс. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
