import { useState } from 'react';
import type { Question } from '../questions';
import { ArrowRight } from 'lucide-react';

interface Props {
  question: Question;
  onAnswer: (answer: string) => void;
  defaultValue?: string;
}

export default function MultipleChoice({ question, onAnswer, defaultValue = '' }: Props) {
  // If the default value isn't one of the standard options (by english key), it must be an "Other" answer
  const standardOptionKeys = question.options?.map(o => o.en) || [];
  const isOtherDefault = defaultValue !== '' && !standardOptionKeys.includes(defaultValue);
  
  const [selected, setSelected] = useState<string>(isOtherDefault ? 'Other' : defaultValue);
  const [otherValue, setOtherValue] = useState<string>(isOtherDefault ? defaultValue : '');

  const handleSelect = (optionKey: string) => {
    setSelected(optionKey);
    
    // Auto-advance for standard options
    setTimeout(() => {
      onAnswer(optionKey);
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
        if (option.en === 'Other') return null; // We'll render this specifically below

        const isSelected = selected === option.en;
        
        return (
          <button
            key={option.en}
            onClick={() => handleSelect(option.en)}
            className="subtle-scale"
            style={{
              width: '100%',
              textAlign: 'left',
              padding: '18px 20px',
              backgroundColor: isSelected ? 'var(--accent-light)' : 'var(--bg-secondary)',
              border: `1px solid ${isSelected ? 'var(--accent-color)' : 'var(--border-color)'}`,
              borderRadius: '8px',
              color: 'var(--text-primary)',
              outline: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}
          >
            <span style={{ fontSize: '16px' }}>{option.mr}</span>
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{option.en}</span>
          </button>
        );
      })}

      {standardOptionKeys.includes('Other') && (
        <div style={{ position: 'relative', width: '100%' }}>
          <input
            type="text"
            value={otherValue}
            onChange={(e) => {
              setOtherValue(e.target.value);
              setSelected('Other');
            }}
            onFocus={() => setSelected('Other')}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleOtherSubmit();
            }}
            placeholder="इतर... / Other..."
            style={{
              width: '100%',
              padding: '16px 48px 16px 20px',
              backgroundColor: selected === 'Other' || otherValue ? 'var(--bg-primary)' : 'var(--bg-secondary)',
              border: `1px solid ${selected === 'Other' || otherValue ? 'var(--accent-color)' : 'var(--border-color)'}`,
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
