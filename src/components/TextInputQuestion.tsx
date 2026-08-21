import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  placeholder?: string;
  onAnswer: (answer: string) => void;
  defaultValue?: string;
}

export default function TextInputQuestion({ placeholder, onAnswer, defaultValue = '' }: Props) {
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = () => {
    if (value.trim()) {
      onAnswer(value.trim());
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', marginTop: '16px' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') handleSubmit();
        }}
        placeholder={placeholder}
        style={{
          width: '100%',
          padding: '16px 48px 16px 20px',
          backgroundColor: isFocused ? 'var(--bg-primary)' : 'var(--bg-secondary)',
          border: `1px solid ${isFocused || value ? 'var(--accent-color)' : 'var(--border-color)'}`,
          borderRadius: '8px',
          fontSize: '16px',
          color: 'var(--text-primary)',
          outline: 'none',
          transition: 'all 0.3s ease',
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          position: 'absolute',
          right: '0',
          bottom: '12px',
          padding: '8px',
          color: value.trim() ? 'var(--text-primary)' : 'var(--text-muted)',
          transition: 'color 0.2s ease, transform 0.2s ease',
          transform: value.trim() ? 'translateX(0)' : 'translateX(-4px)',
          opacity: value.trim() ? 1 : 0.5,
        }}
      >
        <ArrowRight size={20} strokeWidth={1.5} />
      </button>
    </div>
  );
}
