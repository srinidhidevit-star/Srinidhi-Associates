export function MobileOverlay({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 bg-black/40 z-40 transition ${
        open
          ? "opacity-100 visible"
          : "opacity-0 invisible"
      }`}
    ></div>
  );
}