import Link from "next/link";

async function fetchChampions() {
  const response = await fetch('http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json', { next: { revalidate: 5 } });
  const {data} = await response.json();
  return data;
}

export async function generateStaticParams() {
  const champions = await fetchChampions();
  return Object.keys(champions).map(champName => ({  champName }));
}

//fetching list of champions
//endpoint http://ddragon.leagueoflegends.com/cdn/12.20.1/data/en_US/champion.json

export default async function ChampionsLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const champions = await fetchChampions();

  return (
    <div style={{display: 'flex'}}>
      <nav>
        <ul>
          {
            Object.keys(champions).map(champName => (
              <li key={champName}>
                <Link href={`/champions/${champName}`}>
                  {champName}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>
      {children}
    </div>
  )
}

