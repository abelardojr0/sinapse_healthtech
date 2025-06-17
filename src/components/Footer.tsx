import React from "react";
import logo from "../assets/logo.png";
const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 from-cyan-400 to-orange-400 rounded-lg flex items-center justify-center font-bold text-white">
                <img src={logo} alt="" />
              </div>
              <span className="text-xl font-bold">Sinapse HealthTech</span>
            </div>
            <p className="leading-relaxed opacity-90 mb-4">
              Inovação em tecnologia para a saúde. Desenvolvemos soluções que
              conectam pessoas, dados e cuidados de forma inteligente e
              eficiente.
            </p>
            <p className="leading-relaxed opacity-90">
              contato@sinapsehealthtech.com
              <br />
              +55 (85) 99177-0203
              <br />
              Fortaleza, CE - Brasil
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Soluções
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="#solucoes"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Sistema Hospitalar
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Telemedicina
                </a>
              </li>
              <li>
                <a
                  href="#solucoes"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  IA para Diagnósticos
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Empresa
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="#sobre"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Sobre Nós
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Portfólio
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Parceiros
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Recursos
            </h3>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="#"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Documentação
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Suporte Técnico
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Treinamentos
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-90 hover:text-cyan-400 transition-colors"
                >
                  Termos de Uso
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center opacity-80">
          <div className="flex justify-center gap-8 mb-4 flex-wrap">
            <a href="#inicio" className="hover:text-cyan-400 transition-colors">
              Início
            </a>
            <a href="#sobre" className="hover:text-cyan-400 transition-colors">
              Sobre
            </a>
            <a
              href="#solucoes"
              className="hover:text-cyan-400 transition-colors"
            >
              Soluções
            </a>
            <a
              href="#portfolio"
              className="hover:text-cyan-400 transition-colors"
            >
              Portfólio
            </a>
            <a
              href="#contato"
              className="hover:text-cyan-400 transition-colors"
            >
              Contato
            </a>
          </div>

          <p>
            © 2024 Sinapse HealthTech. Todos os direitos reservados. |
            Desenvolvido para revolucionar a saúde através da tecnologia.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
