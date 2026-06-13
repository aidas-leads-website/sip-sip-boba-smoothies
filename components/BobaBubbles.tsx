import type { CSSProperties } from "react";

/**
 * Page-wide ambient animation — boba pearls / bubbles gently rising up the page.
 * On-brand for a bubble-tea shop and pure CSS (see globals.css), so there's no
 * JavaScript, no per-frame work, and nothing to hydrate. Values are fixed
 * (no Math.random) to avoid any server/client mismatch.
 *
 * To tune: edit the BUBBLES list below.
 *   left  = horizontal position (%)        size  = diameter (px)
 *   c     = brand color (rgba)             o     = max opacity (kept subtle)
 *   dur   = seconds for one full rise      delay = negative s = already mid-rise
 */
type Bubble = { left: number; size: number; c: string; o: number; dur: number; delay: number };

const TARO = "rgba(155,111,214,.5)";
const TARO_LIGHT = "rgba(201,168,240,.5)";
const BERRY = "rgba(255,111,165,.5)";
const PEACH = "rgba(255,158,125,.5)";
const MATCHA = "rgba(143,192,121,.48)";

const BUBBLES: Bubble[] = [
  { left: 4, size: 26, c: TARO, o: 0.16, dur: 22, delay: -3 },
  { left: 11, size: 14, c: BERRY, o: 0.14, dur: 18, delay: -9 },
  { left: 18, size: 34, c: MATCHA, o: 0.12, dur: 27, delay: -14 },
  { left: 26, size: 18, c: PEACH, o: 0.15, dur: 20, delay: -6 },
  { left: 33, size: 22, c: TARO_LIGHT, o: 0.16, dur: 24, delay: -17 },
  { left: 41, size: 12, c: BERRY, o: 0.13, dur: 16, delay: -2 },
  { left: 48, size: 30, c: TARO, o: 0.13, dur: 25, delay: -11 },
  { left: 56, size: 16, c: MATCHA, o: 0.15, dur: 19, delay: -7 },
  { left: 63, size: 24, c: PEACH, o: 0.15, dur: 23, delay: -15 },
  { left: 70, size: 13, c: TARO_LIGHT, o: 0.13, dur: 17, delay: -4 },
  { left: 77, size: 28, c: BERRY, o: 0.14, dur: 26, delay: -20 },
  { left: 84, size: 19, c: TARO, o: 0.16, dur: 21, delay: -10 },
  { left: 90, size: 15, c: MATCHA, o: 0.14, dur: 18, delay: -5 },
  { left: 95, size: 23, c: PEACH, o: 0.15, dur: 24, delay: -13 },
  { left: 14, size: 20, c: TARO_LIGHT, o: 0.14, dur: 22, delay: -19 },
  { left: 60, size: 11, c: BERRY, o: 0.13, dur: 15, delay: -8 },
];

export function BobaBubbles() {
  return (
    <div className="boba-bubbles" aria-hidden="true">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="boba-bubble"
          style={
            {
              left: `${b.left}%`,
              width: `${b.size}px`,
              height: `${b.size}px`,
              animationDuration: `${b.dur}s`,
              animationDelay: `${b.delay}s`,
              "--c": b.c,
              "--o": b.o,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
