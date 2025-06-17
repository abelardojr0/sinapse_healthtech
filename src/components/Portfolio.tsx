import React from "react";
import { Container, Section, SectionTitle } from "../styles/GlobalStyles";
import { Building2, Smartphone, Bot, BarChart3 } from "lucide-react";
import { SectionComponent } from "./Section";

const Portfolio: React.FC = () => {
  const projects = [
    {
      icon: Building2,
      title: "Dialysis Pro - Sistema Integrado",
      description:
        "Sistema hospitalar completo com gestão de máquinas, funcionários, parceiros e dialises",
      technologies: ["React", "Node.js", "PostgreSQL", "Cloud"],
      metrics: [
        { value: "1k", label: "Pacientes" },
        { value: "20", label: "Médicos" },
        { value: "98%", label: "Uptime" },
      ],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Smartphone,
      title: "Paciente 2.0 - App de Telemedicina",
      description:
        "Aplicativo para consultas remotas, prescrição eletrônica e monitoramento de pacientes.",
      technologies: ["React Native", "WebRTC", "Firebase", "LGPD"],
      metrics: [
        { value: "5k", label: "Downloads" },
        { value: "2k", label: "Consultas/mês" },
        { value: "4.8", label: "Avaliação" },
      ],
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Bot,
      title: "Dr.Quezia - Landing Page",
      description:
        "Página de apresentação de profissionais com foco em acessibilidade e SEO, atendendo aos recursos avançados de ADS.",
      technologies: ["HTML", "CSS", "JS", "GIT"],
      metrics: [
        { value: "95%", label: "Precisão" },
        { value: "10k", label: "Exames" },
        { value: "30s", label: "Tempo médio" },
      ],
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: BarChart3,
      title: "Leitos - Sistema Gerenciamento",
      description: "Plataforma de gerenciamento de leitos.",
      technologies: ["Power BI", "Python", "Azure", "SQL"],
      metrics: [
        { value: "25", label: "Clínicas" },
        { value: "100+", label: "Relatórios" },
        { value: "35%", label: "↑ Eficiência" },
      ],
      gradient: "from-emerald-500 to-emerald-600",
    },
  ];

  return (
    <SectionComponent
      id="portfolio"
      className="bg-gradient-to-b from-slate-50 to-white"
    >
      <Container>
        <SectionTitle className="mb-20">Nosso Portfólio</SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-10`}
                  ></div>
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${project.gradient} rounded-2xl flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-slate-800 text-xl font-semibold mb-4">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                    {project.metrics.map((metric, metricIndex) => (
                      <div key={metricIndex} className="text-center">
                        <div className="text-xl font-bold text-slate-800">
                          {metric.value}
                        </div>
                        <div className="text-sm text-slate-600">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl text-white">
          <h3 className="text-3xl text-center mb-12 font-semibold text-slate-100">
            Depoimentos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600/50 hover:bg-slate-700 transition-all duration-300">
              <p className="italic mb-6 leading-relaxed text-slate-200 text-lg">
                "A Sinapse HealthTech revolucionou nossos processos. O sistema
                reduziu em 40% o tempo de atendimento."
              </p>
              <div className="font-semibold text-slate-300">
                Dr. Carlos Silva
              </div>
              <div className="text-slate-400 text-sm">Hospital São Lucas</div>
            </div>

            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600/50 hover:bg-slate-700 transition-all duration-300">
              <p className="italic mb-6 leading-relaxed text-slate-200 text-lg">
                "O app de Paciente 2.0 desenvolvido é excepcional. Conseguimos
                expandir nosso atendimento mantendo a qualidade."
              </p>
              <div className="font-semibold text-slate-300">Dra. Ana Costa</div>
              <div className="text-slate-400 text-sm">Clínica MedCare</div>
            </div>

            <div className="bg-slate-700/50 rounded-2xl p-8 border border-slate-600/50 hover:bg-slate-700 transition-all duration-300">
              <p className="italic mb-6 leading-relaxed text-slate-200 text-lg">
                "O desenvolvimento da minha landing page ficou incrível,
                impulsionou e mudou completamente minha visibilidade digital"
              </p>
              <div className="font-semibold text-slate-300">
                Dr. Roberto Lima
              </div>
              <div className="text-slate-400 text-sm">
                Centro de Diagnósticos
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionComponent>
  );
};

export default Portfolio;
