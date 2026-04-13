export default function SectionH3({ text, align }) {
  return (
    <>
      <h3 className={`text-xl font-bold text-main mb-3 ${align}`}>{text}</h3>
    </>
  );
}
