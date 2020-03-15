import fs from 'fs'
import path from 'path'
import marked from 'marked'

const content = marked(fs.readFileSync(path.join(__static, 'about.md')).toString())
console.log(123)

export default {
  name: 'about',
  render() {
    return <div class="about">
      <el-row class="bottom-gutter">
        <el-card shadow="hover">
          <div class="about-content" domPropsInnerHTML={content}></div>
        </el-card>
      </el-row>
    </div>
  }
}

