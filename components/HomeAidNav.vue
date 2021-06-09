<template>
    <div>
        <ul>
            <li>
                <Nuxt-link :to="{path : '/hom-aid/gioi-thieu'}">Giới thiệu về HomAid</Nuxt-link>
            </li>
            <li>
                <Nuxt-link :to="{path : '/hom-aid/cau-hoi-thuong-gap'}">Câu hỏi thường gặp</Nuxt-link>
            </li>
            <li>
                <Nuxt-link :to="{path : '/hom-aid/tin-tuc-va-thi-truong'}">Tin tức & Thị trường</Nuxt-link>
            </li>
            <li>
                <Nuxt-link :to="{path : '/hom-aid/co-hoi-nghe-nghiep'}">Cơ hội nghề nghiệp</Nuxt-link>
            </li>
            <li>
                <Nuxt-link :to="{path : '/hom-aid/lien-he'}">Liên hệ</Nuxt-link>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
    a.nuxt-link-exact-active {
    color: rgba(25, 138, 198, 1) !important;
    border-bottom : 1px solid rgba(25, 138, 198, 1);
    }
</style>