<template>
    <section id="rating-component">
        <div class="type-field">
            <div class="group-title">
                <p class="title">Khách hàng đánh giá</p>
            </div>
        </div>
        <template v-for="(item,idx) in 2">
            <div :key="idx" class="card-rating">
                <div class="customer-rate">
                    <!-- star -->
                    <div class="group-star d-flex mb-10px">
                        <div class="star-number mr-4px">
                            <p class="f-10">5.0</p>
                        </div>
                        <template v-for="(item,idx) in 5">
                            <div :key="idx">
                                <i class="fas fa-star mr-1px f-13"></i>
                            </div>
                        </template>
                    </div>
                    <!-- title -->
                    <div class="title d-flex">
                        <p>Tìm công ty thiết kế nội thất biệt thự Quận 9</p>
                        <p class="price">200 Triệu</p>
                    </div>
                    <!-- content -->
                    <p class="content f-12 mb-15px">
                        Công ty thi công thiết kế chuyên nghiệp. Chịu khó sửa đổi theo yêu cầu, Có vài vấn đề nhỏ phát sinh trong quá trinh xây dựng, nhưng chất lượng hoàn thiện ok. Sẽ làm việc tiếp trong công trình sau.
                    </p>
                    <!-- user rate -->
                    <div class="user-rate">
                        <b-avatar variant="info" src="https://placekitten.com/300/300" ></b-avatar>
                        <p class="f-11">Bởi <span>NhungL24</span></p>
                        <div class="height"></div>
                        <div class="location">
                            <img src="@/assets/svg/icon-location.svg" />
                            <span class="f-11">Hồ Chí Minh</span>
                        </div>
                        <div class="height"></div>
                        <div class="datetime">
                            <img src="@/assets/svg/icon-calendar-red.svg" alt="">
                            <span class="f-11">01/04/2021</span>
                        </div>
                    </div>
                </div>
            </div>
        </template>
        <div class="row text-center seemore mt-5px">
            <p class="f-12">Xem thêm đánh giá <i class="fas fa-caret-down ml-5px"></i></p>
        </div>
        <div class="line"></div>
    </section>
</template>