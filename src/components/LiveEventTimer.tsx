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
  eventStartDateTime = '2025-07-10T11:00:00', // July 10, 2025 at 11:00 AM CDT
  eventDurationHours = 1.5, // 11:00 AM - 12:30 PM = 1.5 hours
  totalEventDays = 1, // Just Day 1 for now, Day 2 date TBD
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
      // Get current time in CDT (Central Daylight Time)
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

      // Check if Day 1 is over - show Day 2 coming soon message
      if (now > lastEventEnd) {
        setEventStatus({
          type: 'all-ended',
          message: "Day 2 date coming soon! Stay tuned for updates.",
        });
        setTimeLeft('');
        return;
      }

      // Check if currently during an event day
      const currentEventDay = eventDays.find(day => now >= day.start && now <= day.end);
      if (currentEventDay) {
        setEventStatus({
          type: 'happening-now',
          message: `Session is currently happening - Day ${currentEventDay.day}`,
          currentDay: currentEventDay.day,
        });
        setTimeLeft('');
        return;
      }

      // Check if between event days (day ended, next day coming)
      const completedDay = eventDays.find(day => {
        const nextDay = eventDays.find(nextDay => nextDay.day === day.day + 1);
        return now > day.end && nextDay && now < nextDay.start;
      });
      
      if (completedDay && completedDay.day < totalEventDays) {
        const nextDay = eventDays.find(day => day.day === completedDay.day + 1);
        if (nextDay) {
          const timeDiff = nextDay.start.getTime() - now.getTime();
          
          const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

          let timeString = '';
          if (days > 0) timeString += `${days}d `;
          if (hours > 0) timeString += `${hours}h `;
          if (minutes > 0) timeString += `${minutes}m `;
          timeString += `${seconds}s`;

          setEventStatus({
            type: 'countdown',
            message: `${timeString} until Day ${nextDay.day} begins!`,
            currentDay: completedDay.day,
          });
          setTimeLeft(timeString);
          return;
        }
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
          Dates Coming Soon
        </h2>
      </div>
    );
  }

  const getStatusColor = () => {
    switch (eventStatus.type) {
      case 'happening-now':
        return 'text-red-400 animate-[pulse_3s_ease-in-out_infinite]';
      case 'day-ended':
        return 'text-yellow-400';
      case 'all-ended':
        return 'text-green-400 font-bold';
      case 'countdown':
        return eventStatus.isFlashing 
          ? 'text-white animate-[pulse_3s_ease-in-out_infinite]' 
          : 'text-white';
      default:
        return 'text-white';
    }
  };

  return (
    <div className={cn("text-center", className)}>
      <h2 className={cn("text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 transition-colors duration-300", getStatusColor())}>
        {eventStatus.message}
      </h2>
      {eventStatus.type === 'happening-now' && (
        <p className="text-xl sm:text-2xl text-green-300 animate-bounce font-semibold">
          <span role="img" aria-label="Live">🔴</span> LIVE NOW!
        </p>
      )}
      
      {/* Time bubble showing actual session time */}
      {eventStatus.type !== 'all-ended' && (
        <div className="mt-4 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 shadow-lg">
          <p className="text-lg sm:text-xl font-semibold text-white">
            <span role="img" aria-label="Clock">⏰</span> 11:00 AM - 12:30 PM CDT
          </p>
        </div>
      )}
    </div>
  );
};

export default LiveEventTimer;