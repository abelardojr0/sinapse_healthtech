
// Remove styled-components dependency and convert to a simple object/constants
export const colors = {
  cor_secundaria: '#2563eb', // Azul mais sóbrio
  cor_principal: '#1e293b', // Cinza escuro profissional
  cor_disfarce: '#475569', // Cinza médio
  cor_destaque: '#64748b', // Cinza claro para destaques
  fundo_base: '#ffffff',
  texto_base: '#334155',
  error_base: '#dc2626'
};

// Convert styled components to regular CSS classes that can be used with Tailwind
export const globalStyles = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    line-height: 1.6;
    color: #334155;
    background-color: #ffffff;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

// Utility components as React components using Tailwind
import React from 'react';

export const Container: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`max-w-6xl mx-auto px-5 ${className}`}>
    {children}
  </div>
);

export const Section: React.FC<{ children: React.ReactNode; id?: string; className?: string; style?: React.CSSProperties }> = ({ children, id, className = '', style }) => (
  <section id={id} className={`py-20 ${className}`} style={style}>
    {children}
  </section>
);

export const SectionTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <h2 className={`text-3xl md:text-4xl font-medium text-center mb-16 text-slate-800 ${className}`}>
    {children}
  </h2>
);

export const Button: React.FC<{ 
  children: React.ReactNode; 
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}> = ({ children, variant = 'primary', className = '', onClick, type = 'button', style }) => {
  const baseClasses = 'px-6 py-2.5 font-medium rounded-md transition-all duration-200';
  
  const variantClasses = {
    primary: 'bg-slate-800 text-white hover:bg-slate-700',
    secondary: 'bg-blue-600 text-white hover:bg-blue-700',
    outline: 'border border-slate-300 text-slate-700 hover:bg-slate-50'
  };

  return (
    <button 
      type={type}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  );
};
