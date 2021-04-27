<template>
    <div class="cover-header">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 ct-left">
                    <div class="d-flex">
                        <img src="@/assets/img/black-logo.png"/>
                        <div class="menu d-flex">
                            <template v-for="(item, index) in objMenu">
                                <div :key="index" class="sub-menu">
                                   <span class="f-13">{{item.name}}</span>
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 ct-right">
                    <div class="d-flex">
                        <div class="menu d-flex">
                            <template v-for="(item, index) in objBtn">
                                <div :key="index" class="sub-menu">
                                   <span class="f-13">{{item.name}}</span>
                                </div>
                            </template>
                            <div class="btn-findjob ml-4">
                                <span class="f-13">Đăng Việc</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            objMenu:[
                {name:'Thuê Nhà Thầu'},
                {name:'Tìm Dự Án'},
                {name:'Hướng Dẫn'},
            ],
            objBtn:[
                {name:'Đăng Ký '},
                {name:'Đăng Nhập '}
            ]
        }
    }
}
</script>
<style scoped lang="scss">
.cover-header{
    padding: 15px 65px;
    .menu{
        padding-top: 10px;
        .sub-menu{
            cursor: pointer;
            width: 150px;
            height: 25px;
            margin-right: 10px;
            text-align: center;
            border-right:1px solid rgba(130, 130, 130, 0.5);
            &:last-child{
                border-right: 0;
            }
            span{
                font-weight: bold;
                line-height: 17px;
                color: rgba(0, 0, 0, 0.84);
            }
        }
    }
    .ct-left{
        img{
            width: 130px;
            height: 40px;
        }
        .menu{
            margin-left: 50px;
        }
    }
    .ct-right{
        display: flex;
        justify-content: flex-end;
        .sub-menu{
            width: 80px;
            margin-right: 5px;
            &:nth-child(2){
                border-right: 0 !important;
            }
        }
        .btn-findjob{
            cursor: pointer;
            width: 100px;
            height: 30px;
            padding: 2px 15px 0 16px;
            text-align: center;
            background: #198AC6;
            color: #F2F2F2;
            border-radius: 5px;
            outline: none;
        }
    }
}

</style>