<template>
    <div id="manage-project">
        <div class="wrap pb-0">
            <h1 class="title">Tài khoản ngân hàng</h1>
        </div>

        <table class="table table-custom">
            <thead>
                <tr>
                    <th scope="col">Tên tài khoản</th>
                    <th scope="col">Số tài khoản</th>
                    <th scope="col">Ngân hàng giao dịch</th>
                    <th scope="col">Yêu cầu khác</th>
                </tr>
            </thead>
            <tbody>
                <tr class="f-12 text-gray" v-for="(idx) in 1" :key="idx">
                    <td class="text-main">Bùi Kim Long</td>
                    <td>012345678910</td>
                    <td>Techcombank, CN Quận 7</td>
                    <td class="text-main">Yêu cầu rút tiền</td>
                </tr>
            </tbody>
        </table>

        <div class="wrap pt-0">
            <button type="button" class="btn btn-main">
                <img src="@/assets/svg/credit1.svg" alt="">
                Thêm tài khoản ngân hàng
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props:['title']
}
</script>