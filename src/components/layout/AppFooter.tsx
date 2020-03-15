
import style from './AppFooter.module.scss'
import marked from 'marked'
import fs from 'fs'
import path from 'path'


const content = marked(fs.readFileSync(path.join(__static, 'footer.md')).toString())
console.log('footer.md file read')

export default {
  name: 'AppFooter',
  render() {
    return <div class={style.footer}>
      <div class={style['footer-copyright']} domProps={{ innerHTML: content }}></div>
    </div>
  }
}

