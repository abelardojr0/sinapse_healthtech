import React from "react";
import { Container, Button } from "../styles/GlobalStyles";
import { Building2, Smartphone, BarChart3, Shield } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center relative overflow-hidden pt-16 md:pt-20"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>

      <Container className="relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-slate-800 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
              Tecnologia em{" "}
              <span className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                HealthTech
              </span>{" "}
              para instituições modernas
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-8 text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Desenvolvemos soluções tecnológicas eficientes para o setor de
              saúde, focando em simplicidade, segurança e resultados
              excepcionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="primary"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg"
              >
                <a href="#solucoes">Conhecer Soluções</a>
              </Button>
              <Button
                variant="outline"
                className="border-2 border-slate-300 hover:border-blue-600 hover:text-blue-600 px-6 sm:px-8 py-3 text-base sm:text-lg"
              >
                <a
                  target="_blank"
                  href="https://wa.me/85991770203?text=Olá gostaria de saber mais sobre os serviços oferecidos pela Sinapse HealthTech."
                >
                  Falar com Especialista
                </a>
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-8">
              {[
                {
                  icon: Building2,
                  label: "Hospitais",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  icon: Smartphone,
                  label: "Aplicações",
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  icon: BarChart3,
                  label: "Analytics",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  icon: Shield,
                  label: "Segurança",
                  color: "from-emerald-500 to-emerald-600",
                },
              ].map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm border border-slate-200/50 rounded-xl p-4 sm:p-6 lg:p-8 text-center text-slate-700 hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
                  >
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-slate-700">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
