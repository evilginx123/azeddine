import React, { useState } from 'react';

const RatingPage = ({ onClose, theme }) => {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating > 0 && feedback.trim()) {
      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 2000);
    }
  };

  return (
    <div className="page-overlay show" style={{
      position: 'fixed',
      inset: 0,
      zIndex: 1500,
      background: 'var(--bg)',
      overflowY: 'auto',
      display: 'block',
      opacity: 1
    }}>
      <div className="min-h-screen">
        <nav className="navbar scrolled">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button 
                onClick={onClose}
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{
                  background: 'var(--bg2)',
                  border: '1px solid var(--border)',
                  color: 'var(--text2)',
                  cursor: 'pointer'
                }}
              >
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
              <span className="font-rakkas text-lg" style={{ color: 'var(--text)' }}>تقييم الموقع</span>
            </div>
          </div>
        </nav>

        <div className="max-w-3xl mx-auto px-4 py-20">
          {submitted ? (
            <div className="text-center reveal visible">
              <div className="icon-circle mx-auto mb-4" style={{
                width: '80px',
                height: '80px',
                fontSize: '32px'
              }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--primary)' }}></i>
              </div>
              <h1 className="font-rakkas text-3xl mb-3" style={{ color: 'var(--text)' }}>شكراً لك!</h1>
              <p style={{ color: 'var(--text2)' }}>شكراً على تقييمك وملاحظاتك القيمة</p>
            </div>
          ) : (
            <>
              <div className="text-center mb-12 reveal visible">
                <div className="icon-circle mx-auto mb-4" style={{
                  width: '80px',
                  height: '80px',
                  fontSize: '32px'
                }}>
                  <i className="fas fa-star"></i>
                </div>
                <h1 className="font-rakkas text-3xl mb-3" style={{ color: 'var(--text)' }}>
                  تقييم الموقع
                </h1>
                <p style={{ color: 'var(--text2)' }}>شارك رأيك وساعدنا على التحسين</p>
              </div>

              <div className="glass-card p-8 reveal visible">
                <div className="text-center mb-8">
                  <p className="text-sm mb-4" style={{ color: 'var(--text)' }}>
                    كيف تقيم الموقع؟
                  </p>
                  <div className="flex justify-center gap-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        onClick={() => handleRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        style={{
                          fontSize: '2.5rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s',
                          color: (hoveredRating || rating) >= star ? 'var(--gold)' : 'var(--bg2)',
                          transform: (hoveredRating || rating) >= star ? 'scale(1.1)' : 'scale(1)'
                        }}
                      >
                        <i className="fas fa-star"></i>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold mb-2" style={{ color: 'var(--text)' }}>
                    ملاحظاتك
                  </label>
                  <textarea 
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="form-input"
                    rows="5"
                    placeholder="شارك رأيك وملاحظاتك..."
                    style={{ resize: 'vertical' }}
                  ></textarea>
                </div>

                <button 
                  onClick={handleSubmit}
                  disabled={rating === 0 || !feedback.trim()}
                  className="btn-primary w-full justify-center"
                  style={{
                    opacity: (rating === 0 || !feedback.trim()) ? 0.5 : 1,
                    cursor: (rating === 0 || !feedback.trim()) ? 'not-allowed' : 'pointer'
                  }}
                >
                  <i className="fas fa-check"></i> إرسال التقييم
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
