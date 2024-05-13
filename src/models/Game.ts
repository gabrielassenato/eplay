class Game {
  title: string
  category: string
  system: string
  description: string
  infos: string[]
  image: string
  id: number

  constructor(
    id: number,
    image: string,
    infos: string[],
    description: string,
    system: string,
    category: string,
    title: string
  ) {
    this.id = id
    this.image = image
    this.infos = infos
    this.description = description
    this.system = system
    this.category = category
    this.title = title
  }
}

export default Game
