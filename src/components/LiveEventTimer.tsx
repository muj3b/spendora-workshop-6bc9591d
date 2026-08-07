import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface LiveEventTimerProps {
  isActive?: boolean;
  eventStartDateTime?: string;
  eventDurationHours?: number;
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
  eventStartDateTime = '2025-07-10T11:00:00',
  eventDurationHours = 1.5,
  totalEventDays = 2,
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
      
      const eventDays = Array.from({ length: totalEventDays }, (_, i) => {
        const dayStart = new Date(eventStart);
        dayStart.setDate(eventStart.getDate() + i);
        
        const dayEnd = new Date(dayStart);
        dayEnd.setHours(dayStart.getHours() + eventDurationHours);
        
        return { start: dayStart, end: dayEnd, day: i + 1 };
      });

      const lastEventEnd = eventDays[eventDays.length - 1].end;
      const isDay1Complete = now > eventDays[0].end;
      
      if (isDay1Complete && eventDays.length === 2) {
        const day2Start = new Date('2025-07-18T15:30:00');
        const day2End = new Date(day2Start);
        day2End.setHours(day2Start.getHours() + 1.5);
        
        eventDays[1] = { start: day2Start, end: day2End, day: 2 };
        
        if (now > day2End) {
          setEventStatus({
            type: 'countdown',
            message: "Session 3 just ended. Session 4 date and time coming soon!",
          });
          setTimeLeft('');
          return;
        }
        
        if (now >= day2Start && now <= day2End) {
          setEventStatus({
            type: 'happening-now',
            message: `Day 2 is happening now!`,
            currentDay: 2,
          });
          setTimeLeft('');
          return;
        }
        
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
      
      if (now > lastEventEnd) {
        setEventStatus({
          type: 'countdown',
          message: "Session 3 just ended. Session 4 date and time coming soon!",
        });
        setTimeLeft('');
        return;
      }

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

      const nextEventDay = eventDays.find(day => now < day.start);
      if (nextEventDay) {
        const timeDiff = nextEventDay.start.getTime() - now.getTime();
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

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [isActive, eventStartDateTime, eventDurationHours, totalEventDays]);

  if (!isActive) {
    return (
      <div className={cn("text-center", className)}>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">
          Dates Coming Soon
        </h2>
      </div>
    );
  }

  return (
    <div className={cn("text-center px-4", className)}>
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 tracking-tight text-foreground tabular-nums">
        {eventStatus.message}
      </h2>
      
      {/* Session Cards */}
      <div className="mt-4 space-y-3 max-w-full">
        <div className="mx-auto max-w-fit bg-orange-500/10 border border-orange-500/20 rounded-2xl px-4 py-2.5 shadow-sm">
          <p className="text-foreground font-bold text-sm sm:text-base text-center">
            <span className="text-orange-500">📅 Session 4:</span>
            <span className="block sm:inline font-semibold"> Date & Time Coming Soon</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs font-medium text-muted-foreground opacity-80 pt-1">
          <div className="p-2 rounded-xl bg-card border border-border/50 line-through">
            ✓ Session 1: July 10 (11am-12:30pm)
          </div>
          <div className="p-2 rounded-xl bg-card border border-border/50 line-through">
            ✓ Session 2: July 18 (3:30pm-5pm)
          </div>
          <div className="p-2 rounded-xl bg-card border border-border/50 line-through">
            ✓ Session 3: July 24 (3:30pm-5pm)
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveEventTimer;
