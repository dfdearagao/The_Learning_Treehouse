import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from './Environment_NN';
import { Player } from './Player_NN';
import { LevelManager } from './LevelManager_NN';
import { Effects } from './Effects_NN';
import { HUD } from './HUD_NN';

interface NeonNebulaProps {
  onBack?: () => void;
}

const NeonNebula: React.FC<NeonNebulaProps> = ({ onBack }) => {
  return (
    <div className="w-full h-[calc(100vh-80px)] relative bg-black overflow-hidden font-sans">
      <Canvas
        shadows
        camera={{ position: [0, 4, 8], fov: 60 }}
        gl={{ antialias: false, powerPreference: "high-performance" }}
        onCreated={({ camera }) => camera.lookAt(0, 2, -20)}
      >
        <Suspense fallback={null}>
          <Environment />
          <group name="PlayerGroup">
            <Player />
          </group>
          <LevelManager />
          <Effects />
        </Suspense>
      </Canvas>
      <HUD onBack={onBack} />
    </div>
  );
};

export default NeonNebula;
