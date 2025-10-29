import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const pricingPlans = [
    {
      name: "Старт",
      price: "9 900",
      period: "месяц",
      description: "Для начинающих проектов",
      features: [
        "До 5 проектов",
        "Базовая аналитика",
        "Email поддержка",
        "10 GB хранилища",
        "SSL сертификат"
      ],
      popular: false,
      color: "from-purple-500/20 to-pink-500/20"
    },
    {
      name: "Бизнес",
      price: "29 900",
      period: "месяц",
      description: "Для растущего бизнеса",
      features: [
        "Безлимитные проекты",
        "Продвинутая аналитика",
        "Приоритетная поддержка 24/7",
        "100 GB хранилища",
        "Кастомный домен",
        "API доступ"
      ],
      popular: true,
      color: "from-purple-600/30 to-pink-600/30"
    },
    {
      name: "Энтерпрайз",
      price: "99 900",
      period: "месяц",
      description: "Для крупных компаний",
      features: [
        "Всё из тарифа Бизнес",
        "Выделенный менеджер",
        "Индивидуальные решения",
        "Безлимитное хранилище",
        "SLA 99.9%",
        "Белый label",
        "Обучение команды"
      ],
      popular: false,
      color: "from-purple-700/20 to-pink-700/20"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(217,70,239,0.1),transparent_50%)]" />
        
        <div className="container relative mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 backdrop-blur-sm">
                🚀 Новое поколение сервиса
              </Badge>
              
              <h1 className="font-heading text-5xl lg:text-7xl font-black leading-tight">
                Трансформируем
                <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
                  ваш бизнес
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Профессиональные решения для роста вашей компании. Автоматизация процессов, аналитика и поддержка на каждом этапе развития.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-2xl font-semibold shadow-2xl shadow-primary/30"
                >
                  Начать сейчас
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-primary/30 backdrop-blur-sm hover:bg-primary/10 text-lg px-8 py-6 rounded-2xl font-semibold"
                >
                  <Icon name="Play" className="mr-2" size={20} />
                  Смотреть демо
                </Button>
              </div>
              
              <div className="flex items-center gap-8 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary border-2 border-background flex items-center justify-center text-white font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-semibold">2,500+ клиентов</p>
                  <p className="text-sm text-muted-foreground">доверяют нам</p>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-in [animation-delay:200ms]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl animate-float" />
              <img 
                src="https://cdn.poehali.dev/projects/16ca3661-916c-4ca9-bf89-a1a33f25c5ab/files/1c15764b-77e4-4abe-b0ac-7215bbba7d7a.jpg"
                alt="Современный дизайн"
                className="relative rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl lg:text-5xl font-black">
              Тарифы и цены
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Выберите план, который идеально подходит для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card 
                key={plan.name}
                className={`relative overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 animate-fade-in ${
                  plan.popular 
                    ? 'border-primary shadow-xl shadow-primary/20' 
                    : 'border-border/50 hover:border-primary/30'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />
                )}
                
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-50`} />
                
                <CardHeader className="relative">
                  <div className="flex justify-between items-start">
                    <CardTitle className="font-heading text-2xl font-bold">{plan.name}</CardTitle>
                    {plan.popular && (
                      <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0">
                        Популярный
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  
                  <div className="pt-4">
                    <div className="flex items-baseline gap-2">
                      <span className="font-heading text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-muted-foreground">₽/{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="relative space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Icon 
                          name="CheckCircle2" 
                          className="text-primary shrink-0 mt-0.5" 
                          size={20} 
                        />
                        <span className="text-foreground/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full rounded-xl py-6 font-semibold text-base transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg shadow-primary/30'
                        : 'bg-card hover:bg-muted border-2 border-primary/30'
                    }`}
                  >
                    {plan.popular ? 'Выбрать план' : 'Подробнее'}
                    <Icon name="ArrowRight" className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 relative">
          <Card className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-2 border-primary/30 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_70%)]" />
            <CardContent className="relative p-12 lg:p-16">
              <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="font-heading text-4xl lg:text-5xl font-black">
                  Готовы начать?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Присоединяйтесь к тысячам компаний, которые уже трансформировали свой бизнес с нашей помощью
                </p>
                <div className="flex flex-wrap gap-4 justify-center pt-4">
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-10 py-6 rounded-2xl font-semibold shadow-2xl shadow-primary/30"
                  >
                    Связаться с нами
                    <Icon name="MessageCircle" className="ml-2" size={20} />
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-primary/30 backdrop-blur-sm hover:bg-primary/10 text-lg px-10 py-6 rounded-2xl font-semibold"
                  >
                    <Icon name="Calendar" className="mr-2" size={20} />
                    Записаться на демо
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              © 2024 Ваша компания. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
