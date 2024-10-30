import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PokemonController } from 'src/pokemon/pokemon.controller';
import { PokemonService } from 'src/pokemon/pokemon.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Pokemon, PokemonSchema } from 'src/pokemon/entities/pokemon.entity';
import { PokemonModule } from 'src/pokemon/pokemon.module';
import { CommonModule } from 'src/common/common.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [SeedController, PokemonController],
  providers: [SeedService, PokemonService],
  imports: [
    //**aqui importamos los modulos externos para usar sus servicios en este modulo*/
    ConfigModule,
    PokemonModule,
    CommonModule,
  ],
})
export class SeedModule {}
