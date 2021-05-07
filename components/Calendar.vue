<template>
  <div>
    <b-form-datepicker
        v-model="value"
        :min="min"
        :max="max"
        locale="vi"
        placeholder="Chọn ngày"
        :initial-date="min"
        :date-disabled-fn="dateDisabled"
        :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }"
        :right=false
        :required=true
        @input="handleValue"
        >
    </b-form-datepicker>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: '',
        min: null,
        max: null,
        placeholder:''
      }
    },
    computed:{
    },
    mounted(){
        const now = new Date()
        const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
        // 15th two months prior
        const minDate = new Date(today)

        const maxDate = new Date(today)
        maxDate.setMonth(maxDate.getMonth() + 2)
        maxDate.setDate(15)

        this.min = minDate
        this.max = maxDate
    },
    methods: {
      dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`) and
        // disable days that fall on the 13th of the month
        const weekday = date.getDay()
        const day = date.getDate()
        // Return `true` if the date should be disabled
        return weekday === 0 || weekday === 6
      },
      handleValue(value){
          this.$emit('dateSelected',value)
      }
    }
  }
</script>