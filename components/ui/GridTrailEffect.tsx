"use client"

import React, { useEffect, useState, useRef } from 'react';
import './GridTrailEffect.css';

interface GridTrailEffectProps {
  gridRows?: number;
  gridCols?: number;
  trailLength?: number;
  trailColor?: string;
  fadeSpeed?: number;
  children?: React.ReactNode;
}

const GridTrailEffect: React.FC<GridTrailEffectProps> = ({
  gridRows = 20,
  gridCols = 30,
  trailLength = 8,
  trailColor = '158, 231, 102', // RGB values for #9EE766
  fadeSpeed = 150,
  children
}) => {
  const [gridTrail, setGridTrail] = useState<number[]>([]);
  const gridRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getGridIndex = (x: number, y: number) => {
    // Use viewport dimensions for fixed positioning
    const cellWidth = window.innerWidth / gridCols;
    const cellHeight = window.innerHeight / gridRows;
    
    const col = Math.floor(x / cellWidth);
    const row = Math.floor(y / cellHeight);
    
    if (col >= gridCols || row >= gridRows || col < 0 || row < 0) return -1;
    
    return row * gridCols + col;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const gridIndex = getGridIndex(e.clientX, e.clientY);
      
      if (gridIndex !== -1) {
        setGridTrail(prev => {
          // Only add if it's a new grid cell
          if (prev[prev.length - 1] !== gridIndex) {
            const newTrail = [...prev, gridIndex];
            return newTrail.slice(-trailLength);
          }
          return prev;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [trailLength, gridCols]);

  // Clear trail gradually
  useEffect(() => {
    const interval = setInterval(() => {
      setGridTrail(prev => prev.length > 0 ? prev.slice(1) : prev);
    }, fadeSpeed);

    return () => clearInterval(interval);
  }, [fadeSpeed]);

  return (
    <div 
      ref={containerRef}
      className="grid-trail-container"
      style={{
        '--grid-rows': gridRows,
        '--grid-cols': gridCols,
        '--cell-width': `${100 / gridCols}vw`,
        '--cell-height': `${100 / gridRows}vh`
      } as React.CSSProperties}
    >
      {/* Grid Background */}
      <div className="grid-trail-bg">
        {Array.from({ length: gridRows * gridCols }).map((_, i) => {
          const trailIndex = gridTrail.indexOf(i);
          const isInTrail = trailIndex !== -1;
          const intensity = isInTrail ? (trailIndex + 1) / gridTrail.length : 0;
          
          // Generate different texture patterns for each cell
          const row = Math.floor(i / gridCols);
          const col = i % gridCols;
          const patternType = (row + col) % 4;
          
          let patternClass = '';
          let patternStyle = {};
          
          if (isInTrail && intensity > 0.3) {
            switch (patternType) {
              case 0:
                // Diagonal lines pattern
                patternClass = 'diagonal-lines';
                patternStyle = {
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    rgba(${trailColor}, ${0.15 + intensity * 0.25}) 0px,
                    rgba(${trailColor}, ${0.15 + intensity * 0.25}) 2px,
                    transparent 2px,
                    transparent 6px
                  )`
                };
                break;
              case 1:
                // Dots pattern
                patternClass = 'dots-pattern';
                patternStyle = {
                  backgroundImage: `radial-gradient(circle at 25% 25%, rgba(${trailColor}, ${0.2 + intensity * 0.3}) 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, rgba(${trailColor}, ${0.2 + intensity * 0.3}) 2px, transparent 2px)`,
                  backgroundSize: '8px 8px'
                };
                break;
              case 2:
                // Grid pattern
                patternClass = 'grid-pattern';
                patternStyle = {
                  backgroundImage: `linear-gradient(rgba(${trailColor}, ${0.1 + intensity * 0.2}) 1px, transparent 1px),
                                   linear-gradient(90deg, rgba(${trailColor}, ${0.1 + intensity * 0.2}) 1px, transparent 1px)`,
                  backgroundSize: '4px 4px'
                };
                break;
              case 3:
                // Cross-hatch pattern
                patternClass = 'cross-hatch';
                patternStyle = {
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    rgba(${trailColor}, ${0.1 + intensity * 0.2}) 0px,
                    rgba(${trailColor}, ${0.1 + intensity * 0.2}) 1px,
                    transparent 1px,
                    transparent 4px
                  ),
                  repeating-linear-gradient(
                    -45deg,
                    rgba(${trailColor}, ${0.1 + intensity * 0.2}) 0px,
                    rgba(${trailColor}, ${0.1 + intensity * 0.2}) 1px,
                    transparent 1px,
                    transparent 4px
                  )`
                };
                break;
            }
          }
          
          return (
            <div 
              key={i} 
              ref={el => { gridRefs.current[i] = el; }}
              className={`grid-trail-cell ${isInTrail ? 'grid-trail-cell-active' : ''} ${patternClass}`}
              style={{
                background: isInTrail 
                  ? `rgba(${trailColor}, ${0.1 + intensity * 0.3})` 
                  : 'rgba(255,255,255,0.005)',
                ...patternStyle
              }}
            />
          );
        })}
      </div>
      
      {/* Content Layer */}
      <div className="grid-trail-content">
        {children}
      </div>
    </div>
  );
};

export default GridTrailEffect;