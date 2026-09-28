"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface LightPillarProps {
  topColor?: string;
  bottomColor?: string;
  intensity?: number;
  rotationSpeed?: number;
  interactive?: boolean;
  glowAmount?: number;
  pillarWidth?: number;
  pillarHeight?: number;
  noiseIntensity?: number;
  pillarRotation?: number;
  className?: string;
}

export default function LightPillar({
  topColor = "#a855f7",
  bottomColor = "#3b0764",
  intensity = 1.0,
  rotationSpeed = 0.5,
  interactive = true,
  glowAmount = 0.005,
  pillarWidth = 3.0,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  pillarRotation = 25,
  className = "",
}: LightPillarProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float uTime;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uPillarRotation;
      uniform vec2 uResolution;
      uniform vec2 uMouse;

      varying vec2 vUv;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution.xy) / min(uResolution.x, uResolution.y);

        // Interaction souris
        uv.x -= (uMouse.x - 0.5) * 0.2;

        // Rotation du pilier
        float angle = radians(uPillarRotation);
        mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
        uv = rot * uv;

        // Forme du pilier volumétrique
        // 1. Rayon de base
        float xDist = abs(uv.x) / (uPillarWidth * 0.25);
        float beam = exp(-xDist * xDist * 1.5);

        // 2. Génération de multiples filaments fins (style aurore / threads)
        float threads = 0.0;
        threads += sin(uv.x * 65.0 + uTime * 2.0 + sin(uv.y * 20.0)) * 0.35;
        threads += sin(uv.x * 130.0 - uTime * 3.5 + cos(uv.y * 35.0)) * 0.25;
        threads += cos(uv.x * 240.0 + uTime * 1.8) * 0.2;
        threads = clamp(threads, 0.0, 1.0);

        // 3. Bruit de texture
        float n = noise(uv * 18.0 + vec2(0.0, uTime * 0.5)) * uNoiseIntensity;

        // 4. Couleur et intensité
        float heightFactor = clamp(uv.y * 1.2 + 0.5, 0.0, 1.0);
        vec3 color = mix(uBottomColor, uTopColor, heightFactor);

        float fade = smoothstep(1.2, 0.3, length(uv));

        // Fusion : le faisceau sert de masque, les filaments créent les fils d'aurore
        float alpha = beam * (0.3 + threads * 1.8 + n * 0.4) * uIntensity * fade;
        vec3 finalColor = color * (1.2 + threads * 1.5);

        gl_FragColor = vec4(finalColor, clamp(alpha, 0.0, 1.0));
      }
    `;

    const uniforms = {
      uTime: { value: 0 },
      uTopColor: { value: new THREE.Color(topColor) },
      uBottomColor: { value: new THREE.Color(bottomColor) },
      uIntensity: { value: intensity },
      uGlowAmount: { value: glowAmount },
      uPillarWidth: { value: pillarWidth },
      uPillarHeight: { value: pillarHeight },
      uNoiseIntensity: { value: noiseIntensity },
      uPillarRotation: { value: pillarRotation },
      uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) },
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
    };

    const geometry = new THREE.PlaneGeometry(2, 2);
    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      uniforms.uResolution.value.set(width, height);
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive || !container) return;
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      uniforms.uMouse.value.set(x, y);
    };

    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      uniforms.uTime.value = clock.getElapsedTime() * rotationSpeed;
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      if (interactive) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [
    topColor,
    bottomColor,
    intensity,
    rotationSpeed,
    interactive,
    glowAmount,
    pillarWidth,
    pillarHeight,
    noiseIntensity,
    pillarRotation,
  ]);

  return <div ref={containerRef} className={`w-full h-full ${className}`} />;
}