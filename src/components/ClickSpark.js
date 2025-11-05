import React, { useRef, useCallback } from 'react';
import './ClickSpark.css';

const ClickSpark = ({ 
  children, 
  className = '', 
  sparkColor = '#3b82f6', 
  sparkCount = 8,
  intensity = 'medium', // low, medium, high
  size = 'medium', // small, medium, large
  ...props 
}) => {
  const containerRef = useRef(null);

  const getSparkConfig = useCallback(() => {
    const configs = {
      low: { count: 4, distance: 20, duration: 0.3, size: 2 },
      medium: { count: 6, distance: 30, duration: 0.35, size: 3 },
      high: { count: 8, distance: 40, duration: 0.4, size: 4 }
    };
    
    const sizeConfigs = {
      small: { multiplier: 0.7, glowSize: 1.5 },
      medium: { multiplier: 1, glowSize: 2 },
      large: { multiplier: 1.3, glowSize: 2.5 }
    };
    
    const baseConfig = configs[intensity] || configs.medium;
    const sizeConfig = sizeConfigs[size] || sizeConfigs.medium;
    
    return {
      count: Math.floor(baseConfig.count * sizeConfig.multiplier),
      distance: baseConfig.distance * sizeConfig.multiplier,
      duration: baseConfig.duration,
      sparkSize: baseConfig.size * sizeConfig.multiplier,
      glowSize: baseConfig.size * sizeConfig.glowSize
    };
  }, [intensity, size]);

  const createSpark = useCallback((x, y) => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const config = getSparkConfig();
    const sparks = [];

    // Create main sparks
    for (let i = 0; i < config.count; i++) {
      const spark = document.createElement('div');
      spark.className = 'spark spark-main';
      
      // Calculate angle with slight randomization
      const baseAngle = (360 / config.count) * i;
      const randomOffset = (Math.random() - 0.5) * 20;
      const angle = baseAngle + randomOffset;
      const distance = config.distance + Math.random() * 10;
      
      // Calculate spark position
      const sparkX = Math.cos(angle * Math.PI / 180) * distance;
      const sparkY = Math.sin(angle * Math.PI / 180) * distance;
      
      // Set spark styles
      spark.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${config.sparkSize}px;
        height: ${config.sparkSize}px;
        background: ${sparkColor};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        transform: translate(-50%, -50%);
        animation: sparkMainAnimation ${config.duration}s ease-out forwards;
        --spark-x: ${sparkX}px;
        --spark-y: ${sparkY}px;
        --spark-color: ${sparkColor};
        --glow-size: ${config.glowSize}px;
      `;
      
      container.appendChild(spark);
      sparks.push(spark);
    }

    // Create secondary micro sparks for extra detail
    for (let i = 0; i < Math.floor(config.count / 2); i++) {
      const microSpark = document.createElement('div');
      microSpark.className = 'spark spark-micro';
      
      const angle = Math.random() * 360;
      const distance = config.distance * 0.6 + Math.random() * 15;
      
      const sparkX = Math.cos(angle * Math.PI / 180) * distance;
      const sparkY = Math.sin(angle * Math.PI / 180) * distance;
      
      microSpark.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        width: ${config.sparkSize * 0.5}px;
        height: ${config.sparkSize * 0.5}px;
        background: ${sparkColor};
        border-radius: 50%;
        pointer-events: none;
        z-index: 1000;
        transform: translate(-50%, -50%);
        animation: sparkMicroAnimation ${config.duration * 0.8}s ease-out forwards;
        --spark-x: ${sparkX}px;
        --spark-y: ${sparkY}px;
        --spark-color: ${sparkColor};
        opacity: 0.7;
      `;
      
      container.appendChild(microSpark);
      sparks.push(microSpark);
    }

    // Create ripple effect
    const ripple = document.createElement('div');
    ripple.className = 'spark-ripple';
    ripple.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      width: 0;
      height: 0;
      border: 2px solid ${sparkColor};
      border-radius: 50%;
      pointer-events: none;
      z-index: 999;
      transform: translate(-50%, -50%);
      animation: rippleAnimation ${config.duration}s ease-out forwards;
      opacity: 0.6;
    `;
    
    container.appendChild(ripple);
    sparks.push(ripple);

    // Remove sparks after animation
    setTimeout(() => {
      sparks.forEach(spark => {
        if (spark.parentNode) {
          spark.parentNode.removeChild(spark);
        }
      });
    }, config.duration * 1000);
  }, [sparkColor, getSparkConfig]);

  const handleClick = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    createSpark(x, y);
    
    // Call original onClick if it exists
    if (props.onClick) {
      props.onClick(e);
    }
  }, [createSpark, props]);

  return (
    <div
      ref={containerRef}
      className={`click-spark-container ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default ClickSpark;
