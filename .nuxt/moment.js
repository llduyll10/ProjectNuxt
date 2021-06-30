import moment from 'moment'

import 'moment/locale/vi'

moment.locale('vi')

export default (ctx, inject) => {
  ctx.$moment = moment
  inject('moment', moment)
}
