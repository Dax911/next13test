import { notFound } from 'next/navigation';

async function fetchChampion(slug: string) {
  const res = await fetch(
    `http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion/${slug}.json`
  );
  const { data } = await res.json();
  return data[slug];
}

export default async function ChampionPage({ params }: any) {
  try {
    const champion = await fetchChampion(params.champName);

    return (
      <section>
        <pre> {JSON.stringify(champion, null, 4)}</pre>
      </section>
    );
  } catch (e) {
    notFound();
  }
}
