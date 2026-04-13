export default function SectionHeading({ title, text, align }) {
  return (
    <>
      <p
        className={`text-xs text-blue font-bold mb-3 uppercase tracking-widest ${align}`}
      >
        {text}
      </p>
      <h2
        className={`text-5xl font-bold text-main mb-12 ${align} max-sm:text-3xl max-sm:mb-5 leading-14 max-sm:leading-none`}
      >
        {title}
      </h2>
    </>
  );
}
