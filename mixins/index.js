

module.exports = {
    methods: {
        loader(off) {
            if (off === 0) {
                this.$nuxt.$loading.finish();
            } else {
                this.$nuxt.$loading.start();
            }
        },
        formatVnd(num) {
            return new Intl.NumberFormat('vi-VN').format(num || 0);
        },
        isNumber(evt) {
            const keysAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
            const keyPressed = evt.key;

            if (evt.keyCode == 69) {
              evt.preventDefault();
            }

            if (!keysAllowed.includes(keyPressed)) {
              if (
                evt.keyCode != 8 && //Backspace
                evt.keyCode != 46 && //Delete
                evt.keyCode != 37 && //Arrow left
                evt.keyCode != 38 && //Arrow up
                evt.keyCode != 39 && //Arrow right
                evt.keyCode != 40 && //Arrow down
                evt.keyCode != 9 //Tab
              ) {
                evt.preventDefault();
              }
            }
          },
        checkIsToday(value){
            var dateCheck = this.$moment(value)
            var REFERENCE = this.$moment();
            var TODAY = REFERENCE.clone().startOf('day');
            var YESTERDAY = REFERENCE.clone().subtract(1, 'days').startOf('day');
            if(dateCheck.isSame(TODAY,'day')){
                return 'Hôm nay'
            }
            else if(dateCheck.isSame(YESTERDAY,'day')){
                return 'Hôm qua'
            }
            else{
                return dateCheck.format("DD/MM/YYYY")
            }

        },
        checkStatusDueDate(value){
            var TODAY = this.$moment()
            var DUEDATE  = this.$moment(value)
            if(TODAY.format('DD/MM/YYYY') > DUEDATE.format('DD/MM/YYYY')){
                return true
            }
            return false
        },
        checkDueDate(value){
            var TODAY = this.$moment()
            var DUEDATE  = this.$moment(value)
            if(TODAY.format('DD/MM/YYYY') == DUEDATE.format('DD/MM/YYYY')){
                return '1 ngày'
            }
            if(TODAY > DUEDATE){
                return 'Hết hạn'
            }
            var find = DUEDATE.from(TODAY,true).toString().indexOf('gio')
            if(find == -1 ){
                return '1 ngày'
            }
            return DUEDATE.from(TODAY,true)
        },
        formatNamePrice(value){
            var arr = value.toString().split('')
            if(arr.length > 9){
                var end = arr.length - 9
                var temp = arr.splice(0,end)
                var rs = temp.join('')

                // Check unit
                var unit = arr.shift()
                if(Number(unit)> 0){
                    return `${rs},${unit} Tỷ`
                }
                return `${rs} Tỷ`
            }
            else if(arr.length>6 && arr.length <= 9){
                var end = arr.length - 6
                var temp = arr.splice(0,end)
                var rs = temp.join('')

                //Check unit
                var unit = arr.shift()
                if(Number(unit)> 0){
                    return `${rs},${unit} Triệu`
                }
                return `${rs} Triệu`
            }
        },
        isMobile: function () {
        },
        downloadFile(url){
            var link = document.createElement('a')
            var name = this.spliceURLFile(url,'--')
            if(name && name !== ''){
              link.download = name
              link.href = url
              link.click()
            }

        },
        returnTypeFile(url){
            var type = url.split('.').pop()
            var imgType = ["png","jpg","gif","jpeg"]
            if(imgType.includes(type)){
                return `<i class="fas fa-file-image f-16 mr-7px"></i>`
            }
            else if(type=='pdf'){
                return `<i class="fas fa-file-pdf f-16 mr-7px"></i>`
            }
            else{
                return `<i class="far fa-file f-16 mr-7px"></i>`
            }
        },
        spliceURLFile(url,symbol){
            return url.split(symbol).pop()
        },
        _toBase64(file) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => resolve('');
            });
        },
        async uploadFile(files) {
            return new Promise((resolve, reject) => {
                var c = 0;
                var temp = [];
                var isArray = Array.isArray(files);
                files = isArray ? files : [files];
                if (files && files.length) {
                    files.forEach((file) => {
                        var formData = new FormData();
                        formData.append("file", file);
                        this.$post("/s3/upload", formData)
                            .then((r) => {
                                temp.push(r.data.location);
                                cb();
                            })
                            .catch((err) => {
                                cb();
                            });
                    });
                }
                function cb(){
                    if(++c===files.length){
                        resolve(isArray?temp:temp[0]);
                    }
                }
            });
        },
        getTypeAccount() {
            return [
                { label: 'Công Ty Xây Dựng', id: 'Công Ty Xây Dựng' },
                { label: 'Công Ty Nội Thất', id: 'Công Ty Nội Thất' },
                { label: 'Kiến trúc sư', id: 'Kiến trúc sư' },
                { label: 'Kỹ sư giám sát', id: 'Kỹ sư giám sát' },
                { label: 'Khách hàng', id: 'Khách hàng' },
            ]
        },
        getCategory() {
            return [
                {
                    label: "Thi công xây dựng", id: 1, children: [
                        { label: "Thi công phần thô", id: 11 },
                        { label: "Thi công hoàn thiện", id: 12 },
                        { label: "Sửa chữa cải tạo", id: 13 },
                        { label: "Thi công trọn gọi", id: 14 },
                        { label: "Thi công nhà tiền chế", id: 15 },
                        { label: "Thi công toà nhà", id: 16 },
                        { label: "Hạng mục thi công khác", id: 17 }
                    ]
                },

                {
                    label: "Trang trí nội thất", id: 2, children: [
                        { label: "Nội thất căn hộ/nhà phố", id: 21 },
                        { label: "Nội thất biệt thự", id: 22 },
                        { label: "Nội thất văn phòng", id: 23 },
                        { label: "Nội thất nhà hàng", id: 24 },
                        { label: "Nội thất quan bar/karaoke", id: 25 },
                        { label: "Hạng mục nội thất khác", id: 26 }]
                },

                {
                    label: "Thiết kế", id: 3, children: [
                        { label: "Thiết kế kiến trúc", id: 31 },
                        { label: "Thiết kế nội thất", id: 32 },
                        { label: "Bản vẽ kỹ thuật", id: 33 },
                        { label: "Thiết kế kết cấu", id: 34 },
                        { label: "Lập hồ sơ dự toán/hoàn công", id: 35 },
                        { label: "Hạng mục thiết kế khác", id: 36 }
                    ]
                }

            ]
        },
        mapCategory(arr){
            var result = []
            var arrCategory = this.getCategory()
            var arrMap = arrCategory[0].children
                              .concat(arrCategory[1].children)
                              .concat(arrCategory[2].children)

            arr.forEach(item1 =>{
              arrMap.forEach(item2 =>{
                if(item1 == item2.id){
                    result.push(item2)
                }
              })
            })
            return result
        },
        getClassBageCategory(value){
            return{
                bageMain:value==1,
                bageOrange:value==2,
                bageGreen:value==3,
            }
        },
        getClassCategory(value){
            return{
                colorMain:value==1,
                colorOrange:value==2,
                colorGreen:value==3,
            }
        },
        mapImgFromCategory(arr){
            var min = Math.min(...arr)
            if(min){
                var first = min.toString()
                var unit = first.split('')
                if(unit[0] == 1){
                    return 1
                }
                else if(unit[0] == 2){
                    return 2
                }
                else{
                    return 3
                }
            }

        },
        mapValueFromCategory(value){
            var type = value.toString()
            var arr = type.split('')
            return arr[0]
        },
        getProvince() {
            return [
                {
                    name: "Hồ Chí Minh",
                    slug: "ho-chi-minh",
                    type: "thanh-pho",
                    name_with_type: "TP Hồ Chí Minh",
                    code: "79"
                }, {
                    name: "Hà Nội",
                    slug: "ha-noi",
                    type: "thanh-pho",
                    name_with_type: "TP Hà Nội",
                    code: "01"
                }, {
                    name: "An Giang",
                    slug: "an-giang",
                    type: "tinh",
                    name_with_type: "Tỉnh An Giang",
                    code: "89"
                }, {
                    name: "Bà Rịa - Vũng Tàu",
                    slug: "ba-ria-vung-tau",
                    type: "tinh",
                    name_with_type: "Tỉnh Bà Rịa - Vũng Tàu",
                    code: "77"
                }, {
                    name: "Bắc Giang",
                    slug: "bac-giang",
                    type: "tinh",
                    name_with_type: "Tỉnh Bắc Giang",
                    code: "24"
                }, {
                    name: "Bắc Kạn",
                    slug: "bac-kan",
                    type: "tinh",
                    name_with_type: "Tỉnh Bắc Kạn",
                    code: "06"
                }, {
                    name: "Bạc Liêu",
                    slug: "bac-lieu",
                    type: "tinh",
                    name_with_type: "Tỉnh Bạc Liêu",
                    code: "95"
                }, {
                    name: "Bắc Ninh",
                    slug: "bac-ninh",
                    type: "tinh",
                    name_with_type: "Tỉnh Bắc Ninh",
                    code: "27"
                }, {
                    name: "Bến Tre",
                    slug: "ben-tre",
                    type: "tinh",
                    name_with_type: "Tỉnh Bến Tre",
                    code: "83"
                }, {
                    name: "Bình Định",
                    slug: "binh-dinh",
                    type: "tinh",
                    name_with_type: "Tỉnh Bình Định",
                    code: "52"
                }, {
                    name: "Bình Dương",
                    slug: "binh-duong",
                    type: "tinh",
                    name_with_type: "Tỉnh Bình Dương",
                    code: "74"
                }, {
                    name: "Bình Phước",
                    slug: "binh-phuoc",
                    type: "tinh",
                    name_with_type: "Tỉnh Bình Phước",
                    code: "70"
                }, {
                    name: "Bình Thuận",
                    slug: "binh-thuan",
                    type: "tinh",
                    name_with_type: "Tỉnh Bình Thuận",
                    code: "60"
                }, {
                    name: "Cà Mau",
                    slug: "ca-mau",
                    type: "tinh",
                    name_with_type: "Tỉnh Cà Mau",
                    code: "96"
                }, {
                    name: "Cần Thơ",
                    slug: "can-tho",
                    type: "thanh-pho",
                    name_with_type: "TP Cần Thơ",
                    code: "92"
                }, {
                    name: "Cao Bằng",
                    slug: "cao-bang",
                    type: "tinh",
                    name_with_type: "Tỉnh Cao Bằng",
                    code: "04"
                }, {
                    name: "Đà Nẵng",
                    slug: "da-nang",
                    type: "thanh-pho",
                    name_with_type: "TP Đà Nẵng",
                    code: "48"
                }, {
                    name: "Đắk Lắk",
                    slug: "dak-lak",
                    type: "tinh",
                    name_with_type: "Tỉnh Đắk Lắk",
                    code: "66"
                }, {
                    name: "Đắk Nông",
                    slug: "dak-nong",
                    type: "tinh",
                    name_with_type: "Tỉnh Đắk Nông",
                    code: "67"
                }, {
                    name: "Điện Biên",
                    slug: "dien-bien",
                    type: "tinh",
                    name_with_type: "Tỉnh Điện Biên",
                    code: "11"
                }, {
                    name: "Đồng Nai",
                    slug: "dong-nai",
                    type: "tinh",
                    name_with_type: "Tỉnh Đồng Nai",
                    code: "75"
                }, {
                    name: "Đồng Tháp",
                    slug: "dong-thap",
                    type: "tinh",
                    name_with_type: "Tỉnh Đồng Tháp",
                    code: "87"
                }, {
                    name: "Gia Lai",
                    slug: "gia-lai",
                    type: "tinh",
                    name_with_type: "Tỉnh Gia Lai",
                    code: "64"
                }, {
                    name: "Hà Giang",
                    slug: "ha-giang",
                    type: "tinh",
                    name_with_type: "Tỉnh Hà Giang",
                    code: "02"
                }, {
                    name: "Hà Nam",
                    slug: "ha-nam",
                    type: "tinh",
                    name_with_type: "Tỉnh Hà Nam",
                    code: "35"
                }, {
                    name: "Hà Tĩnh",
                    slug: "ha-tinh",
                    type: "tinh",
                    name_with_type: "Tỉnh Hà Tĩnh",
                    code: "42"
                }, {
                    name: "Hải Dương",
                    slug: "hai-duong",
                    type: "tinh",
                    name_with_type: "Tỉnh Hải Dương",
                    code: "30"
                }, {
                    name: "Hải Phòng",
                    slug: "hai-phong",
                    type: "thanh-pho",
                    name_with_type: "TP Hải Phòng",
                    code: "31"
                }, {
                    name: "Hậu Giang",
                    slug: "hau-giang",
                    type: "tinh",
                    name_with_type: "Tỉnh Hậu Giang",
                    code: "93"
                }, {
                    name: "Hoà Bình",
                    slug: "hoa-binh",
                    type: "tinh",
                    name_with_type: "Tỉnh Hoà Bình",
                    code: "17"
                }, {
                    name: "Hưng Yên",
                    slug: "hung-yen",
                    type: "tinh",
                    name_with_type: "Tỉnh Hưng Yên",
                    code: "33"
                }, {
                    name: "Khánh Hòa",
                    slug: "khanh-hoa",
                    type: "tinh",
                    name_with_type: "Tỉnh Khánh Hòa",
                    code: "56"
                }, {
                    name: "Kiên Giang",
                    slug: "kien-giang",
                    type: "tinh",
                    name_with_type: "Tỉnh Kiên Giang",
                    code: "91"
                }, {
                    name: "Kon Tum",
                    slug: "kon-tum",
                    type: "tinh",
                    name_with_type: "Tỉnh Kon Tum",
                    code: "62"
                }, {
                    name: "Lai Châu",
                    slug: "lai-chau",
                    type: "tinh",
                    name_with_type: "Tỉnh Lai Châu",
                    code: "12"
                }, {
                    name: "Lâm Đồng",
                    slug: "lam-dong",
                    type: "tinh",
                    name_with_type: "Tỉnh Lâm Đồng",
                    code: "68"
                }, {
                    name: "Lạng Sơn",
                    slug: "lang-son",
                    type: "tinh",
                    name_with_type: "Tỉnh Lạng Sơn",
                    code: "20"
                }, {
                    name: "Lào Cai",
                    slug: "lao-cai",
                    type: "tinh",
                    name_with_type: "Tỉnh Lào Cai",
                    code: "10"
                }, {
                    name: "Long An",
                    slug: "long-an",
                    type: "tinh",
                    name_with_type: "Tỉnh Long An",
                    code: "80"
                }, {
                    name: "Nam Định",
                    slug: "nam-dinh",
                    type: "tinh",
                    name_with_type: "Tỉnh Nam Định",
                    code: "36"
                }, {
                    name: "Nghệ An",
                    slug: "nghe-an",
                    type: "tinh",
                    name_with_type: "Tỉnh Nghệ An",
                    code: "40"
                }, {
                    name: "Ninh Bình",
                    slug: "ninh-binh",
                    type: "tinh",
                    name_with_type: "Tỉnh Ninh Bình",
                    code: "37"
                }, {
                    name: "Ninh Thuận",
                    slug: "ninh-thuan",
                    type: "tinh",
                    name_with_type: "Tỉnh Ninh Thuận",
                    code: "58"
                }, {
                    name: "Phú Thọ",
                    slug: "phu-tho",
                    type: "tinh",
                    name_with_type: "Tỉnh Phú Thọ",
                    code: "25"
                }, {
                    name: "Phú Yên",
                    slug: "phu-yen",
                    type: "tinh",
                    name_with_type: "Tỉnh Phú Yên",
                    code: "54"
                }, {
                    name: "Quảng Bình",
                    slug: "quang-binh",
                    type: "tinh",
                    name_with_type: "Tỉnh Quảng Bình",
                    code: "44"
                }, {
                    name: "Quảng Nam",
                    slug: "quang-nam",
                    type: "tinh",
                    name_with_type: "Tỉnh Quảng Nam",
                    code: "49"
                }, {
                    name: "Quảng Ngãi",
                    slug: "quang-ngai",
                    type: "tinh",
                    name_with_type: "Tỉnh Quảng Ngãi",
                    code: "51"
                }, {
                    name: "Quảng Ninh",
                    slug: "quang-ninh",
                    type: "tinh",
                    name_with_type: "Tỉnh Quảng Ninh",
                    code: "22"
                }, {
                    name: "Quảng Trị",
                    slug: "quang-tri",
                    type: "tinh",
                    name_with_type: "Tỉnh Quảng Trị",
                    code: "45"
                }, {
                    name: "Sóc Trăng",
                    slug: "soc-trang",
                    type: "tinh",
                    name_with_type: "Tỉnh Sóc Trăng",
                    code: "94"
                }, {
                    name: "Sơn La",
                    slug: "son-la",
                    type: "tinh",
                    name_with_type: "Tỉnh Sơn La",
                    code: "14"
                }, {
                    name: "Tây Ninh",
                    slug: "tay-ninh",
                    type: "tinh",
                    name_with_type: "Tỉnh Tây Ninh",
                    code: "72"
                }, {
                    name: "Thái Bình",
                    slug: "thai-binh",
                    type: "tinh",
                    name_with_type: "Tỉnh Thái Bình",
                    code: "34"
                }, {
                    name: "Thái Nguyên",
                    slug: "thai-nguyen",
                    type: "tinh",
                    name_with_type: "Tỉnh Thái Nguyên",
                    code: "19"
                }, {
                    name: "Thanh Hóa",
                    slug: "thanh-hoa",
                    type: "tinh",
                    name_with_type: "Tỉnh Thanh Hóa",
                    code: "38"
                }, {
                    name: "Thừa Thiên Huế",
                    slug: "thua-thien-hue",
                    type: "tinh",
                    name_with_type: "Tỉnh Thừa Thiên Huế",
                    code: "46"
                }, {
                    name: "Tiền Giang",
                    slug: "tien-giang",
                    type: "tinh",
                    name_with_type: "Tỉnh Tiền Giang",
                    code: "82"
                }, {
                    name: "Trà Vinh",
                    slug: "tra-vinh",
                    type: "tinh",
                    name_with_type: "Tỉnh Trà Vinh",
                    code: "84"
                }, {
                    name: "Tuyên Quang",
                    slug: "tuyen-quang",
                    type: "tinh",
                    name_with_type: "Tỉnh Tuyên Quang",
                    code: "08"
                }, {
                    name: "Vĩnh Long",
                    slug: "vinh-long",
                    type: "tinh",
                    name_with_type: "Tỉnh Vĩnh Long",
                    code: "86"
                }, {
                    name: "Vĩnh Phúc",
                    slug: "vinh-phuc",
                    type: "tinh",
                    name_with_type: "Tỉnh Vĩnh Phúc",
                    code: "26"
                }, {
                    name: "Yên Bái",
                    slug: "yen-bai",
                    type: "tinh",
                    name_with_type: "Tỉnh Yên Bái",
                    code: "15"
                }].map(function (e) {
                    return { id: e.name, label: e.name }
                })
        }
    }
};