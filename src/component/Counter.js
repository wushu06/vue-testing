export default  {
    template: `
        <div>
        <span class="count" v-text="count"></span>
        <button id="btn" @click="count++">increment</button>
</div>
    `,
   data(){
      return {
          count: 0
      }
    }
}