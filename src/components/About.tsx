import React from "react";
import { Container, Section, SectionTitle } from "../styles/GlobalStyles";
import { Brain, Handshake, Lightbulb, ShieldCheck } from "lucide-react";
import { SectionComponent } from "./Section";

const About: React.FC = () => {
  return (
    <SectionComponent
      id="sobre"
      className="bg-gradient-to-b from-white to-slate-50"
    >
      <Container>
        <SectionTitle className="mb-20">
          Sobre a Sinapse HealthTech
        </SectionTitle>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl text-slate-800 mb-6 font-semibold">
              Conectando Tecnologia e Saúde
            </h3>
            <p className="text-lg leading-relaxed mb-6 text-slate-600">
              Na Sinapse HealthTech, acreditamos que a tecnologia pode
              revolucionar a forma como cuidamos da saúde. Somos uma empresa
              especializada em desenvolvimento de software para o setor de
              saúde, criando soluções inovadoras que conectam pacientes,
              profissionais e instituições de saúde.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Nossa missão é democratizar o acesso à saúde de qualidade através
              da tecnologia, desenvolvendo sistemas inteligentes que otimizam
              processos, melhoram diagnósticos e facilitam o cuidado
              personalizado.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-indigo-500/10"></div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Brain className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-6 text-slate-800">
                Plataformas
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                Desenvolvemos plataformas que visam agilizar e melhorar o
                cotidiado dos profissionais da área da saúde.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-4xl font-bold text-slate-800 mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              10+
            </h4>
            <p className="text-slate-600 font-medium">Projetos Realizados</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-4xl font-bold text-slate-800 mb-2 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              100mil+
            </h4>
            <p className="text-slate-600 font-medium">Vidas Impactadas</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-4xl font-bold text-slate-800 mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              5+
            </h4>
            <p className="text-slate-600 font-medium">Hospitais Parceiros</p>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h4 className="text-4xl font-bold text-slate-800 mb-2 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              99%
            </h4>
            <p className="text-slate-600 font-medium">
              Satisfação dos Clientes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-xl">
                <Lightbulb />
              </span>
            </div>
            <h4 className="text-slate-800 text-xl mb-4 font-semibold">
              Inovação
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Estamos sempre na vanguarda da tecnologia, desenvolvendo soluções
              que antecipam as necessidades do futuro da saúde.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-xl">
                <Handshake />
              </span>
            </div>
            <h4 className="text-slate-800 text-xl mb-4 font-semibold">
              Colaboração
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Trabalhamos lado a lado com profissionais de saúde para criar
              soluções que realmente fazem a diferença na prática médica.
            </p>
          </div>
          <div className="p-8 bg-white rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-xl">
                <ShieldCheck />
              </span>
            </div>
            <h4 className="text-slate-800 text-xl mb-4 font-semibold">
              Segurança
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Priorizamos a segurança e privacidade dos dados, seguindo os mais
              rigorosos padrões internacionais de proteção de informações
              médicas.
            </p>
          </div>
        </div>
      </Container>
    </SectionComponent>
  );
};

export default About;
