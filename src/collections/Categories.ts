import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated, ignoreAuthenticated } from '../access/authenticated'
import { slugField } from '@/fields/slug'

export const Categories: CollectionConfig = {
  slug: 'categories',
  access: {
    create: ignoreAuthenticated,
    delete: ignoreAuthenticated,
    read: ignoreAuthenticated,
    update: ignoreAuthenticated,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    ...slugField(),
  ],
}
