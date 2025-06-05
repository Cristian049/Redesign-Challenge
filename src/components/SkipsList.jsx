import Skip from "./Skip/Skip";

export default function SkipsList({ skips, onSelectSkip, selectedId }) {
  return (
    <div className="skips-grid">
      {skips.map((skip) => (
        <Skip
          key={skip.id}
          skip={skip}
          onSelectSkip={onSelectSkip}
          selectedId={selectedId}
        />
      ))}
    </div>
  );
}
