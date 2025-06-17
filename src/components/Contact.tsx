
import React, { useState } from 'react';
import { Container, Section, SectionTitle, Button } from '../styles/GlobalStyles';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { SectionComponent } from './Section';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@sinapsehealthtech.com'
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '+55 (85) 99177-0203'
    },
    {
      icon: MapPin,
      title: 'Localização',
      content: 'Fortaleza, CE'
    },
    {
      icon: Clock,
      title: 'Horário',
      content: 'Seg - Sex\n8h às 18h'
    }
  ];

  return (
    <SectionComponent id="contato" className="bg-gray-50">
      <Container>
        <SectionTitle>Entre em Contato</SectionTitle>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-slate-800 text-xl mb-6 font-medium">Vamos conversar sobre seu projeto</h3>
            <p className="text-slate-600 leading-relaxed mb-8">
              Transformamos ideias em soluções tecnológicas eficientes. 
              Entre em contato para descobrir como podemos ajudar sua instituição.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-sm transition-shadow duration-200">
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-slate-600" />
                    </div>
                    <h4 className="text-slate-800 font-medium mb-2">{info.title}</h4>
                    <p className="text-slate-600 text-sm whitespace-pre-line">{info.content}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            {showSuccess && (
              <div className="bg-green-50 border border-green-200 text-green-800 p-4 rounded-lg mb-6 text-center">
                Mensagem enviada com sucesso! Entraremos em contato em breve.
              </div>
            )}
            
            <div className="mb-6">
              <label htmlFor="name" className="block text-slate-700 font-medium mb-2">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Seu nome completo"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-colors duration-200 bg-white text-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-700 font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-colors duration-200 bg-white text-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="company" className="block text-slate-700 font-medium mb-2">Empresa/Instituição</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Nome da sua empresa"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-colors duration-200 bg-white text-slate-700 focus:outline-none focus:border-blue-500 placeholder-slate-400"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-slate-700 font-medium mb-2">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-nos sobre seu projeto..."
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg transition-colors duration-200 bg-white text-slate-700 min-h-32 resize-vertical font-inherit focus:outline-none focus:border-blue-500 placeholder-slate-400"
              />
            </div>

            <Button type="submit" style={{ width: '100%' }}>
              Enviar Mensagem
            </Button>
          </form>
        </div>
      </Container>
    </SectionComponent>
  );
};

export default Contact;
