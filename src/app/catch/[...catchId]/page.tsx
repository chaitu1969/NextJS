export default async function CatchId({
  params,
}: {
  params: { catchId: number[] };
}) {
  const catchId = (await params).catchId;

  return (
    <>
      <h1>CatchId : {catchId}</h1>
    </>
  );
}
