import React from "react";

interface ButtonProps {
  href: string;
  text: string;
  icon?: React.ReactNode; // Optional icon prop
}

const CustomButton: React.FC<ButtonProps> = ({ href, text, icon }) => {
  return (
    <a
      href={href}
      className="box-border relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-primary rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 hover:ring-offset-indigo-500 ease focus:outline-none"
    >
      <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 group-hover:translate-x-0"></span>
      <span className="relative z-20 flex items-center text-sm">
        {icon && (
          <span className="relative w-5 h-5 mr-2 text-white">{icon}</span>
        )}
        {text}
      </span>
    </a>
  );
};

export const ButtonCustom: React.FC<ButtonProps> = ({ href, text }) => {
  return (
    <a
      href={href}
      className="relative px-6 py-3 font-bold text-white rounded-lg group"
    >
      <span className="absolute inset-0 w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-purple-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
      <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-800 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
      <span className="relative">{text}</span>
    </a>
  );
};

export default CustomButton;
