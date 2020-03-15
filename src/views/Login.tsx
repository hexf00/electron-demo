import style from './login.module.scss'
import Component from 'vue-class-component'
import Vue from 'vue'
import { Form, FormItem } from 'element-ui'

import { Action } from 'vuex-class'
@Component({
  name: 'login'
})
export default class Login extends Vue {
  public formValues = {
    username: '',
    password: ''
  }

  public rules = {
    username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }

  @Action('getUser')
  public getUser!: <T>(username: string) => Promise<T>

  async login() {
    const { username } = this.formValues
    console.log(username)

    try {
      await this.getUser(username)
      this.$notify.success({
        duration: 1000,
        title: '成功',
        message: '登录成功！'
      })
      this.$router.push('/')
    } catch (err) {
      this.$notify.error({
        title: '失败',
        message: err.message || '登录失败！'
      })
    }
  }

  submitForm(formName: string, $event: MouseEvent) {
    console.log('1223131', this.formValues)

    const from = this.$refs[formName] as Form

    from.validate(valid => {
      if (valid) {
        this.login()
      } else {
        return false
      }
    })
  }

  resetForm(formName: string) {
    const from = this.$refs[formName] as Form
    from.resetFields()
  }

  mounted() {
    this.formValues.username = 'guest'
    this.formValues.password = '123456'
  }

  render() {
    console.log(123)
    return <div class={style.login} >
      <el-card class={style['login-card']}>
        <div slot="header">
          <span>示例系统</span>
          <div class="pull-right">
            <router-link to="/about">关于</router-link>
          </div>
        </div>
        <div class="login-form">
          <Form props={{ model: this.formValues } } status-icon rules={this.rules} ref="loginForm">
            <FormItem prop="username">
              <el-input
                type="text"
                placeholder="普通用户 guest / 管理员 admin"
                vModel={this.formValues.username}
                autocomplete="off"
              >
                <template slot="prepend">账号</template>
              </el-input>
            </FormItem>
            <el-form-item prop="password">
              <el-input
                type="password"
                placeholder="请输入任意密码"
                vModel={this.formValues.password}
                autocomplete="off"
              >
                <template slot="prepend">密码</template>
              </el-input>
            </el-form-item>
            <el-form-item class="pull-right">
              <el-button onClick={() => this.resetForm('loginForm')}>重置</el-button>
              <el-button type="primary" onClick={($e: MouseEvent) => this.submitForm('loginForm', $e)}>登录</el-button>
            </el-form-item>
          </Form>
        </div>
      </el-card>
    </div>
  }
}

