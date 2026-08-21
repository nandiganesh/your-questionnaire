import { useState } from 'react';
import type { Question } from '../questions';
import { ArrowRight } from 'lucide-react';

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
  defaultValue?: string;
}

export default function MultipleChoice({ question, onAnswer, defaultValue = '' }: Props) {
  // If the default value isn't one of the standard options, it must be an "Other" answer
  const isOtherDefault = defaultValue !== '' && !question.options?.includes(defaultValue);
  const [selected, setSelected] = useState<string>(isOtherDefault ? 'इतर' : defaultValue);
  const [otherValue, setOtherValue] = useState<string>(isOtherDefault ? defaultValue : '');

  const handleSelect = (option: string) => {
    setSelected(option);
    
    // Auto-advance for standard options
    setTimeout(() => {
      onAnswer(option);
    }, 350);
  };

  const handleOtherSubmit = () => {
    if (otherValue.trim()) {
      onAnswer(otherValue.trim());
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
      {question.options?.map((option) => {
        if (option === 'इतर') return null; // We'll render this specifically below

        const isSelected = selected === option;
        
        return (
          <button
            key={option}
            onClick={() => handleSelect(option)}
            className="subtle-scale"
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '18px 20px',
              backgroundColor: isSelected ? 'var(--accent-light)' : 'var(--bg-secondary)',
              border: `1px solid ${isSelected ? 'var(--accent-color)' : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontSize: '15px',
              color: 'var(--text-primary)',
              outline: 'none',
              cursor: 'pointer',
            }}
          >
            {option}
          </button>
        );
      })}

      {question.options?.includes('इतर') && (
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            value={otherValue}
            onChange={(e) => {
              setOtherValue(e.target.value);
              setSelected('इतर');
            }}
            onFocus={() => setSelected('इतर')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleOtherSubmit();
            }}
            placeholder="इतर..."
            style={{
              width: '100%',
              padding: '16px 48px 16px 20px',
              backgroundColor: selected === 'इतर' || otherValue ? 'var(--bg-primary)' : 'var(--bg-secondary)',
              border: `1px solid ${selected === 'इतर' || otherValue ? 'var(--accent-color)' : 'var(--border-color)'}`,
              borderRadius: '8px',
              fontSize: '15px',
              color: 'var(--text-primary)',
              outline: 'none',
              transition: 'all 0.3s ease',
            }}
          />
          <button
            onClick={handleOtherSubmit}
            style={{
              position: 'absolute',
              right: '8px',
              top: '50%',
              transform: `translateY(-50%) ${otherValue.trim() ? 'translateX(0)' : 'translateX(-4px)'}`,
              padding: '8px',
              color: otherValue.trim() ? 'var(--text-primary)' : 'var(--text-muted)',
              transition: 'color 0.2s ease, transform 0.2s ease',
              opacity: otherValue.trim() ? 1 : 0.5,
            }}
          >
            <ArrowRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}
