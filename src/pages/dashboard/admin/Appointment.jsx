import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { format, parse, startOfWeek, getDay } from 'date-fns';
import enUS from 'date-fns/locale/en-US';


export const Appointment = () => {

    const locales = {
        'en-US': enUS,
    }

    const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
    })
      

    return (
        <>
            <div className='mb-16'>
                <h1 className="font-bold text-4xl mb-7">Agendamiento de citas</h1>
                <p>A continuación encontrarás un calendario con todas las citas que han sido agendadas en tu establecimiento. Acá podrás asignar los empleados que cumplirán con servicios solicitados por el cliente.</p>
            </div>

            <Calendar
                localizer={localizer}
                events={[]}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        
        </>
    )
}
