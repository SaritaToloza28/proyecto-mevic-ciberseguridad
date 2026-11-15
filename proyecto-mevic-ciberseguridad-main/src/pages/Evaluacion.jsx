import React from 'react';
import { BarChart3, Activity } from 'lucide-react';

export default function Evaluacion() {
  return (
    <div className="dashboard-container">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Evaluación</h1>
          <p className="hero-subtitle">Métricas, resultados y trazabilidad</p>
          <p className="hero-description">
            Modelos cuantitativos y cualitativos para medir el nivel de seguridad, impacto de vulnerabilidades y validación de controles.
          </p>
        </div>
        <div className="hero-shield-container">
          <BarChart3 className="animated-shield" size={100} />
        </div>
      </section>

      <section>
        <h2 className="section-title"><Activity size={20} /> Criterios de Medición</h2>
        <div className="teams-grid">
          <div className="team-card blue">
            <h3>CVSS (Common Vulnerability Scoring System)</h3>
            <p>Estándar industrial para evaluar la severidad de las vulnerabilidades informáticas basado en métricas base, temporales y ambientales.</p>
          </div>
          <div className="team-card purple">
            <h3>KPIs de Seguridad</h3>
            <p>Indicadores clave de desempeño orientados a medir tiempos de detección (MTTD) y tiempo de respuesta (MTTR).</p>
          </div>
        </div>
      </section>
    </div>
  );
}