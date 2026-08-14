import { memo, useCallback, useEffect, useRef, useState } from "react";
import { Play, Pause, Loader2, Captions, CaptionsOff, Gauge } from "lucide-react";
import type { AudiobookChapter, TranscriptSegment } from "@/data/audiobooks";

interface Props {
  chapter: AudiobookChapter;
  isActivePlayer: boolean;
  onPlay: (id: string) => void;
}

const SPEEDS = [1, 1.25, 1.5, 2];

const formatTime = (t: number) => {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const AudiobookChapter = ({ chapter, isActivePlayer, onPlay }: Props) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const transcriptBoxRef = useRef<HTMLDivElement>(null);
  const activeSegRef = useRef<HTMLButtonElement>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [showTranscript, setShowTranscript] = useState(false);
  const [segments, setSegments] = useState<TranscriptSegment[] | null>(null);
  const [loadingTranscript, setLoadingTranscript] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);

  useEffect(() => {
    if (!isActivePlayer && playing) {
      audioRef.current?.pause();
    }
  }, [isActivePlayer, playing]);

  const loadTranscript = useCallback(async () => {
    if (segments || loadingTranscript) return;
    setLoadingTranscript(true);
    try {
      const res = await fetch(chapter.transcript);
      if (res.ok) {
        setSegments(await res.json());
      }
    } catch {
      // transcript unavailable — player still works
    } finally {
      setLoadingTranscript(false);
    }
  }, [chapter.transcript, segments, loadingTranscript]);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      onPlay(chapter.id);
      audio.play();
      setShowTranscript(true);
      loadTranscript();
    }
  }, [playing, onPlay, chapter.id, loadTranscript]);

  const toggleTranscript = useCallback(() => {
    setShowTranscript((v) => {
      if (!v) loadTranscript();
      return !v;
    });
  }, [loadTranscript]);

  const cycleSpeed = useCallback(() => {
    setSpeedIdx((i) => {
      const next = (i + 1) % SPEEDS.length;
      if (audioRef.current) audioRef.current.playbackRate = SPEEDS[next];
      return next;
    });
  }, []);

  const activeSegIdx = segments
    ? segments.findIndex((seg) => currentTime >= seg.s && currentTime < seg.e)
    : -1;

  useEffect(() => {
    if (autoScroll && activeSegIdx >= 0 && activeSegRef.current) {
      activeSegRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [activeSegIdx, autoScroll]);

  const seekTo = useCallback((t: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = t;
    setCurrentTime(t);
    if (audio.paused) {
      onPlay(chapter.id);
      audio.play();
    }
  }, [onPlay, chapter.id]);

  const onBarClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    if (duration > 0) seekTo(ratio * duration);
  }, [duration, seekTo]);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="border border-slate-200 dark:border-white/10 bg-white dark:bg-black rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <audio
        ref={audioRef}
        src={chapter.audio}
        preload="metadata"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
      />

      <div className="p-6 sm:p-7">
        <div className="flex items-start gap-4 sm:gap-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-emerald-700 to-emerald-900 dark:from-[#2d6a4f] dark:to-[#1b4332] text-white flex items-center justify-center font-black font-manrope shrink-0 shadow-md text-sm sm:text-base">
            {chapter.label}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white font-manrope leading-snug">
              {chapter.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1 font-medium leading-relaxed">
              {chapter.description}
            </p>
          </div>
        </div>

        {/* Player controls */}
        <div className="mt-5 flex items-center gap-3 sm:gap-4">
          <button
            onClick={togglePlay}
            aria-label={playing ? `Pause ${chapter.title}` : `Play ${chapter.title}`}
            className="w-11 h-11 rounded-full bg-emerald-800 dark:bg-[#2d6a4f] hover:bg-emerald-900 dark:hover:bg-[#40916c] text-white flex items-center justify-center shrink-0 shadow-md transition-all hover:scale-105 active:scale-95"
          >
            {playing ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
          </button>

          <div className="flex-1 min-w-0">
            <div
              className="group/bar h-2 rounded-full bg-slate-100 dark:bg-zinc-800 cursor-pointer relative"
              onClick={onBarClick}
              role="progressbar"
              aria-valuenow={Math.round(progress)}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 dark:from-[#40916c] dark:to-[#52b788] transition-[width] duration-150"
                style={{ width: `${progress}%` }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-emerald-700 dark:bg-[#52b788] shadow opacity-0 group-hover/bar:opacity-100 transition-opacity"
                style={{ left: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between mt-1.5 text-[11px] font-semibold text-slate-500 dark:text-zinc-500 tabular-nums">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>

          <button
            onClick={cycleSpeed}
            aria-label="Change playback speed"
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-xs font-bold text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors tabular-nums shrink-0"
          >
            <Gauge className="w-3.5 h-3.5" /> {SPEEDS[speedIdx]}x
          </button>

          <button
            onClick={toggleTranscript}
            aria-label={showTranscript ? "Hide transcript" : "Show transcript"}
            className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-bold transition-colors shrink-0 ${
              showTranscript
                ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-[#52b788]"
                : "border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800"
            }`}
          >
            {showTranscript ? <Captions className="w-3.5 h-3.5" /> : <CaptionsOff className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">Transcript</span>
          </button>
        </div>
      </div>

      {/* Synced transcript */}
      {showTranscript && (
        <div className="border-t border-slate-200 dark:border-white/10 bg-slate-50/60 dark:bg-zinc-950/60">
          <div className="flex items-center justify-between px-6 sm:px-7 pt-4">
            <p className="text-[10px] font-bold text-emerald-700 dark:text-[#52b788] uppercase tracking-widest">
              Live transcript — follows the audio
            </p>
            <button
              onClick={() => setAutoScroll((v) => !v)}
              className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md transition-colors ${
                autoScroll
                  ? "text-emerald-700 dark:text-[#52b788] bg-emerald-100/70 dark:bg-emerald-950/60"
                  : "text-slate-400 dark:text-zinc-500 hover:text-slate-600 dark:hover:text-zinc-300"
              }`}
            >
              Auto-scroll {autoScroll ? "on" : "off"}
            </button>
          </div>

          <div ref={transcriptBoxRef} className="max-h-72 overflow-y-auto px-6 sm:px-7 py-4 space-y-2.5">
            {loadingTranscript && (
              <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-zinc-500 py-6 justify-center">
                <Loader2 className="w-4 h-4 animate-spin" /> Loading transcript…
              </div>
            )}
            {!loadingTranscript && !segments && (
              <p className="text-sm text-slate-500 dark:text-zinc-500 py-6 text-center">
                Transcript unavailable for this chapter yet.
              </p>
            )}
            {segments?.map((seg, i) => {
              const isActive = i === activeSegIdx;
              return (
                <button
                  key={i}
                  ref={isActive ? activeSegRef : undefined}
                  onClick={() => seekTo(seg.s)}
                  className={`block w-full text-left px-3.5 py-2.5 rounded-xl text-sm leading-relaxed font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-emerald-100/80 dark:bg-emerald-950/50 text-slate-900 dark:text-white shadow-sm"
                      : "text-slate-500 dark:text-zinc-500 hover:bg-slate-100 dark:hover:bg-zinc-900 hover:text-slate-700 dark:hover:text-zinc-300"
                  }`}
                >
                  {seg.w.length > 0
                    ? seg.w.map((word, j) => {
                        const wordActive = isActive && currentTime >= word.s && currentTime < word.e;
                        return (
                          <span
                            key={j}
                            className={`transition-colors duration-150 ${
                              wordActive ? "text-emerald-700 dark:text-[#52b788] font-bold" : ""
                            }`}
                          >
                            {word.w}{" "}
                          </span>
                        );
                      })
                    : seg.t}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default memo(AudiobookChapter);
