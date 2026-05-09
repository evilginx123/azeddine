import React, { useState, useEffect } from 'react';

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{
      background: 'var(--bg)',
      color: 'var(--text)',
      transition: 'background 0.5s, color 0.5s',
      minHeight: '100vh'
    }}>
      {/* Navigation */}
      <nav className="navbar" id="navbar" style={{
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
        background: 'var(--glass)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid var(--glass-border)',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1rem',
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          {/* Logo */}
          <a href="#/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(135deg, var(--primary), var(--gold))'
            }}>
              <i className="fas fa-mosque" style={{ color: 'white', fontSize: '14px' }}></i>
            </div>
            <span style={{ fontFamily: 'Rakkas', fontSize: '18px', color: 'var(--text)' }}>عزالدين جيلالي</span>
          </a>

          {/* Theme Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <button
              onClick={toggleTheme}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'var(--bg2)',
                border: '1px solid var(--border)',
                color: 'var(--text2)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            >
              <i className={`fas fa-${theme === 'dark' ? 'sun' : 'moon'} text-sm`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginTop: '64px'
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          backgroundImage: 'radial-gradient(circle at 50% 30%, rgba(249,115,22,0.08) 0%, transparent 50%)',
          pointerEvents: 'none'
        }}></div>

        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '1rem'
        }}>
          <p style={{
            fontFamily: 'Rakkas',
            fontSize: '2rem',
            color: 'var(--gold)',
            textShadow: '0 0 20px rgba(212,168,67,0.3)',
            marginBottom: '24px'
          }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>

          {/* Avatar */}
          <div style={{
            width: '180px',
            height: '180px',
            borderRadius: '50%',
            margin: '0 auto 24px',
            padding: '4px',
            background: 'conic-gradient(from 0deg, var(--primary), var(--gold), var(--primary))',
            boxShadow: '0 0 40px rgba(249,115,22,0.3)',
            animation: 'rotateRing 6s linear infinite',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              background: 'var(--bg3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '64px',
              color: 'var(--primary)'
            }}>
              <i className="fas fa-mosque"></i>
            </div>
          </div>

          <h1 style={{
            fontFamily: 'Rakkas',
            fontSize: '3rem',
            marginBottom: '12px',
            color: 'var(--text)'
          }}>
            عزالدين جيلالي
          </h1>

          <p style={{
            fontSize: '1.25rem',
            fontWeight: 'bold',
            marginBottom: '16px',
            color: 'var(--primary)'
          }}>
            Coding Imam
          </p>

          <p style={{
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto 12px',
            color: 'var(--text2)',
            lineHeight: '1.9'
          }}>
            إمام مسجد عمر بن الخطاب — قرية الجفافلة، وهران، الجزائر
          </p>

          <div style={{ marginTop: '32px', display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: 'linear-gradient(to left, var(--primary), var(--primary-dark))',
              color: '#fff',
              padding: '12px 28px',
              borderRadius: '12px',
              border: 'none',
              fontWeight: '700',
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s'
            }}>
              <i className="fas fa-rocket"></i> استعرض المشاريع
            </button>
            <button style={{
              background: 'transparent',
              color: 'var(--primary)',
              padding: '12px 28px',
              borderRadius: '12px',
              border: '1px solid var(--primary)',
              fontWeight: '700',
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              transition: 'all 0.3s'
            }}>
              <i className="fas fa-envelope"></i> تواصل معي
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        background: 'var(--bg2)',
        borderTop: '1px solid var(--border)',
        borderBottom: '1px solid var(--border)',
        padding: '40px 0'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '0'
        }}>
          {[
            { num: '5', label: 'سنوات الخبرة' },
            { num: '15', label: 'مشروع مكتمل' },
            { num: '200', label: 'مستفيد' },
            { num: '50', label: 'نشاط دعوي' }
          ].map((stat, idx) => (
            <div key={idx} style={{
              textAlign: 'center',
              padding: '24px 16px',
              borderLeft: idx < 3 ? '1px solid var(--border)' : 'none'
            }}>
              <div style={{
                fontSize: '2rem',
                fontWeight: '900',
                color: 'var(--primary)',
                lineHeight: 1
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: '0.85rem',
                color: 'var(--text2)',
                marginTop: '4px'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section style={{
        padding: '80px 1rem',
        position: 'relative'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <h2 style={{
              fontFamily: 'Rakkas',
              fontSize: '2.2rem',
              color: 'var(--text)',
              position: 'relative',
              display: 'inline-block'
            }}>
              المشاريع البرمجية
            </h2>
            <p style={{
              marginTop: '24px',
              color: 'var(--text2)',
              maxWidth: '500px',
              margin: '24px auto 0'
            }}>
              حلول تقنية إسلامية ومجتمعية مبنية بأحدث التقنيات
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            {[
              {
                icon: 'fa-quran',
                title: 'مصحف تفاعلي',
                desc: 'تطبيق ويب لقراءة القرآن الكريم مع تفسير مبسط'
              },
              {
                icon: 'fa-clock',
                title: 'مواقيت الصلاة',
                desc: 'أداة دقيقة لحساب أوقات الصلاة حسب الموقع'
              },
              {
                icon: 'fa-mosque',
                title: 'إدارة المسجد',
                desc: 'نظام متكامل لإدارة شؤون المسجد'
              }
            ].map((project, idx) => (
              <div key={idx} style={{
                background: 'var(--glass)',
                backdropFilter: 'blur(12px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '16px',
                padding: '24px',
                transition: 'all 0.4s',
                cursor: 'pointer'
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(249,115,22,0.1)',
                  border: '1px solid rgba(249,115,22,0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  color: 'var(--primary)',
                  marginBottom: '16px'
                }}>
                  <i className={`fas ${project.icon}`}></i>
                </div>
                <h3 style={{
                  fontWeight: 'bold',
                  fontSize: '1.125rem',
                  marginBottom: '8px',
                  color: 'var(--text)'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--text2)',
                  lineHeight: '1.8'
                }}>
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: 'var(--bg)',
        borderTop: '1px solid var(--border)',
        padding: '48px 1rem 12px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <div style={{
            textAlign: 'center',
            paddingTop: '12px',
            borderTop: '1px solid var(--border)'
          }}>
            <p style={{ fontSize: '0.75rem', color: 'var(--text3)' }}>
              © 2025 عزالدين جيلالي — Coding Imam | جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
