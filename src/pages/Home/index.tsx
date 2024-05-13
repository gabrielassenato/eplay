import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import star_wars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    category: 'Ação',
    title: 'Resident Evil 4'
  },
  {
    id: 2,
    image: diablo,
    infos: ['5%', 'R$ 290,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'PS5',
    category: 'Ação',
    title: 'Diablo'
  },
  {
    id: 3,
    image: star_wars,
    infos: ['10%', 'R$ 250,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    category: 'Ação',
    title: 'Star Wars'
  },
  {
    id: 4,
    image: zelda,
    infos: ['10%', 'R$ 250,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    category: 'Ação',
    title: 'Zelda'
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    category: 'Ação',
    title: 'Resident Evil 4'
  },
  {
    id: 6,
    image: resident,
    infos: ['5%', 'R$ 290,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'PS5',
    category: 'Ação',
    title: 'Resident Evil 4'
  },
  {
    id: 7,
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    category: 'Ação',
    title: 'Resident Evil 4'
  },
  {
    id: 8,
    image: resident,
    infos: ['10%', 'R$ 250,00'],
    description:
      'Resident Evil 4, conhecido no Japão como Biohazard 4, é um jogo eletrônico de survival horror...',
    system: 'Windows',
    category: 'Ação',
    title: 'Resident Evil 4'
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList games={promocoes} title="Promoções" background="gray" />
    <ProductsList games={emBreve} title="Em breve" background="black" />
  </>
)

export default Home
