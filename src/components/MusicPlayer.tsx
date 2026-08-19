import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';

const AUDIO_PATH = '/music/anime-theme.mp3';

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [muted, setMuted] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load preferences
  useEffect(() => {
    const savedVol = localStorage.getItem('yumekai_volume');
    const savedMuted = localStorage.getItem('yumekai_muted');
    if (savedVol !== null) {
      setVolume(parseFloat(savedVol));
    }
    if (savedMuted === 'true') {
      setMuted(true);
    }
  }, []);

  // Apply volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = muted ? 0 : volume;
    }
    localStorage.setItem('yumekai_volume', String(volume));
    localStorage.setItem('yumekai_muted', String(muted));
  }, [volume, muted]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play().catch(() => {
        // File might not exist yet — silently ignore
        setPlaying(false);
      });
      setPlaying(true);
    }
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  return (
    <>
      <audio ref={audioRef} src={AUDIO_PATH} loop preload="none" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="fixed bottom-4 left-4 z-40"
        onMouseEnter={() => setShowVolume(true)}
        onMouseLeave={() => setShowVolume(false)}
      >
        <div className="glass-strong flex items-center gap-2 rounded-full p-2 shadow-lg shadow-black/30">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-royal-600 to-sakura-500 text-white transition-transform hover:scale-105"
            aria-label={playing ? 'Pausar' : 'Reproducir'}
          >
            {playing && (
              <motion.span
                className="absolute inset-0 rounded-full bg-royal-500"
                animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            )}
            {playing ? (
              <Pause className="relative h-4 w-4" fill="currentColor" />
            ) : (
              <Play className="relative ml-0.5 h-4 w-4" fill="currentColor" />
            )}
          </button>

          {/* Music icon with animation */}
          <div className="flex items-center gap-1.5 px-1">
            <Music className={`h-4 w-4 ${playing ? 'text-sakura-400' : 'text-gray-400'}`} />
            {playing && (
              <div className="flex items-end gap-0.5">
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="w-0.5 rounded-full bg-sakura-400"
                    animate={{ height: [4, 12, 4] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Volume control */}
          <AnimatePresence>
            {showVolume && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="flex items-center gap-2 overflow-hidden px-2"
              >
                <button onClick={toggleMute} aria-label="Silenciar">
                  {muted || volume === 0 ? (
                    <VolumeX className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Volume2 className="h-4 w-4 text-gray-400" />
                  )}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.01}
                  value={muted ? 0 : volume}
                  onChange={(e) => {
                    setVolume(parseFloat(e.target.value));
                    setMuted(false);
                  }}
                  className="h-1 w-20 cursor-pointer appearance-none rounded-full bg-white/20 accent-sakura-500"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </>
  );
}
