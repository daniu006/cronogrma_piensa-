import React from 'react';

const GanttChart = () => {
  const weeks = [
    { id: 'S1', week: 'S1', dates: '6 - 12 oct', activity: 'Reunion inicial, definicion de objetivos, division de tareas, analisis de requerimientos funcionales y tecnicos.', type: 'general', start: 0, duration: 7 },
    { id: 'S2', week: 'S2', dates: '13 - 19 oct', activity: 'Diseno del sistema (diagrama de bloques, arquitectura, sensores, API REST). Boceto en Figma del panel web.', type: 'general', start: 7, duration: 7 },
    { id: 'S3', week: 'S3', dates: '20 - 26 oct', activity: 'Configuracion del entorno NestJS y Angular, instalacion de dependencias, pruebas locales.', type: 'backend', start: 14, duration: 7 },
    { id: 'S4', week: 'S4', dates: '27 oct - 2 nov', activity: 'Creacion de estructura backend (modulos, controladores, servicios, base de datos).', type: 'backend', start: 21, duration: 7 },
    { id: 'S5', week: 'S5', dates: '3 - 9 nov', activity: 'Implementacion de endpoints para sensores (humedad, temperatura, luz, bomba).', type: 'backend', start: 28, duration: 7 },
    { id: 'S6', week: 'S6', dates: '10 - 16 nov', activity: 'Creacion de base de datos (lecturas, umbrales, historial). Integracion con NestJS.', type: 'backend', start: 35, duration: 7 },
    { id: 'S7', week: 'S7', dates: '17 - 23 nov', activity: 'Configuracion del circuito con ESP32: conexion sensores DHT11, bomba, reles, LEDs.', type: 'circuito', start: 42, duration: 7 },
    { id: 'S8', week: 'S8', dates: '24 - 30 nov', activity: 'Programacion inicial del ESP32 (lectura sensores + envio de datos por WiFi al backend).', type: 'circuito', start: 49, duration: 7 },
    { id: 'S9', week: 'S9', dates: '1 - 7 dic', activity: 'Interfaz web: creacion de paginas principales (Inicio, Monitoreo, Control, Configuracion).', type: 'frontend', start: 56, duration: 7 },
    { id: 'S10', week: 'S10', dates: '8 - 14 dic', activity: 'Integracion Frontend - Backend mediante API REST (visualizacion de sensores).', type: 'integracion', start: 63, duration: 7 },
    { id: 'S11', week: 'S11', dates: '15 - 21 dic', activity: 'Programacion avanzada ESP32 (automatizacion: riego segun humedad y temperatura).', type: 'circuito', start: 70, duration: 7 },
    { id: 'S12', week: 'S12', dates: '22 - 28 dic', activity: 'Optimizacion de interfaz (graficos, alertas, dashboards).', type: 'frontend', start: 77, duration: 7 },
    { id: 'S13', week: 'S13', dates: '29 dic - 4 ene', activity: 'Pruebas de conexion completa (ESP32 - Backend - Frontend). Ajuste de errores.', type: 'integracion', start: 84, duration: 7 },
    { id: 'S14', week: 'S14', dates: '5 - 11 ene', activity: 'Mejoras visuales, ajustes de rendimiento, seguridad y mensajes en tiempo real.', type: 'integracion', start: 91, duration: 7 },
    { id: 'S15', week: 'S15', dates: '12 - 18 ene', activity: 'Pruebas funcionales finales, validacion con sensores reales, simulacion de fallos.', type: 'integracion', start: 98, duration: 7 },
    { id: 'S16', week: 'S16', dates: '19 - 25 ene', activity: 'Presentacion del proyecto funcional, documentacion tecnica y video demostrativo.', type: 'general', start: 105, duration: 7 }
  ];

  const colors = {
    general: '#64748B',
    backend: '#3B82F6',
    frontend: '#10B981',
    circuito: '#F59E0B',
    integracion: '#8B5CF6'
  };

  const months = [
    { name: 'OCT', days: 26, startDay: 6 },
    { name: 'NOV', days: 30, startDay: 1 },
    { name: 'DIC', days: 31, startDay: 1 },
    { name: 'ENE', days: 25, startDay: 1 }
  ];

  const days = [];
  months.forEach(month => {
    for (let i = 0; i < month.days; i++) {
      days.push({ month: month.name, day: month.startDay + i, isFirst: i === 0 });
    }
  });

  return (
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', padding: '24px', overflow: 'auto' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>Cronograma GreenBox</h1>
      
      <div style={{ backgroundColor: '#1e293b', borderRadius: '8px', padding: '16px', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '1800px' }}>
          <thead>
            <tr style={{ backgroundColor: '#334155' }}>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '14px', minWidth: '80px', position: 'sticky', left: 0, backgroundColor: '#334155', zIndex: 10 }}>Semana</th>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '14px', minWidth: '120px', position: 'sticky', left: '80px', backgroundColor: '#334155', zIndex: 10 }}>Fechas</th>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '14px', minWidth: '400px', position: 'sticky', left: '200px', backgroundColor: '#334155', zIndex: 10 }}>Actividades principales</th>
              {days.map((d, i) => (
                <th key={i} style={{ border: '1px solid #475569', padding: '8px 4px', fontSize: '11px', minWidth: '32px', maxWidth: '32px' }}>
                  {d.isFirst ? <div style={{ color: '#60a5fa', fontWeight: 'bold' }}>{d.month}</div> : <div style={{ color: '#94a3b8' }}>{d.day}</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map(w => (
              <tr key={w.id} style={{ borderBottom: '1px solid #475569' }}>
                <td style={{ border: '1px solid #475569', padding: '12px', textAlign: 'center', fontWeight: '600', position: 'sticky', left: 0, backgroundColor: '#1e293b', zIndex: 5 }}>{w.week}</td>
                <td style={{ border: '1px solid #475569', padding: '12px', fontSize: '13px', position: 'sticky', left: '80px', backgroundColor: '#1e293b', zIndex: 5 }}>{w.dates}</td>
                <td style={{ border: '1px solid #475569', padding: '12px', fontSize: '13px', position: 'sticky', left: '200px', backgroundColor: '#1e293b', zIndex: 5 }}>{w.activity}</td>
                {days.map((d, i) => (
                  <td key={i} style={{ border: '1px solid #475569', padding: 0, height: '60px', minWidth: '32px', maxWidth: '32px', backgroundColor: i >= w.start && i < w.start + w.duration ? colors[w.type] : 'transparent' }}></td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '32px', display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: colors.general, borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px' }}>General</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: colors.backend, borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px' }}>Backend</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: colors.frontend, borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px' }}>Frontend</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: colors.circuito, borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px' }}>Circuito</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '24px', height: '24px', backgroundColor: colors.integracion, borderRadius: '4px' }}></div>
          <span style={{ fontSize: '14px' }}>Integracion</span>
        </div>
      </div>

      <div style={{ marginTop: '24px', textAlign: 'center', fontSize: '13px', color: '#94a3b8' }}>
        <p style={{ fontWeight: '600', color: '#cbd5e1' }}>Proyecto GreenBox - Sistema IoT de Monitoreo y Control de Cultivos</p>
        <p style={{ marginTop: '8px' }}>Periodo: 6 de octubre 2024 - 25 de enero 2025 | Total: 16 semanas</p>
      </div>
    </div>
  );
};

export default GanttChart;