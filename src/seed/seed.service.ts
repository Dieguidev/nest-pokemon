import { Injectable } from '@nestjs/common';
import { PokeResponse } from './interfaces/poke-response.interface';

import { InjectModel } from '@nestjs/mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { Model } from 'mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';


@Injectable()
export class SeedService {
  // constructor(
  //   private readonly pokemonService: PokemonService
  // ) { }
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) { }



  async executeSeed() {
    await this.pokemonModel.deleteMany()
    const  data  = await this.http.get<PokeResponse>('https://pokeapi.co/api/v2/pokemon?limit=650')

    // const insertPromisesArray = [];

    // data.results.forEach(({ name, url }) => {
    //   const segments = url.split('/')
    //   const no: number = +segments[6]

    //   insertPromisesArray.push(this.pokemonModel.create({ name, no }))
    // });

    // await Promise.all(insertPromisesArray)


    //*forma mas rapida de hacerlo

    const pokemonToInsert: { name: string, no: number }[] = []

    data.results.forEach(({ name, url }) => {
      const segments = url.split('/')
      const no: number = +segments[6]

      pokemonToInsert.push({ name, no })
    });

    await this.pokemonModel.insertMany(pokemonToInsert)

    return 'Seed ok'
  }
}
