import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'
@Component
export default class TestComponent extends Vue {
  $props!: {
    testProp?: string;
  }

  @Prop() testProp!: string

  render() {
    return <div>{this.testProp}</div>
  }
}
