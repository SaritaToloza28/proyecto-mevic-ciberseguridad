import React from 'react';
import { Users, Shield, Sword, Eye } from 'lucide-react';

export default function Equipos() {
  return (
    <div className="dashboard-container">
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Equipos y Modelos</h1>
          <p className="hero-subtitle">Roles tácticos en la ciberseguridad moderna</p>
          <p className="hero-description">
            Clasificación de los equipos ofensivos, defensivos y perfiles éticos de piratería informática.
          </p>
        </div>
        <div className="hero-shield-container">
          <Users className="animated-shield" size={100} />
        </div>
      </section>

      <section>
        <h2 className="section-title"><Users size={20} /> Dinámica de Equipos</h2>
        <div className="teams-grid">
          <div className="team-card red">
            <h3>Red Team</h3>
            <p>Operaciones ofensivas. Simulan ataques reales usando tácticas, técnicas y procedimientos (TTPs) de adversarios avanzados.</p>
          </div>
          <div className="team-card blue">
            <h3>Blue Team</h3>
            <p>Operaciones defensivas. Encargados del monitoreo (SOC), análisis de logs, endurecimiento de sistemas y respuesta a incidentes.</p>
          </div>
          <div className="team-card purple">
            <h3>Purple Team</h3>
            <p>Colaboración estrecha entre Red y Blue Team para validar defensas en tiempo real y optimizar la detección.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="section-title"><Eye size={20} /> Clasificación de Sombreros (Hackers)</h2>
        <div className="chapters-grid">
          <div className="chapter-card">
            <h3>White Hat</h3>
            <p>Especialistas en seguridad ética que buscan vulnerabilidades con autorización previa para proteger los sistemas.</p>
          </div>
          <div className="chapter-card">
            <h3>Black Hat</h3>
            <p>Ciberdelincuentes que explotan fallos de seguridad con fines lucrativos, maliciosos o de sabotaje.</p>
          </div>
          <div className="chapter-card">
            <h3>Grey Hat</h3>
            <p>Actúan sin autorización pero generalmente sin intenciones maliciosas, a menudo notificando los fallos a los afectados.</p>
          </div>
        </div>
      </section>
    </div>
  );
}