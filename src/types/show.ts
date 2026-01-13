export type Franchise = 'rider' | 'sentai' | 'metal'

export interface Show {
  id: string
  title: string
  era: string
  franchise: Franchise
}
