import { useState, useEffect } from 'react';
import OpeningScreen from './components/OpeningScreen';
import ProgressIndicator from './components/ProgressIndicator';
import QuestionScreen from './components/QuestionScreen';
import MultipleChoice from './components/MultipleChoice';
import TextInputQuestion from './components/TextInputQuestion';
import TextareaQuestion from './components/TextareaQuestion';
import FinalScreen from './components/FinalScreen';
import FixedHearts from './components/FixedHearts';
import { questions } from './questions';
import './index.css';

export default function App() {
  const [showOpening, setShowOpening] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isAnimating, setIsAnimating] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isReady, setIsReady] = useState(false);

  // Initialize from localStorage
  useEffect(() => {
    const savedIndex = localStorage.getItem('questionnaire_index');
    const savedAnswers = localStorage.getItem('questionnaire_answers');
    
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
    
    if (savedIndex) {
      const idx = parseInt(savedIndex, 10);
      if (idx > 0) {
        setCurrentIndex(idx);
        setShowOpening(false);
        if (idx >= questions.length) {
          setIsFinished(true);
        }
      }
    }
    setIsReady(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (!isReady) return;
    localStorage.setItem('questionnaire_index', currentIndex.toString());
    localStorage.setItem('questionnaire_answers', JSON.stringify(answers));
  }, [currentIndex, answers, isReady]);

  const submitToWeb3Forms = async (finalAnswers: Record<number, string>) => {
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) {
        console.warn('No Web3Forms access key found in .env');
        return;
      }

      // Map answers to human readable format using the English text as keys
      const formattedData: Record<string, any> = {
        access_key: accessKey,
        subject: 'New Questionnaire Submission! 💌',
      };

      questions.forEach(q => {
        formattedData[q.text.en] = finalAnswers[q.id] || 'No answer';
      });

      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formattedData)
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  const handleAnswer = (answer: string) => {
    // Record the answer
    const currentQ = questions[currentIndex];
    const newAnswers = { ...answers, [currentQ.id]: answer };
    setAnswers(newAnswers);
    
    // Transition to next question
    setIsAnimating(true);
    
    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsFinished(true);
        setCurrentIndex(questions.length); // mark as completely done
        // Submit to email
        submitToWeb3Forms(newAnswers);
      }
      // Wait a tiny bit before animating back in for a smooth feel
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 400); // Wait for fade out
  };

  const currentQuestion = questions[currentIndex];

  const renderQuestionInput = () => {
    if (!currentQuestion) return null;
    
    const defaultValue = answers[currentQuestion.id] || '';

    switch (currentQuestion.type) {
      case 'multiple_choice':
      case 'two_option':
        return (
          <MultipleChoice
            key={currentQuestion.id} // Force re-mount on new question
            question={currentQuestion}
            onAnswer={handleAnswer}
            defaultValue={defaultValue}
          />
        );
      case 'short_text':
        return (
          <TextInputQuestion
            key={currentQuestion.id}
            placeholder={currentQuestion.placeholder}
            onAnswer={handleAnswer}
            defaultValue={defaultValue}
          />
        );
      case 'large_text':
        return (
          <TextareaQuestion
            key={currentQuestion.id}
            placeholder={currentQuestion.placeholder}
            onAnswer={handleAnswer}
            defaultValue={defaultValue}
          />
        );
      default:
        return null;
    }
  };

  if (!isReady) return null; // Avoid hydration mismatch visually

  return (
    <>
      <FixedHearts />
      
      {showOpening && !isFinished && (
        <OpeningScreen onComplete={() => setShowOpening(false)} />
      )}
      
      {!showOpening && !isFinished && (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          maxWidth: '520px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10
        }}>
          <ProgressIndicator current={currentIndex + 1} total={questions.length} />
          
          <QuestionScreen 
            question={currentQuestion} 
            isAnimating={isAnimating}
          >
            {renderQuestionInput()}
          </QuestionScreen>
        </div>
      )}

      {isFinished && <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', flexDirection: 'column' }}><FinalScreen /></div>}
    </>
  );
}
