import React, { createContext, useContext, useState, ReactNode } from 'react';

type Event = {
    id: number;
    title: string;
    allDay: boolean;
    start: string;
    end: string;
};

type EventContextType = {
    events: Event[];
    addEvent: (event: Event) => void;
};

const EventContext = createContext<EventContextType | undefined>(undefined);

export const EventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [events, setEvents] = useState<Event[]>([]);

    const addEvent = (event: Event) => {
        setEvents((prev) => [...prev, event]);
    };

    return (
        <EventContext.Provider value={{ events, addEvent }}>
            {children}
        </EventContext.Provider>
    );
};

export const useEventContext = (): EventContextType => {
    const context = useContext(EventContext);
    if (!context) {
        throw new Error('useEventContext must be used within an EventProvider');
    }
    return context;
};
