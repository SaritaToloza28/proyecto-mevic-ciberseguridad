import React from 'react';
import { GitBranch, CheckCircle2 } from 'lucide-react';

export default function Metodologia() {
  const fases = [
    { num: "01", title: "Preparación", desc: "Definición de alcances, recursos, objetivos y autorizaciones legales." },
    { num: "02", title: "Prevención", desc: "Implementación de políticas de seguridad, parches y endurecimiento de activos." },
    { num: "03", title: "Identificación", desc: "Reconocimiento, escaneo de puertos y descubrimiento de vectores de ataque." },
    { num: "04", title: "Análisis", desc: "Evaluación de vulnerabilidades encontradas y análisis de riesgos asociados." },
    { num: "05", title: "Mitigación", desc: "Aplicación de contramedidas, corrección de fallos y contención de amenazas." },
    { num: "06", title: "Verificación", desc: "Pruebas posteriores para comprobar la efectividad de las soluciones implementadas." }
  ];

  return (
    <div className="dashboard-container">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Metodología</h1>
          <p className="hero-subtitle">Ciclo de vida del marco de evaluación</p>
          <p className="hero-description">
            Las seis fases estructuradas que guían el proceso de auditoría y análisis de seguridad dentro de CYBERLAB.
          </p>
        </div>
        <div className="hero-shield-container">
          <GitBranch className="animated-shield" size={100} />
        </div>
      </section>

      <section>
        <h2 className="section-title"><GitBranch size={20} /> Fases del Marco</h2>
        <div className="chapters-grid">
          {fases.map((f, i) => (
            <div key={i} className="chapter-card">
              <div className="card-header">
                <span className="step-number" style={{ fontSize: '1.2rem' }}>{f.num}</span>
                <h3>{f.title}</h3>
              </div>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}