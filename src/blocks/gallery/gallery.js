import { Fancybox } from '@fancyapps/ui'
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru'

export default function gallery() {
  Fancybox.defaults.l10n = ru
  Fancybox.defaults.infinite = 1
}
