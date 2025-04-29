import { ReactNode } from 'react';

interface ContactItemProps {
  icon: ReactNode;
  label: string;
  content: string;
  href?: string;
  isExternal?: boolean;
  className?: string;
}

export const ContactItem = ({ 
  icon, 
  label, 
  content, 
  href, 
  isExternal = false, 
  className 
}: ContactItemProps) => (
  <div className="flex items-center space-x-4">
    <div className="bg-white/10 p-3 rounded-full">
      {icon}
    </div>
    <div>
      <p className="text-white/60 text-sm font-body">{label}</p>
      {href ? (
        <a 
          href={href} 
          target={isExternal ? "_blank" : undefined} 
          rel={isExternal ? "noopener noreferrer" : undefined} 
          className={`text-white hover:text-white/80 transition-colors ${className}`}
        >
          {content}
        </a>
      ) : (
        <span className="text-white">{content}</span>
      )}
    </div>
  </div>
); 