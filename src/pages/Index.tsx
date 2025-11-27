import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import Icon from '@/components/ui/icon';

type Screen = 'home' | 'how-it-works' | 'examples' | 'about' | 'quiz' | 'contacts' | 'blog' | 'reviews';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [quizStep, setQuizStep] = useState(1);
  const [quizData, setQuizData] = useState({
    occasion: '',
    budget: '',
    interests: ''
  });

  const navigateTo = (screen: Screen) => {
    setCurrentScreen(screen);
    setQuizStep(1);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'home':
        return <HomeScreen onNavigate={navigateTo} />;
      case 'how-it-works':
        return <HowItWorksScreen onNavigate={navigateTo} />;
      case 'examples':
        return <ExamplesScreen onNavigate={navigateTo} />;
      case 'about':
        return <AboutScreen onNavigate={navigateTo} />;
      case 'quiz':
        return <QuizScreen onNavigate={navigateTo} quizStep={quizStep} setQuizStep={setQuizStep} quizData={quizData} setQuizData={setQuizData} />;
      case 'contacts':
        return <ContactsScreen onNavigate={navigateTo} />;
      case 'blog':
        return <BlogScreen onNavigate={navigateTo} />;
      case 'reviews':
        return <ReviewsScreen onNavigate={navigateTo} />;
      default:
        return <HomeScreen onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/20 to-secondary/30 animate-fade-in">
      {renderScreen()}
    </div>
  );
};

const HomeScreen = ({ onNavigate }: { onNavigate: (screen: Screen) => void }) => {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-12">
      <nav className="flex justify-between items-center mb-16 animate-fade-in">
        <div className="flex items-center gap-2">
          <Icon name="Gift" size={32} className="text-primary" />
          <h1 className="text-2xl font-bold">DreamGift AI</h1>
        </div>
        <div className="flex gap-6">
          <button onClick={() => onNavigate('how-it-works')} className="text-sm font-medium hover:text-primary transition-colors">
            Как работает
          </button>
          <button onClick={() => onNavigate('examples')} className="text-sm font-medium hover:text-primary transition-colors">
            Примеры
          </button>
          <button onClick={() => onNavigate('blog')} className="text-sm font-medium hover:text-primary transition-colors">
            Блог
          </button>
          <button onClick={() => onNavigate('reviews')} className="text-sm font-medium hover:text-primary transition-colors">
            Отзывы
          </button>
          <button onClick={() => onNavigate('about')} className="text-sm font-medium hover:text-primary transition-colors">
            О нас
          </button>
          <button onClick={() => onNavigate('contacts')} className="text-sm font-medium hover:text-primary transition-colors">
            Контакты
          </button>
        </div>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-5xl font-bold leading-tight">
            Идеальный подарок <span className="text-primary">за минуты</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            ИИ-помощник, который знает, чем порадовать любого человека. Ответьте на 3 вопроса и получите персональные рекомендации.
          </p>
          <Button onClick={() => onNavigate('quiz')} size="lg" className="text-lg px-8 py-6 rounded-full shadow-lg hover:scale-105 transition-transform">
            Подобрать подарок
            <Icon name="Sparkles" size={20} className="ml-2" />
          </Button>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
          <img
            src="https://cdn.poehali.dev/projects/b27995d8-a5e3-4729-ba95-c4911953e8cc/files/c59134fa-12ba-4add-aa86-d49f43159dcb.jpg"
            alt="Gift box"
            className="relative rounded-3xl shadow-2xl w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        <Card className="p-8 rounded-3xl hover:scale-105 transition-transform hover:shadow-xl">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
            <Icon name="Brain" size={32} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Умный ИИ</h3>
          <p className="text-muted-foreground">Анализируем интересы и находим то, что точно понравится</p>
        </Card>

        <Card className="p-8 rounded-3xl hover:scale-105 transition-transform hover:shadow-xl">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
            <Icon name="Zap" size={32} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Быстро</h3>
          <p className="text-muted-foreground">Всего 3 вопроса и готовый список идей за 30 секунд</p>
        </Card>

        <Card className="p-8 rounded-3xl hover:scale-105 transition-transform hover:shadow-xl">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
            <Icon name="Heart" size={32} className="text-primary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Персонально</h3>
          <p className="text-muted-foreground">Учитываем повод, бюджет и увлечения человека</p>
        </Card>
      </div>

      <div className="text-center space-y-4">
        <div className="flex justify-center gap-12 text-center">
          <div>
            <div className="text-4xl font-bold text-primary">12K+</div>
            <div className="text-muted-foreground">Подарков подобрано</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">98%</div>
            <div className="text-muted-foreground">Довольных клиентов</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary">30 сек</div>
            <div className="text-muted-foreground">Среднее время</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorksScreen = ({ onNavigate }: { onNavigate: (screen: Screen) => void }) => {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <Button onClick={() => onNavigate('home')} variant="ghost" className="mb-8">
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад
      </Button>

      <h2 className="text-4xl font-bold text-center mb-12">Как это работает</h2>

      <div className="space-y-12">
        <div className="flex gap-8 items-center">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
            1
          </div>
          <Card className="flex-1 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Ответьте на 3 вопроса</h3>
            <p className="text-muted-foreground">Расскажите о поводе, бюджете и интересах получателя</p>
          </Card>
        </div>

        <div className="flex gap-8 items-center">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
            2
          </div>
          <Card className="flex-1 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">ИИ анализирует данные</h3>
            <p className="text-muted-foreground">Нейросеть подбирает варианты из тысяч идей подарков</p>
          </Card>
        </div>

        <div className="flex gap-8 items-center">
          <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
            3
          </div>
          <Card className="flex-1 p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-2">Получите список идей</h3>
            <p className="text-muted-foreground">Персональные рекомендации со ссылками на магазины</p>
          </Card>
        </div>
      </div>

      <div className="text-center mt-12">
        <Button onClick={() => onNavigate('quiz')} size="lg" className="rounded-full px-8">
          Начать подбор
          <Icon name="ArrowRight" size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

const ExamplesScreen = ({ onNavigate }: { onNavigate: (screen: Screen) => void }) => {
  const examples = [
    {
      occasion: 'День рождения коллеги',
      budget: '3000₽',
      result: 'Стильная термокружка, кофейный набор премиум-класса',
      icon: 'Coffee'
    },
    {
      occasion: 'Годовщина родителям',
      budget: '15000₽',
      result: 'Фотоальбом ручной работы, сертификат в ресторан',
      icon: 'Heart'
    },
    {
      occasion: 'Подарок геймеру',
      budget: '5000₽',
      result: 'RGB-коврик, беспроводная мышь Logitech',
      icon: 'Gamepad2'
    },
    {
      occasion: 'Новый год подруге',
      budget: '8000₽',
      result: 'Spa-набор, ароматические свечи, книга',
      icon: 'Sparkles'
    }
  ];

  return (
    <div className="container max-w-5xl mx-auto px-6 py-12 animate-fade-in">
      <Button onClick={() => onNavigate('home')} variant="ghost" className="mb-8">
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад
      </Button>

      <h2 className="text-4xl font-bold text-center mb-12">Примеры подборок</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {examples.map((example, index) => (
          <Card key={index} className="p-6 rounded-2xl hover:shadow-xl transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon name={example.icon as any} size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold mb-1">{example.occasion}</h3>
                <p className="text-sm text-muted-foreground mb-2">Бюджет: {example.budget}</p>
                <p className="text-sm">{example.result}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button onClick={() => onNavigate('quiz')} size="lg" className="rounded-full px-8">
          Получить свою подборку
        </Button>
      </div>
    </div>
  );
};

const AboutScreen = ({ onNavigate }: { onNavigate: (screen: Screen) => void }) => {
  return (
    <div className="container max-w-4xl mx-auto px-6 py-12 animate-fade-in">
      <Button onClick={() => onNavigate('home')} variant="ghost" className="mb-8">
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад
      </Button>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">О сервисе DreamGift AI</h2>
        <p className="text-xl text-muted-foreground">Мы помогаем делать подарки с душой</p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
        <div>
          <img
            src="https://cdn.poehali.dev/projects/b27995d8-a5e3-4729-ba95-c4911953e8cc/files/4158d4a8-366b-421e-a4c9-42369f70c212.jpg"
            alt="AI Technology"
            className="rounded-3xl shadow-xl"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Наша миссия</h3>
          <p className="text-muted-foreground">
            Мы верим, что подарок — это не просто вещь, а способ показать заботу. Наш ИИ учитывает тысячи факторов, 
            чтобы найти то, что действительно порадует получателя.
          </p>
          <p className="text-muted-foreground">
            С 2024 года мы помогли более 12 000 людей найти идеальные подарки для близких, коллег и друзей.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6 rounded-2xl text-center">
          <Icon name="Target" size={32} className="text-primary mx-auto mb-3" />
          <h4 className="font-bold mb-2">Точность</h4>
          <p className="text-sm text-muted-foreground">98% пользователей довольны подборкой</p>
        </Card>
        <Card className="p-6 rounded-2xl text-center">
          <Icon name="Shield" size={32} className="text-primary mx-auto mb-3" />
          <h4 className="font-bold mb-2">Конфиденциальность</h4>
          <p className="text-sm text-muted-foreground">Ваши данные защищены</p>
        </Card>
        <Card className="p-6 rounded-2xl text-center">
          <Icon name="Headphones" size={32} className="text-primary mx-auto mb-3" />
          <h4 className="font-bold mb-2">Поддержка</h4>
          <p className="text-sm text-muted-foreground">Всегда готовы помочь</p>
        </Card>
      </div>
    </div>
  );
};

const QuizScreen = ({ 
  onNavigate, 
  quizStep, 
  setQuizStep, 
  quizData, 
  setQuizData 
}: { 
  onNavigate: (screen: Screen) => void;
  quizStep: number;
  setQuizStep: (step: number) => void;
  quizData: any;
  setQuizData: (data: any) => void;
}) => {
  const [showResult, setShowResult] = useState(false);

  const handleNext = () => {
    if (quizStep < 3) {
      setQuizStep(quizStep + 1);
    } else {
      setShowResult(true);
    }
  };

  if (showResult) {
    return (
      <div className="container max-w-3xl mx-auto px-6 py-12 animate-fade-in">
        <Card className="p-8 rounded-3xl">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Sparkles" size={40} className="text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-2">Ваша подборка готова!</h2>
            <p className="text-muted-foreground">На основе ваших ответов мы подобрали идеи</p>
          </div>

          <div className="space-y-4 mb-8">
            <Card className="p-4 rounded-2xl bg-accent/50">
              <div className="flex items-start gap-3">
                <Icon name="Gift" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Персонализированный фотоальбом</h4>
                  <p className="text-sm text-muted-foreground">С совместными фотографиями и памятными моментами</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 rounded-2xl bg-accent/50">
              <div className="flex items-start gap-3">
                <Icon name="Gift" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Впечатление на двоих</h4>
                  <p className="text-sm text-muted-foreground">Сертификат в ресторан или мастер-класс</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 rounded-2xl bg-accent/50">
              <div className="flex items-start gap-3">
                <Icon name="Gift" size={24} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold">Умные часы</h4>
                  <p className="text-sm text-muted-foreground">Для отслеживания активности и здоровья</p>
                </div>
              </div>
            </Card>
          </div>

          <div className="flex gap-4">
            <Button onClick={() => { setShowResult(false); setQuizStep(1); }} variant="outline" className="flex-1 rounded-full">
              Пройти еще раз
            </Button>
            <Button onClick={() => onNavigate('home')} className="flex-1 rounded-full">
              На главную
            </Button>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container max-w-2xl mx-auto px-6 py-12 animate-fade-in">
      <Button onClick={() => onNavigate('home')} variant="ghost" className="mb-8">
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад
      </Button>

      <div className="mb-8">
        <div className="flex gap-2 mb-4">
          {[1, 2, 3].map((step) => (
            <div
              key={step}
              className={`h-2 flex-1 rounded-full transition-colors ${
                step <= quizStep ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">Шаг {quizStep} из 3</p>
      </div>

      <Card className="p-8 rounded-3xl">
        {quizStep === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Какой повод?</h3>
              <p className="text-muted-foreground">Выберите для какого случая нужен подарок</p>
            </div>

            <RadioGroup value={quizData.occasion} onValueChange={(value) => setQuizData({ ...quizData, occasion: value })}>
              <div className="space-y-3">
                {['День рождения', 'Новый год', 'Годовщина', 'Свадьба', 'Просто так'].map((option) => (
                  <Label
                    key={option}
                    htmlFor={option}
                    className="flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer hover:border-primary transition-colors"
                  >
                    <RadioGroupItem value={option} id={option} />
                    <span>{option}</span>
                  </Label>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}

        {quizStep === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Какой бюджет?</h3>
              <p className="text-muted-foreground">Примерная сумма на подарок</p>
            </div>

            <RadioGroup value={quizData.budget} onValueChange={(value) => setQuizData({ ...quizData, budget: value })}>
              <div className="space-y-3">
                {['До 1000₽', '1000-3000₽', '3000-5000₽', '5000-10000₽', 'Больше 10000₽'].map((option) => (
                  <Label
                    key={option}
                    htmlFor={option}
                    className="flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer hover:border-primary transition-colors"
                  >
                    <RadioGroupItem value={option} id={option} />
                    <span>{option}</span>
                  </Label>
                ))}
              </div>
            </RadioGroup>
          </div>
        )}

        {quizStep === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-2">Интересы человека?</h3>
              <p className="text-muted-foreground">Расскажите о хобби и увлечениях</p>
            </div>

            <div className="space-y-3">
              <Label htmlFor="interests">Например: путешествия, кулинария, спорт, чтение</Label>
              <Input
                id="interests"
                placeholder="Напишите интересы..."
                value={quizData.interests}
                onChange={(e) => setQuizData({ ...quizData, interests: e.target.value })}
                className="rounded-2xl h-12"
              />
            </div>
          </div>
        )}

        <div className="flex gap-4 mt-8">
          {quizStep > 1 && (
            <Button onClick={() => setQuizStep(quizStep - 1)} variant="outline" className="rounded-full">
              <Icon name="ArrowLeft" size={20} className="mr-2" />
              Назад
            </Button>
          )}
          <Button
            onClick={handleNext}
            className="flex-1 rounded-full"
            disabled={
              (quizStep === 1 && !quizData.occasion) ||
              (quizStep === 2 && !quizData.budget) ||
              (quizStep === 3 && !quizData.interests)
            }
          >
            {quizStep === 3 ? 'Получить подборку' : 'Далее'}
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </Card>
    </div>
  );
};

const BlogScreen = ({ onNavigate }: { onNavigate: (screen: Screen) => void }) => {
  const articles = [
    {
      title: '10 идей подарков для коллег до 3000₽',
      excerpt: 'Практичные и оригинальные варианты, которые точно оценят на работе',
      date: '20 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/b27995d8-a5e3-4729-ba95-c4911953e8cc/files/cdb88d35-245e-4905-86b9-411b3c2ccb26.jpg',
      category: 'Советы'
    },
    {
      title: 'Как выбрать подарок человеку, у которого всё есть',
      excerpt: 'Необычные решения для самых требовательных получателей',
      date: '18 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/b27995d8-a5e3-4729-ba95-c4911953e8cc/files/c59134fa-12ba-4add-aa86-d49f43159dcb.jpg',
      category: 'Идеи'
    },
    {
      title: 'Тренды подарков 2024: что дарить в новом году',
      excerpt: 'Самые популярные категории подарков по данным нашего ИИ',
      date: '15 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/b27995d8-a5e3-4729-ba95-c4911953e8cc/files/4158d4a8-366b-421e-a4c9-42369f70c212.jpg',
      category: 'Тренды'
    },
    {
      title: 'Упаковка подарков: 5 способов удивить',
      excerpt: 'Креативные идеи оформления, которые сделают подарок особенным',
      date: '12 ноября 2024',
      image: 'https://cdn.poehali.dev/projects/b27995d8-a5e3-4729-ba95-c4911953e8cc/files/2449d935-1ed9-473b-bb7f-68667bda2c6d.jpg',
      category: 'Лайфхаки'
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <Button onClick={() => onNavigate('home')} variant="ghost" className="mb-8">
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад
      </Button>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Блог о подарках</h2>
        <p className="text-xl text-muted-foreground">Советы, идеи и тренды от экспертов DreamGift AI</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <Card key={index} className="overflow-hidden rounded-3xl hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
            <div className="relative h-48 overflow-hidden">
              <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4">
                <span className="bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                <Icon name="Calendar" size={16} />
                <span>{article.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-primary/80">
                Читать далее
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ReviewsScreen = ({ onNavigate }: { onNavigate: (screen: Screen) => void }) => {
  const reviews = [
    {
      name: 'Анна Петрова',
      rating: 5,
      text: 'Искала подарок маме на день рождения. ИИ предложил идеальный вариант — набор для рукоделия. Мама в восторге! Спасибо за сервис!',
      date: '2 дня назад',
      avatar: '👩'
    },
    {
      name: 'Михаил Соколов',
      rating: 5,
      text: 'Нужен был срочно подарок коллеге. За минуту получил список отличных идей в рамках бюджета. Очень удобно!',
      date: '5 дней назад',
      avatar: '👨'
    },
    {
      name: 'Елена Волкова',
      rating: 5,
      text: 'Использую сервис уже третий раз. Все подарки были встречены с огромной радостью. Рекомендую всем, кто не знает что подарить!',
      date: '1 неделю назад',
      avatar: '👩‍💼'
    },
    {
      name: 'Дмитрий Козлов',
      rating: 5,
      text: 'Подарил жене на годовщину то, что посоветовал ИИ. Сказала, что это лучший подарок за последние годы. Буду пользоваться дальше!',
      date: '2 недели назад',
      avatar: '👨‍💻'
    },
    {
      name: 'Ольга Смирнова',
      rating: 5,
      text: 'Очень помог с выбором подарка племяннику-подростку. Сама бы никогда не догадалась что ему подарить, а ИИ угадал с первого раза!',
      date: '3 недели назад',
      avatar: '👩‍🦰'
    },
    {
      name: 'Александр Иванов',
      rating: 5,
      text: 'Быстро, удобно и действительно работает. Теперь не трачу часы на поиски подарков в интернете. Все за пару минут!',
      date: '1 месяц назад',
      avatar: '👨‍🎓'
    }
  ];

  return (
    <div className="container max-w-6xl mx-auto px-6 py-12 animate-fade-in">
      <Button onClick={() => onNavigate('home')} variant="ghost" className="mb-8">
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад
      </Button>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Отзывы наших клиентов</h2>
        <p className="text-xl text-muted-foreground">12 000+ довольных пользователей</p>
      </div>

      <div className="mb-12 text-center">
        <div className="flex justify-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Icon key={star} name="Star" size={32} className="text-yellow-500 fill-yellow-500" />
          ))}
        </div>
        <p className="text-3xl font-bold">4.9 из 5</p>
        <p className="text-muted-foreground">На основе 2,847 отзывов</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <Card key={index} className="p-6 rounded-3xl hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{review.avatar}</div>
              <div>
                <h4 className="font-bold">{review.name}</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Icon key={star} name="Star" size={14} className="text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-muted-foreground mb-4">{review.text}</p>
            <p className="text-sm text-muted-foreground">{review.date}</p>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button onClick={() => onNavigate('quiz')} size="lg" className="rounded-full px-8">
          Попробовать сервис
          <Icon name="Sparkles" size={20} className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

const ContactsScreen = ({ onNavigate }: { onNavigate: (screen: Screen) => void }) => {
  return (
    <div className="container max-w-3xl mx-auto px-6 py-12 animate-fade-in">
      <Button onClick={() => onNavigate('home')} variant="ghost" className="mb-8">
        <Icon name="ArrowLeft" size={20} className="mr-2" />
        Назад
      </Button>

      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
        <p className="text-xl text-muted-foreground">Мы всегда рады помочь</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card className="p-6 rounded-2xl">
          <Icon name="Mail" size={32} className="text-primary mb-3" />
          <h4 className="font-bold mb-2">Email</h4>
          <p className="text-muted-foreground">support@dreamgift.ai</p>
        </Card>

        <Card className="p-6 rounded-2xl">
          <Icon name="Phone" size={32} className="text-primary mb-3" />
          <h4 className="font-bold mb-2">Телефон</h4>
          <p className="text-muted-foreground">+7 (999) 123-45-67</p>
        </Card>

        <Card className="p-6 rounded-2xl">
          <Icon name="MessageCircle" size={32} className="text-primary mb-3" />
          <h4 className="font-bold mb-2">Telegram</h4>
          <p className="text-muted-foreground">@dreamgift_support</p>
        </Card>

        <Card className="p-6 rounded-2xl">
          <Icon name="Clock" size={32} className="text-primary mb-3" />
          <h4 className="font-bold mb-2">Часы работы</h4>
          <p className="text-muted-foreground">Пн-Пт: 9:00 - 21:00</p>
        </Card>
      </div>

      <Card className="p-8 rounded-3xl">
        <h3 className="text-2xl font-bold mb-6">Напишите нам</h3>
        <form className="space-y-4">
          <div>
            <Label htmlFor="name">Имя</Label>
            <Input id="name" placeholder="Ваше имя" className="rounded-2xl h-12" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="your@email.com" className="rounded-2xl h-12" />
          </div>
          <div>
            <Label htmlFor="message">Сообщение</Label>
            <Input id="message" placeholder="Ваше сообщение..." className="rounded-2xl h-12" />
          </div>
          <Button className="w-full rounded-full">
            Отправить
            <Icon name="Send" size={20} className="ml-2" />
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Index;