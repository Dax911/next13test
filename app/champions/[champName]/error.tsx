"use client"

export default function HandleError({ error }:any) {
  return (
    <section>
      <h1>Oops! Something went wrong</h1>
      <pre>{error.message}</pre>
    </section>
  );
}