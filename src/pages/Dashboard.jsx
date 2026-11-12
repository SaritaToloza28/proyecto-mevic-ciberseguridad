import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  GitBranch, 
  Cpu, 
  Terminal, 
  BarChart3, 
  FileText,
  ArrowRight,
  ShieldCheck,
  Layers,
  Activity,
  Shield
} from 'lucide-react';
import { laboratorios } from '../data/laboratorios';

export default function Dashboard() {
  // Los dos laboratorios más recientes (los últimos de la lista)
  const recentLabs = laboratorios.slice(-2);

  const chapters = [
    { title: "I. Fundamentación", desc: "Principios y conceptos clave", path: "/fundamentacion", icon: BookOpen },
    { title: "II. Equipos", desc: "Red, Blue y Purple Team", path: "/equipos", icon: Users },
    { title: "III. Metodología", desc: "Fases del marco de evaluación", path: "/metodologia", icon: GitBranch },
    { title: "IV. Áreas", desc: "OSINT, Redes, Forense y más", path: "/areas", icon: Cpu },
    { title: "V. Laboratorios", desc: "Prácticas y evidencias", path: "/laboratorios", icon: Terminal },
    { title: "VI. Referencias", desc: "NIST, MITRE, OWASP e ISO", path: "/referencias", icon: FileText }
  ];

  const methodologyPhases = [
    { step: "01", name: "Preparación" },
    { step: "02", name: "Prevención" },
    { step: "03", name: "Identificación" },
    { step: "04", name: "Análisis" },
    { step: "05", name: "Mitigación" },
    { step: "06", name: "Verificación" }
  ];

  return (

    <div className="dashboard-container">
      {/* 1. Bloque Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>MEVIC</h1>
          <p className="hero-description">
            Aprende. Analiza. Protege. Un marco metodológico estructurado para evaluar,
            auditar y comprender las dinámicas de la ciberseguridad en entornos controlados.
          </p>
        </div>
        <div className="hero-shield-container">
          <Shield className="animated-shield" size={110} />
        </div>
      </section>

      {/* 2. Bloque Explorar Conocimientos (Tarjetas Claras con Transición) */}
      <section>
        <h2 className="section-title"><Layers size={22} /> Explorar Conocimientos</h2>
        <div className="chapters-grid">
          {chapters.map((ch, idx) => {
            const Icon = ch.icon;
            return (
              <Link key={idx} to={ch.path} className="chapter-card">
                <div>
                  <div className="card-header">
                    <div className="card-icon-wrapper">
                      <Icon className="card-icon" size={22} />
                    </div>
                    <h3>{ch.title}</h3>
                  </div>
                  <p>{ch.desc}</p>
                </div>
                <div className="card-footer-action">
                  <span className="card-action-text">Explorar capítulo</span>
                  <ArrowRight className="card-arrow" size={16} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. Bloque Equipos de Ciberseguridad */}
      <section>
        <h2 className="section-title"><ShieldCheck size={22} /> Equipos de Ciberseguridad</h2>
        <div className="teams-grid">
          <div className="team-card red">
            <h3>Red Team</h3>
            <p>Enfoque ofensivo. Simulación de adversarios y pruebas de penetración para identificar vulnerabilidades antes que un atacante.</p>
          </div>
          <div className="team-card blue">
            <h3>Blue Team</h3>
            <p>Enfoque defensivo. Monitoreo, detección temprana, respuesta a incidentes y protección continua de la infraestructura.</p>
          </div>
          <div className="team-card purple">
            <h3>Purple Team</h3>
            <p>Enfoque integrador. Maximiza la efectividad del Red y Blue Team mediante retroalimentación y aprendizaje compartido.</p>
          </div>
        </div>
      </section>

      {/* 4. Bloque Metodología (6 fases) */}
      <section>
        <h2 className="section-title"><GitBranch size={22} /> Metodología de Evaluación</h2>
        <div className="methodology-pipeline">
          {methodologyPhases.map((phase) => (
            <div key={phase.step} className="phase-step">
              <span className="step-number">FASE {phase.step}</span>
              <div className="step-title">{phase.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Bloque Laboratorios Recientes */}
      <section>
        <h2 className="section-title"><Activity size={22} /> Laboratorios Recientes</h2>
        <div className="labs-grid">
          {recentLabs.map((lab) => (
            <div key={lab.pdf} className="lab-item">
              <div>
                <h3>{lab.title}</h3>
                <span className="lab-tag">Área: {lab.area}</span>
              </div>
              <a href={lab.pdf} target="_blank" rel="noreferrer" className="lab-link lab-link-stretched">Ver <ArrowRight size={15} /></a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}