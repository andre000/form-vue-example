import { ValidationProvider, extend, localize } from 'vee-validate'
import { required, min, max } from 'vee-validate/dist/rules'
import ptBR from 'vee-validate/dist/locale/pt_BR.json'

extend('required', required)
extend('min', min)
extend('max', max)

localize({
  ptBR
})

localize('ptBR')

export default ValidationProvider
