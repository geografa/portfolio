"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HandNote } from "@/components/ui/HandNote";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const playPromise = video.play();
    if (playPromise) {
      playPromise.catch(() => {
        /* autoplay blocked — first tap elsewhere may be required */
      });
    }
  }, []);

  return (
    <section className="hero hero--video" id="top">
      <div className="hero-media" aria-hidden>
        <video
          ref={videoRef}
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/img/maphero.mp4"
        />
        <div className="hero-gradient" />
      </div>
      <div className="container hero-content">
        <Eyebrow>Geografa · est. 2005 · Portland, OR</Eyebrow>
        <h1>
          Web mapping support <em>at the ready</em>
        </h1>
        <p className="lede">
          Twenty years of geospatial work — from environmental GIS, to building
          Mapbox&apos;s startup technical-support engineering team, to a long,
          ongoing list of small experiments in the open. We help teams ship maps
          that hold up under pressure.
        </p>
        <div className="hero-actions">
          <Button href="/#work" variant="primary">
            See the work <span className="arrow">→</span>
          </Button>
          <Button href="/#contact" variant="secondary">
            Start a conversation
          </Button>
          <HandNote>— let&apos;s make a map</HandNote>
        </div>
      </div>
    </section>
  );
}
