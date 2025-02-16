import dynamic from 'next/dynamic';

// Import MmdViewer dynamically to avoid SSR issues
const MmdViewer = dynamic(() => import('@/components/mmd-viewer'), {
  ssr: false
});

export default function MmdPage() {
  return (
    <div className="w-full h-full">
      <MmdViewer />
    </div>
  );
}