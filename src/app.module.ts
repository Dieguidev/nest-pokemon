import { join } from 'path';
import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PokemonModule } from './pokemon/pokemon.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { ConfigModule } from '@nestjs/config';





@Module({
  imports: [
    //* configuraa las variables de entorno
    ConfigModule.forRoot(),
    // servimos contenido estatico
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    //conexion a mongoDB
    MongooseModule.forRoot('mongodb://localhost:27018/nest-pokemon'),

    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
