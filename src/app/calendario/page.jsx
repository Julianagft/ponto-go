'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin  from "@fullcalendar/interaction"

export default function Calendar() {
    

    return (
        <div>
        <div>
            <h1>Calendar</h1>
        </div>

        <div className="flex min-h-screen flex-col items-center justify-center">
            <div className="grid grid-cols-10">
                <div className="col-span-8">
                    <FullCalendar 
                        plugins={[
                            dayGridPlugin,
                            interactionPlugin,
                            timeGridPlugin
                        ]}
                        headerToolbar={{
                            left: 'prev, next today',
                            center: 'title',
                            right: 'resourceTimelineWook, dayGridMonth, timeGridWeek'
                        }}
                        events= {{}}
                        nowIndicator={true}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        selectMirror={true}
                        // dayClick={{}}
                        // drop={}
                        // eventClick={}

                    
                    />

                </div>
            </div>

        </div>
    </div>
    )
}