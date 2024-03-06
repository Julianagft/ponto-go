'use client'

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"
import timeGridPlugin from "@fullcalendar/timegrid"
import interactionPlugin, { Draggable } from '@fullcalendar/interaction';
import { useEffect, useState } from "react";


export default function Calendar() {

    const [events, setEvents] = useState([
        {title: 'event 1', id:'1'},
        {title: 'event 2', id:'2'},
        {title: 'event 3', id:'3'},
        {title: 'event 4', id:'4'},
        {title: 'event 5', id:'5'},
    ]);
    const [allEvents, setAllEvents] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteMoldal, setShowDeleteMoldal] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);
    const [newEvent, setNewEvent] = useState({
        title: '',
        start: '',
        allDay: false,
        id: 0
    });

    useEffect(() => {
        let draggableEl = document.getElementById('draggable-el')
        if (draggableEl) {
            new Draggable(draggableEl, {
                itemSelector: ".fc-event",
                eventData: function(eventEl) {
                    let title =eventEl.getAttribute("title");
                    let id = eventEl.getAttribute("data");
                    let start = eventEl.getAttribute("start");
                    return {title, id, start}
                }
            })
        }
    }, [])
    
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
                        events= {allEvents}
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

                <div id="draggable-el" className="ml-8 w-full border-2 p-2 rounded-md mt-16 md:h-1/2 bg-violet-50">
                    <h1 className="font-bold text-lg text-center">Arraste um Evento</h1>
                    {events.map(event => (
                        <div
                            className="fc-event border-2 p-1 m-2 w-full rounded-md ml-auto text-center gb-white"
                            title={event.title}
                            key={event.id}
                        > 
                            {event.title}
                        </div>
                    ))}

                </div>
            </div>

        </div>
    </div>
    )
}