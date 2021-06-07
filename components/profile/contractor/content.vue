<template>
    <div id="manage-project">
        <div class="wrap">
            <h1 class="title">{{title}}</h1>
             <div class="group-function d-flex">
                <input class="input-search form-control" placeholder="Tìm kiếm dự án" />
                <b-dropdown class="dropdown-all"  variant="link" toggle-class="text-decoration-none" no-caret>
                    <template #button-content>
                    <div class="title-dropdown">
                        <span>Tất cả dự án</span>
                        <i class="fas fa-caret-down ml-13px f-16"></i>
                    </div>
                    </template>
                    <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=1'" class="f-12">Hồ sơ cá nhân </b-dropdown-item>
                    <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=2'" class="f-12">Hồ sơ làm việc</b-dropdown-item>
                    <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=4'" class="f-12">Xác thực thông tin</b-dropdown-item>
                </b-dropdown>
                <div class="btn-search">
                    Tìm kiếm
                </div>
            </div>
        </div>

        <table class="table table-custom">
            <thead>
                <tr>
                    <th scope="col">Tên dự án</th>
                    <th scope="col">Khách hàng</th>
                    <th scope="col">Giá của bạn</th>
                    <th scope="col">Trạng thái</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(idx) in 4" :key="idx">
                    <td class="name" :class="idx==1 ? 'active': '' ">Tìm đơn vị trang trí nội thất căn hộ Hà Đô Centrosa</td>
                    <td class="customer text-main f-12">Bùi Kim Long</td>
                    <td class="price">1.500.000.000 VNĐ</td>
                    <td class="status">
                        <b-dropdown class="dropdown-all"  variant="link" toggle-class="text-decoration-none" no-caret>
                            <template #button-content>
                            <div class="title-dropdown">
                                <span>Đã gửi lời chào giá</span>
                                <i class="fas fa-caret-down ml-13px f-16"></i>
                            </div>
                            </template>
                            <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=1'" class="f-12">Hồ sơ cá nhân </b-dropdown-item>
                            <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=2'" class="f-12">Hồ sơ làm việc</b-dropdown-item>
                            <b-dropdown-item :to="'/member/chinh-sua-ho-so?tab=4'" class="f-12">Xác thực thông tin</b-dropdown-item>
                        </b-dropdown>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    props:['title']
}
</script>