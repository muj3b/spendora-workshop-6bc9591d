import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle2, Clock } from 'lucide-react';

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
  const [, setTimeLeft] = useState<string>('');
  const [eventStatus, setEventStatus] = useState<EventStatus>({ type: 'countdown', message: 'Dates Coming Soon' });

  useEffect(() => {
    if (!isActive) { setEventStatus({ type: 'countdown', message: 'Dates Coming Soon' }); return; }
    const updateTimer = () => {
      const now = new Date();
      const eventStart = new Date(eventStartDateTime);
      const eventDays = Array.from({ length: totalEventDays }, (_, i) => {
        const dayStart = new Date(eventStart); dayStart.setDate(eventStart.getDate() + i);
        const dayEnd = new Date(dayStart); dayEnd.setHours(dayStart.getHours() + eventDurationHours);
        return { start: dayStart, end: dayEnd, day: i + 1 };
      });
      const isDay1Complete = now > eventDays[0].end;
      if (isDay1Complete && eventDays.length === 2) {
        const day2Start = new Date('2025-07-18T15:30:00');
        const day2End = new Date(day2Start); day2End.setHours(day2Start.getHours() + 1.5);
        eventDays[1] = { start: day2Start, end: day2End, day: 2 };
        if (now > day2End) { setEventStatus({ type: 'countdown', message: "Session 3 just ended. Session 4 date and time coming soon!" }); setTimeLeft(''); return; }
        if (now >= day2Start && now <= day2End) { setEventStatus({ type: 'happening-now', message: 'Day 2 is happening now!', currentDay: 2 }); setTimeLeft(''); return; }
        if (now < day2Start) {
          const timeDiff = day2Start.getTime() - now.getTime();
          const days = Math.floor(timeDiff / (1000*60*60*24)), hours = Math.floor((timeDiff % (1000*60*60*24)) / (1000*60*60)), minutes = Math.floor((timeDiff % (1000*60*60)) / (1000*60)), seconds = Math.floor((timeDiff % (1000*60)) / 1000);
          let ts = ''; if (days > 0) ts += `${days}d `; if (hours > 0) ts += `${hours}h `; if (minutes > 0) ts += `${minutes}m `; ts += `${seconds}s`;
          setEventStatus({ type: 'countdown', message: `${ts} until Day 2 begins!`, isFlashing: timeDiff < 86400000 }); setTimeLeft(ts); return;
        }
      }
      const lastEnd = eventDays[eventDays.length - 1].end;
      if (now > lastEnd) { setEventStatus({ type: 'countdown', message: "Session 3 just ended. Session 4 date and time coming soon!" }); setTimeLeft(''); return; }
      const curr = eventDays.find(d => now >= d.start && now <= d.end);
      if (curr) { setEventStatus({ type: 'happening-now', message: `Session is currently happening - Day ${curr.day}`, currentDay: curr.day }); setTimeLeft(''); return; }
      const next = eventDays.find(d => now < d.start);
      if (next) {
        const timeDiff = next.start.getTime() - now.getTime();
        const days = Math.floor(timeDiff / (1000*60*60*24)), hours = Math.floor((timeDiff % (1000*60*60*24)) / (1000*60*60)), minutes = Math.floor((timeDiff % (1000*60*60)) / (1000*60)), seconds = Math.floor((timeDiff % (1000*60)) / 1000);
        let ts = ''; if (days > 0) ts += `${days}d `; if (hours > 0) ts += `${hours}h `; if (minutes > 0) ts += `${minutes}m `; ts += `${seconds}s`;
        setEventStatus({ type: 'countdown', message: `${ts} until ${next.day === 1 ? 'the workshop' : `Day ${next.day}`} begins!`, isFlashing: timeDiff < 86400000 }); setTimeLeft(ts);
      }
    };
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [isActive, eventStartDateTime, eventDurationHours, totalEventDays]);

  if (!isActive) {
    return (<div className={cn('text-center', className)}><h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white font-manrope tracking-tight">Dates Coming Soon</h2></div>);
  }

  const pastSessions = [
    { label: "Session 1", date: "July 10, 2025", time: "11:00 AM – 12:30 PM", location: "R.H. Stafford Library" },
    { label: "Session 2", date: "July 18, 2025", time: "3:30 PM – 5:00 PM", location: "R.H. Stafford Library" },
    { label: "Session 3", date: "July 24, 2025", time: "3:30 PM – 5:00 PM", location: "R.H. Stafford Library" },
  ];

  return (
    <div className={cn('', className)}>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white font-manrope tracking-tight tabular-nums mb-6 text-center">{eventStatus.message}</h2>
      
      {/* Upcoming Session 4 */}
      <div className="p-4 border-2 border-emerald-500/40 dark:border-[#40916c]/40 bg-emerald-50/70 dark:bg-[#40916c]/10 rounded-xl mb-6">
        <div className="flex items-center gap-3 mb-1.5">
          <Clock className="w-5 h-5 text-emerald-600 dark:text-[#52b788]" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white font-manrope">Session 4</h3>
          <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-700 dark:bg-[#40916c] text-white rounded-full">Upcoming</span>
        </div>
        <p className="text-xs font-medium text-slate-600 dark:text-zinc-400 ml-8">Date & Time Coming Soon — Stay tuned!</p>
      </div>

      {/* Past Sessions */}
      <div>
        <h4 className="text-[10px] font-bold text-emerald-700 dark:text-[#52b788] uppercase tracking-widest mb-3">Completed Sessions</h4>
        <div className="space-y-2.5">
          {pastSessions.map((s, i) => (
            <div key={i} className="flex items-start gap-3 p-3.5 border border-slate-200 dark:border-zinc-800 rounded-xl bg-slate-50/80 dark:bg-zinc-900/50">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-[#52b788] shrink-0 mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-bold text-slate-900 dark:text-zinc-200">{s.label}</span>
                  <span className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-400 rounded-full">Completed</span>
                </div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 space-y-0.5">
                  <p>{s.date} · {s.time}</p>
                  <p>{s.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveEventTimer;
