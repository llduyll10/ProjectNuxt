<template>
  <div class="buyTokenPageWrap">
      <div class="f-20 f-bold text-main mb-15px">Yêu cầu rút tiền</div>

      <p class="f-13 text-gray">
        1. Số tiền tối thiểu mỗi lần rút là 200.000 VNĐ
      </p>
      <p class="f-13 text-gray">
        2. Chi phí rút tiền là 11.000 VNĐ cho mỗi lần rút
      </p>
      <p class="f-13 text-gray">
        3. Yêu cầu rút tiền sẽ được xử lý trong vòng 5 ngày làm việc (không bao
        gồm ngày lễ, Thứ 7/Chủ Nhật)
      </p>
      <p class="f-13 text-gray">
        4. Bạn có thắc mắc gì, vui lòng liên hệ chúng tôi (+849) 0465-9518 hoặc
        support@epoint.vn để được hỗ trợ
      </p>

      <table class="request-money-table text-center">
        <div class="headWrap flex-center">
            <div class="headItem">Số dư tài khoản</div>
            <div class="headItem">Số tiền cần rút</div>
            <div class="headItem">Số tiền có thể rút</div>
        </div>
          <div class="f-12 text-gray flex-center bodyWrap">
            <div class="bodyItem text-main">
                <div class="headItem">Số dư tài khoản</div>
                {{ formatVnd(50000000) }} VNĐ</div>
            <div class="bodyItem w-200px">
              <div class="input-group  f-13 text-gray">
                <div class="headItem">Số tiền cần rút</div>
                <input type="text" class="form-control" />
                <div class="input-group-append">
                  <span class="input-group-text f-13">VNĐ</span>
                </div>
              </div>
            </div>
            <div class="bodyItem text-main">
                <div class="headItem">Số tiền có thể rút</div>
                {{ formatVnd(49500000) }} VNĐ
            </div>
          </div>
      </table>

      <button type="button" class="btn btn-main pr-20px pl-20px mt-16px">
        Yêu cầu rút
      </button>
  </div>
</template>
<script>
export default {};
</script>
