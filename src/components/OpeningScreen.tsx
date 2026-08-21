import { useEffect, useState } from 'react';

interface OpeningScreenProps {
  onComplete: () => void;
}

export default function OpeningScreen({ onComplete }: OpeningScreenProps) {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStep(1), 1500);
    const timer2 = setTimeout(() => setStep(2), 3000);
    const timer3 = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--bg-primary)',
        zIndex: 50,
        transition: 'opacity 1s ease-out',
        opacity: step === 2 ? 0 : 1,
        pointerEvents: step === 2 ? 'none' : 'auto',
      }}
    >
      <button 
        onClick={onComplete}
        style={{
          position: 'absolute',
          top: '24px',
          right: '24px',
          fontSize: '14px',
          color: 'var(--text-muted)',
          letterSpacing: '0.05em',
          padding: '8px',
          zIndex: 10,
        }}
      >
        Skip
      </button>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '320px',
        padding: '0 24px',
        textAlign: 'center',
      }}>
        <div style={{ marginBottom: '40px', color: 'var(--text-muted)', opacity: 0.7 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22c0-8 6-12 6-12s-4 0-6 3c-2-3-6-3-6-3s6 4 6 12z" />
            <path d="M12 10V22" />
          </svg>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <div className="slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <h1 style={{
              fontSize: '24px',
              fontFamily: 'var(--font-serif)',
              color: 'var(--text-primary)',
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              थोडंसं, तुझ्याबद्दल.
            </h1>
            <p style={{
              fontSize: '12px',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase'
            }}>
              A little bit about you.
            </p>
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            transition: 'opacity 1s ease-in-out',
            opacity: step >= 1 ? 1 : 0
          }}>
            <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '18px' }}>
              15 questions.
            </p>
            <p style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '18px' }}>
              Just for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
