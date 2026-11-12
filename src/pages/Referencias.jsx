import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

export default function Referencias() {
  const refs = [
    { name: "NIST (National Institute of Standards and Technology)", desc: "Marcos de ciberseguridad y guías de gestión de riesgos." },
    { name: "MITRE ATT&CK", desc: "Base de conocimiento accesible globalmente sobre tácticas y técnicas de adversarios." },
    { name: "OWASP (Open Worldwide Application Security Project)", desc: "Proyecto enfocado en la seguridad de aplicaciones web (ej. OWASP Top 10)." },
    { name: "ISO/IEC 27001", desc: "Estándar internacional para Sistemas de Gestión de Seguridad de la Información (SGSI)." }
  ];

  return (
    <div className="dashboard-container">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>VII. Referencias</h1>
          <p className="hero-subtitle">Estándares internacionales y bibliografía</p>
          <p className="hero-description">
            Marcos normativos, guías técnicas y fuentes de consulta que respaldan el contenido de CYBERLAB.
          </p>
        </div>
        <div className="hero-shield-container">
          <FileText className="animated-shield" size={100} />
        </div>
      </section>

      <section>
        <h2 className="section-title"><FileText size={20} /> Estándares de Referencia</h2>
        <div className="chapters-grid">
          {refs.map((r, i) => (
            <div key={i} className="chapter-card">
              <h3>{r.name}</h3>
              <p style={{ marginTop: '0.5rem' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}