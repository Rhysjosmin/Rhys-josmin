export default function WIP({ inProgress }: { inProgress: boolean }) {
  if (!inProgress) {
    return <></>;
  }

  return (
    <div className="bg-black border-t border-white/10 fixed bottom-0 w-full p-4 z-[10000]">
      🚧 🚧 This Site is Under Development ( Last Update : 16th January 2024 )
    </div>
  );
}
