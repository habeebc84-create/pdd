import React from 'react';

export const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const variants = {
    primary: 'bg-primary-blue text-white hover:bg-blue-700',
    secondary: 'bg-white text-navy border border-border hover:bg-slate-50',
    outline: 'bg-transparent border border-primary-blue text-primary-blue hover:bg-blue-50',
    ghost: 'bg-transparent text-text-secondary hover:bg-slate-100',
  };

  return (
    <button
      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 active:scale-95 ${variants[variant as keyof typeof variants]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export const Card = ({ children, className = '' }: any) => (
  <div className={`bg-white rounded-xl border border-border shadow-sm p-6 ${className}`}>
    {children}
  </div>
);

export const Badge = ({ children, color = 'blue' }: any) => {
  const colors = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    yellow: 'bg-yellow-100 text-yellow-700',
    gray: 'bg-slate-100 text-slate-700',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${colors[color as keyof typeof colors]}`}>
      {children}
    </span>
  );
};
