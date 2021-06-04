<template>
    <section id="market" class="pb-50px mt-40px pt-45px">
        <div class="container-fluid">
            <div class="row">
                <div class="col-12">
                    <p class="title f-24">Tin Tức & Thị Trường</p>
                    <div class="line"></div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mt-36px nav">
                   <ul>
                       <li>Xây Dựng</li>
                       <li class="b-active">Nội Thất</li>
                       <li>Nhà Đất</li>
                   </ul>
                </div>
            </div>
            <div class="row box mt-10px mrin-4">
                <div class="col-lg-4 col-md-4 col-sm-12 padding-19 mb" v-for="(item ,i ) in 3" :key="i">
                    <div class="boxItem">
                        <img class="imgTop" src="@/assets/img/product-1.png" alt="">
                        <div class="content">
                            <h3 class="mt-4px">Bỏ túi ngay bí quyết trang trí phòng khách hiện đại với Phố Xinh </h3>
                            <div class="evaluate mt-20px">
                                <div class="left">
                                    <img src="@/assets/img/market1.png" alt="">
                                    <div class="text">
                                        Bởi <span>Longb04</span>
                                    </div>
                                </div>
                                <div class="right">
                                    <div class="one mr-15px">
                                        <img src="@/assets/svg/see.svg" alt="">
                                        <p class="ml-6px">290</p>
                                    </div>
                                    <div class="one">
                                        <img class="mb-4px" src="@/assets/svg/like.svg" alt="">
                                        <p class="ml-6px">20</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 next">
                    <p class="mb-0 text-right mt-36px f-13 seemore">
                     Xem thêm dự án
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAQCAYAAAAmlE46AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADuSURBVHgBtZBBDsFAFIbfq0kk9pKycgSWIhacwA24Ahux0q5EY8EJcAM3IEIt3UAtu5yViqTztNJWE23TWfhWk5l87/3/QGV+7KmzfQ0kUQhYDwtFq2pcpjIDlPBAQJo3YK8uLn0pMaCGgjYVw7TKxqkuI0YDGCjXqnFep8VPEz8Q4MCLf/P7S4kB6Pf34t/UhRn1R3VubhAh14cEOa7O49XNs/GrEB3IFSOudTjLZ4BFALo9bm3Dq0wRgbggWD2d0pJrDR5/yxJ3wlWG9qR5T3r8Ef0eIIRuT9oHyIDFYxGh32MJOWDBFt1J6PEX3mmCYaK2hZj2AAAAAElFTkSuQmCC" class="ml-5px"></p>
                </div>
            </div>
        </div>
    </section>
</template>