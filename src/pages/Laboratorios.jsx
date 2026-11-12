import React from 'react';
import { Terminal, FolderGit2, FileText, Download } from 'lucide-react';
import { laboratorios as labs } from '../data/laboratorios';

export default function Laboratorios() {
  return (
    <div className="dashboard-container">
        {/* 1. Bloque Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>Laboratorios</h1>
          <p className="hero-subtitle">Prácticas y evidencias</p>
          <p className="hero-description">
            Repositorio de prácticas de laboratorio, procedimientos técnicos, evidencias y versiones de ejecución.
          </p>
        </div>
        <div className="hero-shield-container">
          <Terminal className="animated-shield" size={100} />
        </div>
      </section>

      <section>
        <h2 className="section-title"><Terminal size={20} /> Prácticas Disponibles</h2>
        <div className="labs-grid">
          {labs.map((lab) => (
            <div key={lab.pdf} className="lab-item">
              <div>
                <h3>{lab.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>{lab.desc}</p>
                <span className="lab-tag">Lab {lab.num}</span>{' '}
                <span className="lab-tag">Área: {lab.area}</span>
              </div>
              <div className="lab-actions">
                <a href={lab.pdf} download className="lab-download" title="Descargar PDF" aria-label={`Descargar PDF de ${lab.title}`}>
                  <Download size={16} />
                </a>
                {/* El enlace "Abrir" se extiende a toda la tarjeta: clic en cualquier parte abre el PDF */}
                <a href={lab.pdf} target="_blank" rel="noreferrer" className="lab-link lab-link-stretched">
                  <FileText size={15} /> Abrir
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}