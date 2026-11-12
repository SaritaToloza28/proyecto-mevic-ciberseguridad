import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Shield, 
  LayoutDashboard, 
  BookOpen, 
  Users, 
  GitBranch, 
  Cpu, 
  Terminal, 
  BarChart3, 
  FileText,
  Sun,
  Moon
} from 'lucide-react';

const navItems = [
  { title: "Dashboard", path: "/", icon: LayoutDashboard },
  { title: "Fundamentación", path: "/fundamentacion", icon: BookOpen },
  { title: "Equipos", path: "/equipos", icon: Users },
  { title: "Metodología", path: "/metodologia", icon: GitBranch },
  { title: "Áreas", path: "/areas", icon: Cpu },
  { title: "Laboratorios", path: "/laboratorios", icon: Terminal },
  { title: "Referencias", path: "/referencias", icon: FileText },
];

export default function Sidebar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Shield className="logo-icon" size={28} />
        <div>
          <h1 className="brand-title">MEVIC</h1>
          <p className="brand-subtitle"></p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              end={item.path === '/'}
            >
              <Icon size={18} />
              <span>{item.title}</span>
            </NavLink>
          );
        })}
      </nav>

      <div className="sidebar-footer">
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {theme === 'dark' ? (
            <>
              <Sun size={18} />
              <span>Modo Claro</span>
            </>
          ) : (
            <>
              <Moon size={18} />
              <span>Modo Oscuro</span>
            </>
          )}
        </button>
        <p className="footer-credits">Cybersecurity Framework</p>
      </div>
    </aside>
  );
}