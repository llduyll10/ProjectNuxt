<template>
    <section id="project-component">
        <div class="type-field mb-40px">
            <div class="group-title">
                <p class="title">Dự án đã thực hiện</p>
                <div class="group-function">
                    <img src="@/assets/svg/icon-edit-file.svg" />
                    <span>Chỉnh sửa</span>
                    <div class="height"></div>
                    <span>Xoá bỏ</span>
                </div>
            </div>
        </div>
        <div class="group-item">
            <template v-for="(item,idx) in 8">
                <div :key="idx" class="col-md-3 col-md-4 col-sm-6 cover-item">
                    <div
                        class="item"
                        :style="{
                            'background-image': 'url(' + `${demoHouse}` + ')',
                        }"
                    >
                        <p class="location f-11">Biệt thự cổ điển Quận 9</p>
                    </div>
                </div>
            </template>
        </div>
        <div class="row text-center seemore mt-5px">
            <p class="f-12">Xem thêm dự án <i class="fas fa-caret-down ml-5px"></i></p>
        </div>
    </section>
</template>
<script>
import DemoHouse from '@/assets/img/demo-house.png'
export default {
    data(){
        return{
            demoHouse:DemoHouse
        }
    }
}
</script>