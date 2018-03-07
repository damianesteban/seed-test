import { DataMapper } from '@aws/dynamodb-data-mapper';
import {
  attribute,
  hashKey,
  rangeKey,
  table,
} from '@aws/dynamodb-data-mapper-annotations';

@table(`${process.env}-items`)
export class Item {
  @hashKey() id: string;
  @attribute() name: string;
}