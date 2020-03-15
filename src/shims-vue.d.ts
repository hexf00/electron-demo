declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
declare module '*.scss' {
  const style: Record<string, string>
  export default style
}
