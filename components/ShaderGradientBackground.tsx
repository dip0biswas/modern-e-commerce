'use client';

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Professional color palette - neon blues, purples, pinks, yellows
  vec3 palette(float t) {
    vec3 a = vec3(0.2, 0.3, 0.5);
    vec3 b = vec3(0.4, 0.5, 0.6);
    vec3 c = vec3(1.0, 0.9, 0.8);
    vec3 d = vec3(0.0, 0.1, 0.4);
    return a + b * cos(6.28318 * (c * t + d));
  }

  // Smooth noise function
  float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    
    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));
    
    return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = (uv * 2.0 - 1.0) * vec2(uResolution.x / uResolution.y, 1.0);
    
    vec3 finalColor = vec3(0.0);
    float time = uTime * 0.15;
    
    // Create multiple layers of organic shapes
    for (float i = 0.0; i < 3.0; i++) {
      vec2 offset = vec2(
        sin(time * 0.3 + i * 2.0) * 0.5,
        cos(time * 0.2 + i * 1.5) * 0.5
      );
      
      vec2 pos = p + offset;
      
      // Create flowing, organic patterns
      float dist = length(pos);
      float angle = atan(pos.y, pos.x);
      
      // Wavy distortion
      float wave = sin(dist * 3.0 - time + i) * 0.3;
      wave += sin(angle * 5.0 + time * 0.5) * 0.2;
      
      // Multiple frequency noise
      float n = smoothNoise(pos * 2.0 + time * 0.3);
      n += smoothNoise(pos * 4.0 - time * 0.2) * 0.5;
      n += smoothNoise(pos * 8.0 + time * 0.4) * 0.25;
      
      // Create glowing edges
      float glow = 1.0 / (dist * 2.0 + 0.5);
      glow *= (1.0 + wave);
      glow *= (0.5 + n * 0.5);
      
      // Color based on position and time
      vec3 col = palette(dist * 0.3 + time * 0.5 + i * 0.3 + n * 0.2);
      
      // Add neon glow effect
      col = mix(col, vec3(1.0, 0.9, 1.0), glow * 0.3);
      
      finalColor += col * glow * (0.4 + sin(time + i) * 0.1);
    }
    
    // Enhanced contrast and saturation
    finalColor = pow(finalColor, vec3(1.2));
    finalColor *= 0.8;
    
    // Add subtle vignette
    float vignette = 1.0 - length(p) * 0.3;
    finalColor *= vignette;
    
    // Boost neon colors
    finalColor = mix(finalColor, finalColor * vec3(1.2, 1.0, 1.3), 0.3);
    
    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

const AnimatedGradientMesh: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.elapsedTime;
    }
  });

  React.useEffect(() => {
    const handleResize = () => {
      uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [uniforms]);

  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

const ShaderGradientBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        className="w-full h-full"
      >
        <AnimatedGradientMesh />
      </Canvas>
      {/* Fallback gradient for low-end devices */}
      <noscript>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900" />
      </noscript>
    </div>
  );
};

export default ShaderGradientBackground;
