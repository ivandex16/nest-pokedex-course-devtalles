import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//*Llamamos al decorador Schema para indicar que esto sera un schema de mongo.
@Schema()
//*extendemos la clase Pokemon de Document de mongoose.
export class Pokemon extends Document {
  //*con el decorador @Prop le indicamos que la porpiedad nombre sera unica.
  @Prop({
    unique: true,
    index: true,
  })
  name: string;

  @Prop({
    unique: true,
    index: true,
  })
  no: number;
}
//*asi es como exportamos el schema de mongo con la libreia de mongoose de nest js.
export const PokemonSchema = SchemaFactory.createForClass(Pokemon);
