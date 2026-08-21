import { RotateCcw } from 'lucide-react';

interface Props {
  onReset: () => void;
}

export default function FinalScreen({ onReset }: Props) {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
      padding: '24px',
      textAlign: 'center',
      animation: 'fade-in 1s ease-out'
    }}>
      <div className="slide-up" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{
            fontSize: '42px',
            fontFamily: 'var(--font-serif)',
            color: 'var(--text-primary)',
            letterSpacing: '0.05em',
            margin: 0
          }}>
            धन्यवाद
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
            margin: 0
          }}>
            Thank you.
          </p>
        </div>

        <p style={{
          fontSize: '15px',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          margin: 0
        }}>
          Now I know a little more about you.
        </p>

        <div style={{
          marginTop: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '24px',
        }}>
          <div style={{ color: 'var(--text-muted)', opacity: 0.7 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22c0-8 6-12 6-12s-4 0-6 3c-2-3-6-3-6-3s6 4 6 12z" />
              <path d="M12 10V22" />
            </svg>
          </div>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', opacity: 0.6 }}>🤍</span>
        </div>
      </div>

      <button 
        onClick={onReset}
        className="subtle-scale"
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--text-muted)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '16px',
          cursor: 'pointer',
          fontFamily: 'var(--font-sans)',
          fontSize: '14px',
          opacity: 0.7,
          transition: 'opacity 0.2s',
          marginBottom: '16px'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
      >
        <RotateCcw size={16} />
        Start Again
      </button>
    </div>
  );
}
