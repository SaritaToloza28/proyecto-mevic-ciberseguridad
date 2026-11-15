import React, { useState } from 'react';
import { BookOpen, Terminal, Cpu, CheckCircle2, Shield, Layers, X } from 'lucide-react';

export default function Fundamentacion() {
  const [selectedImage, setSelectedImage] = useState(null);

  const terminalCommands = [
    { cmd: "pwd", desc: "Muestra la ruta del directorio actual de trabajo (Print Working Directory)." },
    { cmd: "ls -la", desc: "Lista todos los archivos y carpetas, incluyendo los ocultos, con detalles de permisos." },
    { cmd: "cd <directorio>", desc: "Permite navegar entre carpetas (ej. cd /home/kali/Escritorio)." },
    { cmd: "mkdir <nombre>", desc: "Crea un nuevo directorio o carpeta en la ubicación actual." },
    { cmd: "sudo <comando>", desc: "Ejecuta un comando con privilegios de superusuario (administrador Root)." },
    { cmd: "apt update && apt upgrade", desc: "Actualiza los repositorios y los paquetes instalados en el sistema." },
    { cmd: "ip a (o ifconfig)", desc: "Muestra las interfaces de red activas y la dirección IP asignada." },
    { cmd: "nano <archivo>", desc: "Abre el editor de texto de la terminal para crear o modificar archivos." },
    { cmd: "grep <texto> <archivo>", desc: "Busca patrones o cadenas de texto específicas dentro de archivos." },
    { cmd: "man <comando>", desc: "Muestra el manual de ayuda detallado de cualquier comando del sistema." }
  ];

  return (
    <div className="dashboard-container" style={{ position: 'relative' }}>
      {/* 1. Hero Banner */}
      <section className="hero-banner">
        <div className="hero-content">
          <h1>I. Fundamentación</h1>
          <p className="hero-subtitle">Entornos de Práctica y Terminal Kali Linux</p>
          <p className="hero-description">
            Fundamentos teóricos y técnicos de los sistemas operativos basados en Linux, configuración del entorno de virtualización 
            y dominio de la terminal para operaciones de ciberseguridad.
          </p>
        </div>
        <div className="hero-shield-container">
          <BookOpen className="animated-shield" size={100} />
        </div>
      </section>

      {/* 2. Introducción a Linux y Kali Linux */}
      <section>
        <h2 className="section-title"><Layers size={22} style={{ color: 'var(--accent-blue)' }} /> Ecosistema Linux y Kali Linux</h2>
        <div className="teams-grid">
          {/* Tarjeta Distribución Linux */}
          <div className="team-card blue" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div 
              onClick={() => setSelectedImage({ src: "/imagenes/dis.png", alt: "¿Qué es una Distribución Linux?" })}
              style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px', background: '#0b0f19' }}
              title="Haz clic para ampliar"
            >
              <img 
                src="/imagenes/dis.png" 
                alt="Distribución Linux" 
                style={{ width: '100%', height: '180px', objectFit: 'contain', padding: '0.5rem', transition: 'transform 0.3s ease' }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div>
              <h3 style={{ marginBottom: '0.6rem' }}>¿Qué es una Distribución Linux?</h3>
              <p>
                Una distribución ("distro") es un sistema operativo ensamblado a partir del núcleo Linux y un conjunto de software de GNU. 
                Ofrecen una gran estabilidad, control total sobre el hardware y un entorno altamente personalizable ideal para entornos de desarrollo y seguridad.
              </p>
            </div>
          </div>

          {/* Tarjeta Kali Linux */}
          <div className="team-card purple" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div 
              onClick={() => setSelectedImage({ src: "/imagenes/kali2.png", alt: "Kali Linux" })}
              style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px', background: '#0b0f19' }}
              title="Haz clic para ampliar"
            >
              <img 
                src="/imagenes/kali2.png" 
                alt="Kali Linux" 
                style={{ width: '100%', height: '180px', objectFit: 'contain', padding: '0.5rem', transition: 'transform 0.3s ease' }} 
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
            <div>
              <h3 style={{ marginBottom: '0.6rem' }}>Kali Linux</h3>
              <p>
                Es una distribución basada en Debian diseñada específicamente para auditorías de seguridad, pruebas de penetración (pentesting) 
                e investigación forense digital. Incluye cientos de herramientas preinstaladas para evaluar vulnerabilidades de redes y aplicaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Guía de Instalación en Máquina Virtual */}
      <section>
        <h2 className="section-title"><Cpu size={22} style={{ color: 'var(--accent-blue)' }} /> Instalación de Kali Linux en VirtualBox</h2>
        
        {/* Tarjeta de Descargas Esenciales */}
        <div className="team-card kali-install-card" style={{ marginBottom: '1.5rem', borderLeftColor: 'var(--accent-blue)' }}>
          <h3 style={{ marginBottom: '1rem', color: 'var(--accent-blue)' }}>Paso 1: Descargas Esenciales</h3>
          <p style={{ marginBottom: '1.2rem' }}>
            Para desplegar el entorno de forma rápida y segura, utilizaremos los instaladores y la imagen preconfigurada para máquinas virtuales <span style={{ fontSize: '0.85rem', color: '#93c5fd' }}>(Haz clic en las imágenes para ampliarlas)</span>:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {/* VirtualBox */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div 
                onClick={() => setSelectedImage({ src: "/imagenes/vbox.png", alt: "VirtualBox" })}
                style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px', background: '#0b0f19' }}
                title="Haz clic para ampliar"
              >
                <img 
                  src="/imagenes/vbox.png" 
                  alt="VirtualBox" 
                  style={{ width: '100%', height: '200px', objectFit: 'contain', padding: '0.75rem', transition: 'transform 0.3s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.4rem', fontSize: '1.05rem' }}>VirtualBox:</strong>
                <a href="https://www.virtualbox.org/wiki/Downloads" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'underline', fontSize: '0.95rem', fontWeight: '600' }}>
                  Descargar instalador oficial
                </a>
              </div>
            </div>

            {/* Kali Linux */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255, 255, 255, 0.03)', padding: '1.25rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div 
                onClick={() => setSelectedImage({ src: "/imagenes/kali.png", alt: "Kali Linux Virtual Machine" })}
                style={{ cursor: 'pointer', overflow: 'hidden', borderRadius: '8px', background: '#0b0f19' }}
                title="Haz clic para ampliar"
              >
                <img 
                  src="/imagenes/kali.png" 
                  alt="Kali Linux Virtual Machine" 
                  style={{ width: '100%', height: '200px', objectFit: 'contain', padding: '0.75rem', transition: 'transform 0.3s ease' }} 
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
              </div>
              <div>
                <strong style={{ display: 'block', marginBottom: '0.2rem', fontSize: '1.05rem' }}>Kali Virtual Machine:</strong>
                <p style={{ fontSize: '0.88rem', color: '#9ca3af', marginBottom: '0.4rem' }}>(Elegir versión para VirtualBox)</p>
                <a href="https://www.kali.org/get-kali/#kali-virtual-machines" target="_blank" rel="noreferrer" style={{ color: 'var(--accent-blue)', textDecoration: 'underline', fontSize: '0.95rem', fontWeight: '600' }}>
                  Descargar imagen (.7z)
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="teams-grid">
          {/* Método Automático (.vbox) */}
          <div className="team-card kali-install-card">
            <h3>Método Automático (.vbox)</h3>
            <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem', lineHeight: '1.5' }}>
              <li><strong>Descomprimir:</strong> Extrae el archivo <code>.7z</code> descargado utilizando herramientas como <em>7-Zip</em> o <em>WinRAR</em>.</li>
              <li><strong>Ejecutar .vbox:</strong> Haz doble clic sobre el archivo con extensión <code>.vbox</code> resultante de la extracción.</li>
              <li><strong>Apertura automática:</strong> VirtualBox se abrirá automáticamente e importará la máquina configurada.</li>
              <li><strong>Iniciar:</strong> Selecciona la máquina en el panel izquierdo y haz clic en el botón verde de <strong>Start</strong>.</li>
              <li><strong>Credenciales:</strong> Inicia sesión con Usuario: <code>kali</code> / Clave: <code>kali</code>.</li>
            </ol>
          </div>

          {/* Método Manual (Alternativo) */}
          <div className="team-card kali-install-card" style={{ borderLeftColor: 'var(--accent-purple)' }}>
            <h3 style={{ color: 'var(--accent-purple)' }}>Método Manual (Alternativo)</h3>
            <ol style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', marginTop: '0.75rem', lineHeight: '1.5' }}>
              <li><strong>Descomprimir:</strong> Extrae el archivo comprimido <code>.7z</code> en una carpeta de tu preferencia.</li>
              <li><strong>Nueva Máquina:</strong> Abre VirtualBox y haz clic en el botón <strong>Nueva</strong> (New).</li>
              <li><strong>Asignar Imagen:</strong> Asigna un nombre, selecciona la carpeta y en imagen ISO/disco busca y selecciona el archivo de disco extraído (ej. archivo <code>.vmdk</code> o de máquina virtual).</li>
              <li><strong>Configurar Hardware:</strong> Ajusta la RAM y los núcleos de CPU según los requerimientos recomendados.</li>
              <li><strong>Iniciar:</strong> Guarda los cambios, arranca la máquina virtual y usa las credenciales <code>kali</code> / <code>kali</code>.</li>
            </ol>
          </div>
        </div>

        {/* Validación de Hardware */}
        <div className="team-card kali-install-card" style={{ marginTop: '1.5rem' }}>
          <h3>Validación de Hardware Recomendada</h3>
          <p style={{ marginBottom: '0.75rem', color: '#9ca3af' }}>
            Antes de iniciar por primera vez, verifica en <em>Settings / System</em> los siguientes recursos para asegurar un rendimiento óptimo:
          </p>
          <ul style={{ listStyle: 'none', paddingLeft: 0, display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <li>💻 <strong>Memoria RAM:</strong> Asignar mínimo 4 GB (4096 MB).</li>
            <li>⚙️ <strong>Procesador (CPU):</strong> Asignar 2 o 4 núcleos según la capacidad física de tu equipo.</li>
            <li>🖥️ <strong>Pantalla (Display):</strong> Aumentar la Memoria de Video a 128 MB y activar la aceleración 3D.</li>
          </ul>
        </div>
      </section>

      {/* 4. Comandos Básicos de la Terminal */}
      <section>
        <h2 className="section-title"><Terminal size={22} style={{ color: 'var(--accent-blue)' }} /> Comandos Básicos en la Terminal de Kali</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>
          El dominio de la línea de comandos es indispensable para cualquier analista de seguridad. Aquí tienes los comandos esenciales para iniciar:
        </p>

        <div className="chapters-grid">
          {terminalCommands.map((item, idx) => (
            <div key={idx} className="chapter-card" style={{ cursor: 'default' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                <Terminal size={18} style={{ color: 'var(--accent-blue)' }} />
                <code style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--accent-blue)', background: 'rgba(96, 165, 250, 0.1)', padding: '0.15rem 0.4rem', borderRadius: '4px' }}>
                  {item.cmd}
                </code>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL LIGHTBOX PARA AMPLIAR IMAGEN */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(5, 7, 12, 0.8)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999,
            padding: '2rem',
            animation: 'fadeIn 0.25s ease'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()} 
            style={{
              position: 'relative',
              background: '#0f172a',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '16px',
              padding: '1.5rem',
              maxWidth: '900px',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)'
            }}
          >
            <button 
              onClick={() => setSelectedImage(null)}
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'background 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
            >
              <X size={20} />
            </button>

            <p style={{ color: '#ffffff', fontWeight: '600', marginBottom: '1rem', fontSize: '1.1rem', alignSelf: 'flex-start' }}>
              {selectedImage.alt}
            </p>

            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              style={{
                maxWidth: '100%',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '8px',
                background: '#05070c',
                padding: '0.5rem'
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}