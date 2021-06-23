<template>
    <section id="description-component" v-if="profile">
        <div class="title f-20">
            <p class="name">{{profile.name}}</p>
            <div class="height"></div>
            <p class="name-company">
                {{profile.company}}

            </p>
        </div>
        <div class="group-bage mt-10px">
            <div class="cover-bage d-flex mb-15px">
                <template v-for="(item) in listCategory">
                    <h5 :key="item.id" class="mb-0px">
                        <span class="badge badge-secondary f-11 px-10px py-5px"
                             :class="getClassBageCategory(mapValueFromCategory(item.id))"
                        >
                            {{item.label}}
                        </span>
                    </h5>
                </template>
            </div>
            <div class="d-flex cover-type-location">
                <div class="type">
                    <img src="@/assets/svg/icon-user-dark.svg" class="mr-0" />
                    <span class="f-11">{{profile.accountType}}</span>
                </div>
                <div class="location">
                    <template v-if="profile && profile.isVerified">
                        <img width="15px" height="15px" src="@/assets/svg/icon-verify-company.svg" alt="">
                        <span class="f-11">Đã xác thực</span>
                    </template>
                    <template v-else>
                        <i class="fas fa-times text-danger f-12"></i>
                        <span class="f-11 text-danger">Chưa xác thực</span>
                    </template>

                </div>
            </div>
        </div>

        <div class="line"></div>

        <div class="type-field">
            <div class="group-title mb-10px">
                <p class="title">Giới thiệu</p>
                <template v-if="$auth.loggedIn">
                    <nuxt-link
                        v-if="$auth.user && $auth.user._id == profile._id"
                        class="group-function"
                        :prefetch="false"
                        to="/member/chinh-sua-ho-so?tab=2"
                    >
                        <img src="@/assets/svg/icon-edit-file.svg" />
                        <span>Chỉnh sửa</span>
                        <div class="height"></div>
                        <span>Xoá bỏ</span>
                    </nuxt-link>
                </template>
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
                        <span>{{spliceURLFile(item,'--')}}</span>
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