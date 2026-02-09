import Alpine from 'alpinejs'
import { cachedFetch } from './utils/httpCache'

document.addEventListener('alpine:init', () => {
  Alpine.data('testCities', () => ({
    async init() {
      const uf = 'RS'

      try {
        const cities = await cachedFetch(
          `cities:v1:${uf}`,
          `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`
        )

        console.log('CIDADES DO', uf, cities)
      } catch (err) {
        console.error('Erro ao buscar cidades:', err)
      }
    },
  }))
})
