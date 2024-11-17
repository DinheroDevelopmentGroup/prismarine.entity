import type { Entity as TEntity } from 'prismarine-entity';
import factory from 'prismarine-entity';

import registry from '../prismarine.registry/local.js';

export type Entity = TEntity;

export const Entity: typeof TEntity = (
  factory as unknown as (
    registryOrVersion: typeof registry | string,
  ) => typeof TEntity
)(registry);

export default Entity;
