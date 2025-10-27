import React from 'react';

const GanttChart = () => {
  const weeks = [
    { 
      id: 'S1', 
      week: 'S1', 
      dates: '6 - 12 oct',
      objectives: 'Investigacion y analisis de los requerimientos funcionales y tecnicos necesarios para que se adapten a la forma del dron vectorial y de sus areas especificas del dron asi como optimizar la localizacion del balon y la porteria por los jugadores',
      activity: 'Reunion inicial, definicion de objetivos, division de tareas, analisis de requerimientos funcionales y tecnicos.',
      resources: 'Documentacion tecnica, plantillas de levantamiento de requisitos acusticos',
      responsible: 'Equipo de Investigacion',
      type: 'general', 
      start: 0, 
      duration: 7 
    },
    { 
      id: 'S2', 
      week: 'S2', 
      dates: '13 - 19 oct',
      objectives: 'Investigacion y analisis de los requerimientos funcionales y tecnicos necesarios para que se adapten a la forma del dron vectorial y de sus areas especificas del dron asi como optimizar la localizacion del balon y la porteria por los jugadores',
      activity: 'Diseno del sistema (diagrama de bloques, arquitectura, sensores, API REST). Boceto en Figma del panel web.',
      resources: 'Impresoras 3D, software de prototipado de plantillas adaptados, software de modelado',
      responsible: 'Equipo de Investigacion, expertos en acustica',
      type: 'general', 
      start: 7, 
      duration: 7 
    },
    { 
      id: 'S3', 
      week: 'S3', 
      dates: '20 - 26 oct',
      objectives: 'Investigacion y analisis de los requerimientos funcionales y tecnicos necesarios para que se adapten a la forma del dron vectorial y de sus areas especificas del dron asi como optimizar la localizacion del balon y la porteria por los jugadores',
      activity: 'Configuracion del entorno NestJS y Angular, instalacion de dependencias, pruebas locales.',
      resources: 'Campos de prueba, materiales de construccion',
      responsible: 'Equipo de Investigacion, expertos en acustica',
      type: 'backend', 
      start: 14, 
      duration: 7 
    },
    { 
      id: 'S4', 
      week: 'S4', 
      dates: '27 oct - 2 nov',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Creacion de estructura backend (modulos, controladores, servicios, base de datos).',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'backend', 
      start: 21, 
      duration: 7 
    },
    { 
      id: 'S5', 
      week: 'S5', 
      dates: '3 - 9 nov',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Implementacion de endpoints para sensores (humedad, temperatura, luz, bomba).',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'backend', 
      start: 28, 
      duration: 7 
    },
    { 
      id: 'S6', 
      week: 'S6', 
      dates: '10 - 16 nov',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Creacion de base de datos (lecturas, umbrales, historial). Integracion con NestJS.',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'backend', 
      start: 35, 
      duration: 7 
    },
    { 
      id: 'S7', 
      week: 'S7', 
      dates: '17 - 23 nov',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Configuracion del circuito con ESP32: conexion sensores DHT11, bomba, reles, LEDs.',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'circuito', 
      start: 42, 
      duration: 7 
    },
    { 
      id: 'S8', 
      week: 'S8', 
      dates: '24 - 30 nov',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Programacion inicial del ESP32 (lectura sensores + envio de datos por WiFi al backend).',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'circuito', 
      start: 49, 
      duration: 7 
    },
    { 
      id: 'S9', 
      week: 'S9', 
      dates: '1 - 7 dic',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Interfaz web: creacion de paginas principales (Inicio, Monitoreo, Control, Configuracion).',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'frontend', 
      start: 56, 
      duration: 7 
    },
    { 
      id: 'S10', 
      week: 'S10', 
      dates: '8 - 14 dic',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Integracion Frontend - Backend mediante API REST (visualizacion de sensores).',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'integracion', 
      start: 63, 
      duration: 7 
    },
    { 
      id: 'S11', 
      week: 'S11', 
      dates: '15 - 21 dic',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Programacion avanzada ESP32 (automatizacion: riego segun humedad y temperatura).',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'circuito', 
      start: 70, 
      duration: 7 
    },
    { 
      id: 'S12', 
      week: 'S12', 
      dates: '22 - 28 dic',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Optimizacion de interfaz (graficos, alertas, dashboards).',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'frontend', 
      start: 77, 
      duration: 7 
    },
    { 
      id: 'S13', 
      week: 'S13', 
      dates: '29 dic - 4 ene',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Pruebas de conexion completa (ESP32 - Backend - Frontend). Ajuste de errores.',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'integracion', 
      start: 84, 
      duration: 7 
    },
    { 
      id: 'S14', 
      week: 'S14', 
      dates: '5 - 11 ene',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Mejoras visuales, ajustes de rendimiento, seguridad y mensajes en tiempo real.',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'integracion', 
      start: 91, 
      duration: 7 
    },
    { 
      id: 'S15', 
      week: 'S15', 
      dates: '12 - 18 ene',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Pruebas funcionales finales, validacion con sensores reales, simulacion de fallos.',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'integracion', 
      start: 98, 
      duration: 7 
    },
    { 
      id: 'S16', 
      week: 'S16', 
      dates: '19 - 25 ene',
      objectives: 'Desarrollar una aplicacion movil que sustituya el dron por componentes tecnologicos adaptados',
      activity: 'Presentacion del proyecto funcional, documentacion tecnica y video demostrativo.',
      resources: 'Seleccion de metodologias de desarrollo, revision de metodologias agiles y tradicionales',
      responsible: 'Equipo de Investigacion',
      type: 'general', 
      start: 105, 
      duration: 7 
    }
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
    <div style={{ width: '100%', minHeight: '100vh', backgroundColor: '#0f172a', color: 'white', padding: '24px' }}>
      <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '32px' }}>Cronograma GreenBox</h1>
      
      <div style={{ backgroundColor: '#1e293b', borderRadius: '8px', padding: '16px', overflowX: 'auto', overflowY: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '2400px' }}>
          <thead>
            <tr style={{ backgroundColor: '#334155' }}>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '13px', minWidth: '80px', backgroundColor: '#334155' }}>Semana</th>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '13px', minWidth: '100px', backgroundColor: '#334155' }}>Fechas</th>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '13px', minWidth: '220px', backgroundColor: '#334155' }}>Objetivos</th>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '13px', minWidth: '220px', backgroundColor: '#334155' }}>Actividades</th>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '13px', minWidth: '220px', backgroundColor: '#334155' }}>Recursos Necesarios</th>
              <th style={{ border: '1px solid #475569', padding: '12px', fontSize: '13px', minWidth: '180px', backgroundColor: '#334155' }}>Responsables</th>
              {days.map((d, i) => (
                <th key={i} style={{ border: '1px solid #475569', padding: '8px 4px', fontSize: '10px', minWidth: '28px', maxWidth: '28px', backgroundColor: '#334155' }}>
                  {d.isFirst ? <div style={{ color: '#60a5fa', fontWeight: 'bold' }}>{d.month}</div> : <div style={{ color: '#94a3b8' }}>{d.day}</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {weeks.map(w => (
              <tr key={w.id} style={{ borderBottom: '1px solid #475569' }}>
                <td style={{ border: '1px solid #475569', padding: '12px', textAlign: 'center', fontWeight: '600', fontSize: '13px', backgroundColor: '#1e293b' }}>{w.week}</td>
                <td style={{ border: '1px solid #475569', padding: '12px', fontSize: '12px', backgroundColor: '#1e293b' }}>{w.dates}</td>
                <td style={{ border: '1px solid #475569', padding: '12px', fontSize: '11px', backgroundColor: '#1e293b', lineHeight: '1.4' }}>{w.objectives}</td>
                <td style={{ border: '1px solid #475569', padding: '12px', fontSize: '11px', backgroundColor: '#1e293b', lineHeight: '1.4' }}>{w.activity}</td>
                <td style={{ border: '1px solid #475569', padding: '12px', fontSize: '11px', backgroundColor: '#1e293b', lineHeight: '1.4' }}>{w.resources}</td>
                <td style={{ border: '1px solid #475569', padding: '12px', fontSize: '11px', backgroundColor: '#1e293b', lineHeight: '1.4' }}>{w.responsible}</td>
                {days.map((d, i) => (
                  <td key={i} style={{ border: '1px solid #475569', padding: 0, height: '80px', minWidth: '28px', maxWidth: '28px', backgroundColor: i >= w.start && i < w.start + w.duration ? colors[w.type] : 'transparent' }}></td>
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