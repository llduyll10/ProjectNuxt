<template>
    <section id="description-component" v-if="profile">
        <div class="title f-20">
            <p class="name">{{profile.name}}</p>
            <div class="height"></div>
            <p class="name-company">
                {{profile.company}}
                <img class="ml-10px mb-5px" src="@/assets/svg/icon-verify-company.svg" alt="">
            </p>
        </div>
        <div class="group-bage mt-10px">
            <div class="cover-bage d-flex mb-15px">
                <template v-for="(item) in listCategory">
                    <h5 :key="item.id" class="mb-0px">
                        <span class="badge badge-secondary f-12 px-10px py-5px">
                            {{item.label}}
                        </span>
                    </h5>
                </template>
            </div>
            <div class="d-flex cover-type-location">
                <div class="type">
                    <img src="@/assets/svg/icon-user-dark.svg" class="mr-0" />
                    <span class="f-11 fw-600">{{profile.accountType}}</span>
                </div>
                <div class="location">
                    <img src="@/assets/svg/icon-location.svg" />
                    <span class="f-11">{{profile.province}}</span>
                </div>
            </div>
        </div>

        <div class="line"></div>

        <div class="type-field">
            <div class="group-title mb-10px">
                <p class="title">Giới thiệu</p>
                <div class="group-function">
                    <img src="@/assets/svg/icon-edit-file.svg" />
                    <span>Chỉnh sửa</span>
                    <div class="height"></div>
                    <span>Xoá bỏ</span>
                </div>
            </div>
            <p class="content f-13">
                {{profile.introduce}}
            </p>
        </div>

        <div class="line"></div>

        <div class="type-field">
            <div class="group-title mb-10px">
                <p class="title">Lĩnh vực</p>
            </div>
            <div class="content pl-20px">
                <ul>
                    <template v-for="item in listCategory">
                        <li :key="item.id + 1">{{item.label}}</li>
                    </template>
                </ul>
            </div>
        </div>

        <div class="line"></div>

        <div class="type-field">
            <div class="group-title mb-10px">
                <p class="title">Năng lực</p>
            </div>
            <p class="content f-13">
                {{profile.ability}}
            </p>
        </div>

        <div class="line"></div>

        <div class="type-field">
            <div class="group-title mb-10px">
                <p class="title">Chứng chỉ năng lực</p>
            </div>
            <div class="group-certificate">
                <template v-for="(item,idx) in profile.filesCert">
                    <div @click="downloadFile(item)" :key="idx" class="item cursor-pointer">
                        <span v-html="returnTypeFile(spliceURLFile(item,'--'))"></span>
                        {{spliceURLFile(item,'--')}}
                    </div>
                </template>
            </div>
        </div>





    </section>
</template>
<script>
export default {
    props:['profile','listCategory'],
    data(){
        return{
        }
    },
    watch:{
        profile(){

        }
    },
    created(){

    },
    mounted(){
    }
}
</script>