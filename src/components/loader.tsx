"use client";

type Loader = {
  progress?: number;
};

export default function Loader({ progress = 0 }: Loader) {
  return (
    <div className="fixed inset-x-0 inset-y-0 z-1000 bg-black flex items-center justify-center">
      <div>
        <p className="text-9xl text-white">{`${progress}%`}</p>
      </div>
    </div>
  );
}
