export default function FinalScreen() {
  return (
    <div style={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
      textAlign: 'center',
    }}>
      <div className="slide-up" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{
            fontSize: '28px',
            fontFamily: 'var(--font-serif)',
            color: 'var(--text-primary)',
            letterSpacing: '0.05em',
          }}>
            धन्यवाद
          </h1>
          <p style={{
            fontSize: '14px',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}>
            Thank you.
          </p>
        </div>

        <p style={{
          fontSize: '15px',
          color: 'var(--text-primary)',
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
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
    </div>
  );
}
