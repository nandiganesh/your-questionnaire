import type { ReactNode } from 'react';
import type { Question } from '../questions';

interface Props {
  children: ReactNode;
  question: Question;
  isAnimating: boolean;
}

export default function QuestionScreen({ children, question, isAnimating }: Props) {
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
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{
            fontSize: '26px',
            lineHeight: '1.3',
            color: 'var(--text-primary)',
            letterSpacing: '0.02em',
            marginBottom: '8px'
          }}>
            {question.text.mr}
          </h2>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            fontFamily: 'var(--font-sans)',
            letterSpacing: '0.01em',
            opacity: 0.8
          }}>
            {question.text.en}
          </p>
        </div>
        
        <div style={{ width: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
