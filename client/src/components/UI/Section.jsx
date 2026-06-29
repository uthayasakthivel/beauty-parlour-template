import Container from "./Container";

export default function Section({
  children,
  className = "",
  background = "bg-white",
}) {
  return (
    <section className={`py-28 ${background} ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
