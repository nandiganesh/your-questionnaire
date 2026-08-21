import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  questionText: string;
  isAnimating: boolean;
}

export default function QuestionScreen({ children, questionText, isAnimating }: Props) {
  return (
    <div 
      style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        padding: '32px 24px 64px 24px',
        width: '100%',
        maxWidth: '520px',
        margin: '0 auto',
        opacity: isAnimating ? 0 : 1,
        transform: isAnimating ? 'translateY(12px)' : 'translateY(0)',
        transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
      }}
    >
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <h2 style={{
          fontSize: '26px',
          lineHeight: '1.3',
          marginBottom: '40px',
          color: 'var(--text-primary)',
          letterSpacing: '0.02em',
        }}>
          {questionText}
        </h2>
        
        <div style={{ width: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
