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
    usr: '',
    pwd: ''
  }

  public rules = {
    usr: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }]
  }

  @Action('getUser')
  public getUser!: <T>(usr: string) => Promise<T>

  async login() {
    const { usr } = this.formValues
    console.log(usr)

    try {
      await this.getUser(usr)
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
            <FormItem prop="usr">
              <el-input
                type="text"
                placeholder="普通用户 codetrial / 管理员 admin"
                vModel={this.formValues.usr}
                autocomplete="off"
              >
                <template slot="prepend">账号</template>
              </el-input>
            </FormItem>
            <el-form-item prop="pwd">
              <el-input
                type="password"
                placeholder="请输入任意密码"
                vModel={this.formValues.pwd}
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

