import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LiveEventTimerProps {
  // Set to false to disable the timer (show "Dates Coming Soon" instead)
  isActive?: boolean;
  // Event start date and time (format: 'YYYY-MM-DDTHH:mm:ss')
  eventStartDateTime?: string;
  // Event duration per day in hours
  eventDurationHours?: number;
  // Total number of event days
  totalEventDays?: number;
  className?: string;
}

interface EventStatus {
  type: 'countdown' | 'happening-now' | 'day-ended' | 'all-ended';
  message: string;
  currentDay?: number;
  isFlashing?: boolean;
}

const LiveEventTimer = ({ 
  isActive = false,
  eventStartDateTime = '2025-07-06T14:00:00', // July 6, 2025 at 2:00 PM
  eventDurationHours = 2, // 2-4 PM = 2 hours
  totalEventDays = 5,
  className 
}: LiveEventTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<string>('');
  const [eventStatus, setEventStatus] = useState<EventStatus>({
    type: 'countdown',
    message: 'Dates Coming Soon',
  });

  useEffect(() => {
    if (!isActive) {
      setEventStatus({
        type: 'countdown',
        message: 'Dates Coming Soon',
      });
      return;
    }

    const updateTimer = () => {
      const now = new Date();
      const eventStart = new Date(eventStartDateTime);
      
      // Calculate each day's start and end times
      const eventDays = Array.from({ length: totalEventDays }, (_, i) => {
        const dayStart = new Date(eventStart);
        dayStart.setDate(eventStart.getDate() + i);
        
        const dayEnd = new Date(dayStart);
        dayEnd.setHours(dayStart.getHours() + eventDurationHours);
        
        return { start: dayStart, end: dayEnd, day: i + 1 };
      });

      const lastEventEnd = eventDays[eventDays.length - 1].end;

      // Check if all events are over
      if (now > lastEventEnd) {
        setEventStatus({
          type: 'all-ended',
          message: "It's over! Check back soon for the next dates.",
        });
        setTimeLeft('');
        return;
      }

      // Check if currently during an event day
      const currentEventDay = eventDays.find(day => now >= day.start && now <= day.end);
      if (currentEventDay) {
        setEventStatus({
          type: 'happening-now',
          message: `Happening Now! Day ${currentEventDay.day}`,
          currentDay: currentEventDay.day,
        });
        setTimeLeft('');
        return;
      }

      // Check if between event days (day ended, next day coming)
      const completedDay = eventDays.find(day => {
        const nextDayStart = new Date(day.start);
        nextDayStart.setDate(nextDayStart.getDate() + 1);
        return now > day.end && now < nextDayStart;
      });
      if (completedDay && completedDay.day < totalEventDays) {
        setEventStatus({
          type: 'day-ended',
          message: `Day ${completedDay.day} is over! Come back tomorrow for Day ${completedDay.day + 1}`,
          currentDay: completedDay.day,
        });
        setTimeLeft('');
        return;
      }

      // Countdown to first event or next event day
      const nextEventDay = eventDays.find(day => now < day.start);
      if (nextEventDay) {
        const timeDiff = nextEventDay.start.getTime() - now.getTime();
        
        // Check if we should flash (less than 24 hours remaining)
        const shouldFlash = timeDiff < 24 * 60 * 60 * 1000;
        
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

        let timeString = '';
        if (days > 0) timeString += `${days}d `;
        if (hours > 0) timeString += `${hours}h `;
        if (minutes > 0) timeString += `${minutes}m `;
        timeString += `${seconds}s`;

        const dayText = nextEventDay.day === 1 ? 'the workshop' : `Day ${nextEventDay.day}`;
        
        setEventStatus({
          type: 'countdown',
          message: `${timeString} until ${dayText} begins!`,
          isFlashing: shouldFlash,
        });
        setTimeLeft(timeString);
      }
    };

    // Update immediately
    updateTimer();
    
    // Set up interval to update every second
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [isActive, eventStartDateTime, eventDurationHours, totalEventDays]);

  if (!isActive) {
    return (
      <div className={cn("text-center", className)}>
        <h2 className="text-heading text-white mb-3">
          Dates Coming Soon
        </h2>
      </div>
    );
  }

  const getStatusColor = () => {
    switch (eventStatus.type) {
      case 'happening-now':
        return 'text-green-400 animate-pulse';
      case 'day-ended':
        return 'text-yellow-400';
      case 'all-ended':
        return 'text-gray-400';
      case 'countdown':
        return eventStatus.isFlashing 
          ? 'text-white animate-[flash_1s_ease-in-out_infinite_alternate]' 
          : 'text-white';
      default:
        return 'text-white';
    }
  };

  return (
    <div className={cn("text-center", className)}>
      <h2 className={cn("text-heading mb-3 transition-colors duration-300", getStatusColor())}>
        {eventStatus.message}
      </h2>
      {eventStatus.type === 'happening-now' && (
        <p className="text-body-large text-green-300 animate-bounce">
          <span role="img" aria-label="Live">🔴</span> LIVE NOW!
        </p>
      )}
    </div>
  );
};

export default LiveEventTimer;