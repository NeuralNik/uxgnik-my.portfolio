"use client"

import React, { useEffect, useState, useRef } from 'react';
import './GridTrailEffect.css';

interface BoundedGridEffectProps {
  gridRows?: number;
  gridCols?: number;
  trailLength?: number;
  trailColor?: string;
  fadeSpeed?: number;
  width?: string;
  height?: string;
  className?: string;
}

const BoundedGridEffect: React.FC<BoundedGridEffectProps> = ({
  gridRows = 20,
  gridCols = 30,
  trailLength = 8,
  trailColor = '224, 226, 219',
  fadeSpeed = 150,
  width = '95%',
  height = '85%',
  className = ''
}) => {
  const [gridTrail, setGridTrail] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const getGridIndex = (x: number, y: number) => {
    if (!containerRef.current) return -1;
    
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = x - rect.left;
    const relativeY = y - rect.top;

    if (relativeX < 0 || relativeY < 0 || relativeX > rect.width || relativeY > rect.height) {
      return -1;
    }

    const cellWidth = rect.width / gridCols;
    const cellHeight = rect.height / gridRows;
    
    const col = Math.floor(relativeX / cellWidth);
    const row = Math.floor(relativeY / cellHeight);
    
    if (col >= gridCols || row >= gridRows || col < 0 || row < 0) return -1;
    
    return row * gridCols + col;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const gridIndex = getGridIndex(e.clientX, e.clientY);
      
      if (gridIndex !== -1) {
        setGridTrail(prev => {
          if (prev[prev.length - 1] !== gridIndex) {
            const newTrail = [...prev, gridIndex];
            return newTrail.slice(-trailLength);
          }
          return prev;
        });
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [trailLength, gridCols]);

  useEffect(() => {
    const interval = setInterval(() => {
      setGridTrail(prev => prev.length > 0 ? prev.slice(1) : prev);
    }, fadeSpeed);

    return () => clearInterval(interval);
  }, [fadeSpeed]);

  return (
    <div 
      ref={containerRef}
      className={`bounded-grid-container ${className}`}
      style={{
        width,
        height,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'grid',
        gridTemplateRows: `repeat(${gridRows}, 1fr)`,
        gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
        border: '2px solid rgba(255,255,255,0.25)',
        borderRadius: '12px',
        overflow: 'hidden',
        zIndex: 1,
        boxShadow: '0 0 0 1px rgba(255,255,255,0.1), inset 0 0 0 1px rgba(255,255,255,0.05)',
      }}
    >
      {Array.from({ length: gridRows * gridCols }).map((_, i) => {
        const trailIndex = gridTrail.indexOf(i);
        const isInTrail = trailIndex !== -1;
        const intensity = isInTrail ? (trailIndex + 1) / gridTrail.length : 0;
        
        // Generate different texture patterns for each cell
        const row = Math.floor(i / gridCols);
        const col = i % gridCols;
        const patternType = (row + col) % 4;
        
        let patternStyle = {};
        
        if (isInTrail && intensity > 0.3) {
          switch (patternType) {
            case 0:
              patternStyle = {
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  rgba(${trailColor}, ${0.25 + intensity * 0.35}) 0px,
                  rgba(${trailColor}, ${0.25 + intensity * 0.35}) 2px,
                  transparent 2px,
                  transparent 6px
                )`
              };
              break;
            case 1:
              patternStyle = {
                backgroundImage: `radial-gradient(circle at 25% 25%, rgba(${trailColor}, ${0.3 + intensity * 0.4}) 2px, transparent 2px),
                                 radial-gradient(circle at 75% 75%, rgba(${trailColor}, ${0.3 + intensity * 0.4}) 2px, transparent 2px)`,
                backgroundSize: '8px 8px'
              };
              break;
            case 2:
              patternStyle = {
                backgroundImage: `linear-gradient(rgba(${trailColor}, ${0.2 + intensity * 0.3}) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(${trailColor}, ${0.2 + intensity * 0.3}) 1px, transparent 1px)`,
                backgroundSize: '4px 4px'
              };
              break;
            case 3:
              patternStyle = {
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  rgba(${trailColor}, ${0.2 + intensity * 0.3}) 0px,
                  rgba(${trailColor}, ${0.2 + intensity * 0.3}) 1px,
                  transparent 1px,
                  transparent 4px
                ),
                repeating-linear-gradient(
                  -45deg,
                  rgba(${trailColor}, ${0.2 + intensity * 0.3}) 0px,
                  rgba(${trailColor}, ${0.2 + intensity * 0.3}) 1px,
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
            className={`bounded-grid-cell ${isInTrail ? 'bounded-grid-cell-active' : ''}`}
            style={{
              background: isInTrail 
                ? `rgba(${trailColor}, ${0.15 + intensity * 0.4})` 
                : 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.08)',
              transition: 'all 0.3s ease',
              ...patternStyle
            }}
          />
        );
      })}
    </div>
  );
};

export default BoundedGridEffect;