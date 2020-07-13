import {
  ValidationProvider,
  ValidationObserver,
  extend,
  localize,
  setInteractionMode
} from 'vee-validate'
import { required, min, max, min_value } from 'vee-validate/dist/rules'
import ptBR from 'vee-validate/dist/locale/pt_BR.json'

extend('required', required)
extend('min', min)
extend('max', max)
extend('min_value', min_value)

setInteractionMode('eager')

localize({
  ptBR
})

localize('ptBR')

export { ValidationProvider, ValidationObserver }
