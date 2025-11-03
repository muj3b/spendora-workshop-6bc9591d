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
  totalEventDays = 2, // Day 1 and Day 2
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

      // Handle Day 2 specific logic
      const isDay1Complete = now > eventDays[0].end;
      
      if (isDay1Complete && eventDays.length === 2) {
        // Day 2 has ended, Day 3 coming soon
        const day2Start = new Date('2025-07-18T15:30:00'); // Day 2 was 3:30pm CDT Friday
        const day2End = new Date(day2Start);
        day2End.setHours(day2Start.getHours() + 1.5); // 3:30pm - 5:00pm = 1.5 hours
        
        // Update eventDays with actual Day 2 date
        eventDays[1] = { start: day2Start, end: day2End, day: 2 };
        
        // Day 2 has ended, show Day 3 coming soon
        if (now > day2End) {
          setEventStatus({
            type: 'countdown',
            message: "Day 3 just ended. Day 4 date and time coming soon!",
          });
          setTimeLeft('');
          return;
        }
        
        // Check if Day 2 is happening now
        if (now >= day2Start && now <= day2End) {
          setEventStatus({
            type: 'happening-now',
            message: `Day 2 is happening now!`,
            currentDay: 2,
          });
          setTimeLeft('');
          return;
        }
        
        // Countdown to Day 2
        if (now < day2Start) {
          const timeDiff = day2Start.getTime() - now.getTime();
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

          setEventStatus({
            type: 'countdown',
            message: `${timeString} until Day 2 begins!`,
            isFlashing: shouldFlash,
          });
          setTimeLeft(timeString);
          return;
        }
      }
      
      // Check if all events are over (fallback)
      if (now > lastEventEnd) {
        setEventStatus({
          type: 'countdown',
          message: "Day 3 just ended. Day 4 date and time coming soon!",
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
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
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
          ? 'text-foreground animate-[pulse_3s_ease-in-out_infinite]' 
          : 'text-foreground';
      default:
        return 'text-foreground';
    }
  };

  return (
    <div className={cn("text-center px-4", className)}>
      <h2 className={cn("text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 transition-colors duration-300 break-words", getStatusColor())}>
        {eventStatus.message}
      </h2>
      {eventStatus.type === 'happening-now' && (
        <p className="text-lg sm:text-xl text-green-300 animate-bounce font-semibold">
          <span role="img" aria-label="Live">🔴</span> LIVE NOW!
        </p>
      )}
      
      {/* Time and date display */}
      <div className="mt-4 space-y-3 max-w-full">
        {/* Actual dates display */}
        <div className="text-center space-y-3 max-w-full">
          <div className="mx-auto max-w-fit bg-gradient-to-r from-orange-500/20 to-orange-400/20 backdrop-blur-sm border border-orange-300/30 rounded-lg px-3 sm:px-6 py-2 sm:py-3 shadow-lg shadow-orange-400/20 glow">
            <p className="text-foreground font-bold text-sm sm:text-lg break-words text-center">
              <span className="text-orange-300">📅 Day 4:</span>
              <span className="block sm:inline animate-pulse"> Date & Time Coming Soon</span>
            </p>
          </div>
          <div className="mx-auto max-w-fit bg-gradient-to-r from-purple-500/20 to-purple-400/20 backdrop-blur-sm border border-purple-300/30 rounded-lg px-3 sm:px-6 py-2 sm:py-3 shadow-lg shadow-purple-400/20 glow">
            <p className="text-foreground font-bold text-sm sm:text-lg break-words text-center">
              <span className="text-purple-300">🎯 Day 3:</span>
              <span className="block sm:inline"> Wednesday, July 24th</span>
              <br className="sm:hidden" />
              <span className="block sm:inline"> • 3:30 PM - 5:00 PM CDT</span>
            </p>
          </div>
          <div className="mx-auto max-w-fit bg-black/20 backdrop-blur-sm border border-gray-500/30 rounded-lg px-3 sm:px-4 py-2 opacity-60">
            <p className="text-gray-300 font-medium line-through text-xs sm:text-sm break-words text-center">
              <span className="text-gray-400">✓ Day 2:</span>
              <span className="block sm:inline"> Friday, July 18th</span>
              <br className="sm:hidden" />
              <span className="block sm:inline"> • 3:30 PM - 5:00 PM CDT (Completed)</span>
            </p>
          </div>
          <div className="mx-auto max-w-fit bg-black/20 backdrop-blur-sm border border-gray-500/30 rounded-lg px-3 sm:px-4 py-2 opacity-60">
            <p className="text-gray-300 font-medium line-through text-xs sm:text-sm break-words text-center">
              <span className="text-gray-400">✓ Day 1:</span>
              <span className="block sm:inline"> Thursday, July 10th</span>
              <br className="sm:hidden" />
              <span className="block sm:inline"> • 11:00 AM - 12:30 PM CDT (Completed)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEventTimer;
