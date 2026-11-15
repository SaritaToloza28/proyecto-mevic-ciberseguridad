import React from 'react';
import { Cpu, Globe, Lock, FileSearch, UserCheck } from 'lucide-react';

export default function Areas() {
  return (
    <div className="dashboard-container">
      <section className="hero-banner">
        <div className="hero-content">
             <h1>Áreas de Ciberseguridad</h1>
                <p className="hero-subtitle">Dominios especializados de estudio y práctica</p>
                <p className="hero-description">
                Desglose de las principales disciplinas tácticas y técnicas abordadas en el framework.
                </p>
        </div>
        {/* Opcional: si quieres que también tenga un icono animado a la derecha como el Dashboard */}
        <div className="hero-shield-container">
          <Cpu className="animated-shield" size={100} />
        </div>
      </section>

      <section>
        <div className="chapters-grid">
          <div className="chapter-card">
            <h3>OSINT</h3>
            <p>Inteligencia de fuentes abiertas para la recolección de información pública sobre objetivos.</p>
          </div>
          <div className="chapter-card">
            <h3>Seguridad en Aplicaciones</h3>
            <p>Auditoría de código, OWASP Top 10 y análisis de vulnerabilidades web.</p>
          </div>
          <div className="chapter-card">
            <h3>Redes y Comunicaciones</h3>
            <p>Análisis de tráfico, segmentación, firewalls y detección de intrusiones (IDS/IPS).</p>
          </div>
          <div className="chapter-card">
            <h3>Informática Forense</h3>
            <p>Adquisición, preservación y análisis de evidencias digitales tras un incidente.</p>
          </div>
          <div className="chapter-card">
            <h3>Factor Humano (Ing. Social)</h3>
            <p>Concienciación, análisis de vulnerabilidades asociadas a la ingeniería social y phishing.</p>
          </div>
        </div>
      </section>
    </div>
  );
}