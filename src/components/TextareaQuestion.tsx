import { useState, useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface Props {
  placeholder?: string;
  onAnswer: (answer: string) => void;
  defaultValue?: string;
}

export default function TextareaQuestion({ placeholder, onAnswer, defaultValue = '' }: Props) {
  const [value, setValue] = useState(defaultValue);
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.max(60, textareaRef.current.scrollHeight)}px`;
    }
  }, [value]);

  const handleSubmit = () => {
    if (value.trim()) {
      onAnswer(value.trim());
    }
  };

  return (
    <div style={{ position: 'relative', width: '100%', marginTop: '16px' }}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) handleSubmit();
        }}
        placeholder={placeholder}
        style={{
          width: '100%',
          minHeight: '80px',
          padding: '16px 48px 16px 20px',
          backgroundColor: isFocused ? 'var(--bg-primary)' : 'var(--bg-secondary)',
          border: `1px solid ${isFocused || value ? 'var(--accent-color)' : 'var(--border-color)'}`,
          borderRadius: '8px',
          fontSize: '16px',
          color: 'var(--text-primary)',
          outline: 'none',
          resize: 'none',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
          lineHeight: '1.5',
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          position: 'absolute',
          right: '0',
          bottom: '16px',
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
