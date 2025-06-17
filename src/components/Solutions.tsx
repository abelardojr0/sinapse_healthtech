import React from "react";
import {
  Container,
  Section,
  SectionTitle,
  Button,
} from "../styles/GlobalStyles";
import {
  Building2,
  Smartphone,
  Bot,
  BarChart3,
  Link,
  Pill,
} from "lucide-react";
import { SectionComponent } from "./Section";

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: Building2,
      title: "Sistema Hospitalar Integrado",
      description:
        "Plataforma completa para gestão hospitalar com agendamento e controle de recursos.",
      features: [
        "Agendamentos",
        "Gestão de leitos e recursos",
        "Relatórios em tempo real",
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Telemedicina",
      description:
        "Aplicações para consultas remotas e monitoramento de pacientes com foco na experiência do usuário.",
      features: [
        "Consultas por videoconferência",
        "Monitoramento remoto",
        "Prescrição eletrônica",
      ],
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Bot,
      title: "Inteligência Artificial",
      description:
        "Sistemas de IA para auxílio em diagnósticos e análise de dados médicos com precisão e eficiência.",
      features: [
        "Análise de imagens médicas",
        "Detecção precoce de doenças",
        "Suporte à decisão clínica",
      ],
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <SectionComponent
      id="solucoes"
      className="bg-gradient-to-b from-slate-50 to-white"
    >
      <Container>
        <SectionTitle className="mb-20">Nossas Soluções</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${solution.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-slate-800 text-xl font-semibold mb-4">
                  {solution.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {solution.description}
                </p>
                <ul className="list-none mb-8 space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-slate-600 relative pl-6 before:content-['✓'] before:absolute before:left-0 before:text-emerald-500 before:font-bold"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="group-hover:border-blue-600 group-hover:text-blue-600 transition-colors duration-300"
                >
                  Saiba Mais
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white">
          <h3 className="text-slate-100 text-3xl mb-12 font-semibold text-center">
            Tecnologias Utilizadas
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {[
              {
                name: "React",
                symbol: "R",
                color: "from-cyan-400 to-blue-500",
              },
              {
                name: "Node.js",
                symbol: "N",
                color: "from-green-400 to-emerald-500",
              },
              {
                name: "Python",
                symbol: "P",
                color: "from-yellow-400 to-orange-500",
              },
              {
                name: "Cloud",
                symbol: "C",
                color: "from-blue-400 to-indigo-500",
              },
              {
                name: "Database",
                symbol: "D",
                color: "from-purple-400 to-pink-500",
              },
              {
                name: "Security",
                symbol: "S",
                color: "from-red-400 to-rose-500",
              },
            ].map((tech, index) => (
              <div
                key={index}
                className="group bg-slate-700/50 rounded-xl p-6 text-center hover:bg-slate-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <span className="text-white font-bold text-lg">
                    {tech.symbol}
                  </span>
                </div>
                <span className="text-slate-200 font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionComponent>
  );
};

export default Solutions;
