export default function ProgressIndicator({ current, total }: { current: number, total: number }) {
  const progress = (current / total) * 100;
  
  return (
    <div style={{
      width: '100%',
      padding: '24px 24px 0 24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }}>
      <div style={{
        fontSize: '13px',
        color: 'var(--text-muted)',
        letterSpacing: '0.05em',
        fontFamily: 'var(--font-sans)',
      }}>
        {current.toString().padStart(2, '0')} / {total}
      </div>
      <div style={{
        width: '100%',
        height: '1px',
        backgroundColor: 'var(--border-color)',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '1px',
          width: `${progress}%`,
          backgroundColor: 'var(--accent-color)',
          transition: 'width 0.5s ease-out'
        }} />
      </div>
    </div>
  );
}
