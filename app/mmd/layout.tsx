import Script from 'next/script';

export default function MmdLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mmd-page">
      {/* Babylon.js dependencies */}
      <Script src="https://cdn.babylonjs.com/babylon.js" strategy="beforeInteractive" />
      <Script src="https://cdn.babylonjs.com/havok/HavokPhysics_umd.js" strategy="beforeInteractive" />
      <Script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js" strategy="beforeInteractive" />
      <Script src="https://cdn.babylonjs.com/gui/babylon.gui.min.js" strategy="beforeInteractive" />
      
      <div className="w-full h-screen overflow-hidden">
        {children}
      </div>
    </div>
  );
}