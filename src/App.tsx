

import { Component, Prop, Vue } from 'vue-property-decorator'
import style from './style.module.scss'

console.log(style.login)

@Component({
  name: 'App'
})
export default class extends Vue {
  render() {
    return <div class={style.login} id="app">
      <router-view/>
    </div>
  }
}
