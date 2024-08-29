
import React from 'react'; 

const Hours = () => {
    // Obtener el día de la semana (0 = Domingo, 1 = Lunes, ..., 6 = Sábado)
    const today = new Date().getDay();

    // Determinar las horas de apertura según el día de la semana
    let openingHours;
    if (today >= 1 && today <= 5) {
        // Lunes a Viernes
        openingHours = '10 a.m. - 4 p.m.';
    } else {
        // Sábado y Domingo
        openingHours = '9 a.m. - 8 p.m.';
    }

    return (
        <div>
            <h2>Horas de Apertura Hoy para Mari bonita baby</h2>
            <p>El refugio está abierto hoy de {openingHours} </p>
        </div>
    );
};

export default Hours;


