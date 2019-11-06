<template>
    <div>
        <input type="text" class="coupon-code" v-model="code" @input="validate"/>
        <p v-text="feedback"></p>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                code: '',
                coupons: [
                    {
                        code: '50OFF',
                        message: '50% off',
                        percentage: 50
                    },
                    {
                        code: '100OFF',
                        message: '100% off',
                        percentage: 100
                    }
                ],
                valid: false

            };
        },
        computed: {

            selectedCoupon(){
                return this.coupons.find(coupon => coupon.code === this.code)
            },

          message(){
              return this.valid && this.selectedCoupon.message
          },
            feedback(){
                if(this.valid){

                    return `Redeem: ${this.message}`
                }
                return 'Invalid coupon!'
            },
        },
        methods: {
            validate(){
                this.valid = !! this.selectedCoupon
               // this.valid = this.coupons.map(coupon => coupon.code).includes(this.code)
                if(this.valid){
                    this.$emit('applied', this.selectedCoupon.percentage)
                }
            }
        }
    }
</script>