const news = [
    {
        id: 1, image: "~Assets/client/images/category-news/img1.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 2, image: "~Assets/client/images/category-news/img2.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 3, image: "~Assets/client/images/category-news/img3.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 4, image: "~Assets/client/images/category-news/img4.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 5, image: "~Assets/client/images/category-news/img5.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 6, image: "~Assets/client/images/category-news/img3.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 7, image: "~Assets/client/images/category-news/img2.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 8, image: "~Assets/client/images/category-news/img4.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 9, image: "~Assets/client/images/category-news/img1.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 10, image: "~Assets/client/images/category-news/img5.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        link: "detail-news-1.html",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 11, image: "~Assets/client/images/category-news/img2.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 12, image: "~Assets/client/images/category-news/img4.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 13, image: "~Assets/client/images/category-news/img1.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 14, image: "~Assets/client/images/category-news/img3.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 15, image: "~Assets/client/images/category-news/img5.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 16, image: "~Assets/client/images/category-news/img2.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 17, image: "~Assets/client/images/category-news/img4.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 18, image: "~Assets/client/images/category-news/img1.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 19, image: "~Assets/client/images/category-news/img4.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 20, image: "~Assets/client/images/category-news/img2.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 21, image: "~Assets/client/images/category-news/img5.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 22, image: "~Assets/client/images/category-news/img1.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 23, image: "~Assets/client/images/category-news/img3.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 24, image: "~Assets/client/images/category-news/img2.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 25, image: "~Assets/client/images/category-news/img4.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    },
    {
        id: 26, image: "~Assets/client/images/category-news/img5.png",
        link: "detail-news-1.html",
        title: "Thời trang đẹp không có chỗ chê của mỹ nhân hàng đầu",
        datetime: "28 Tháng Năm, 2020 , 10:15 sáng",
        content: 'Không chỉ được mệnh danh là "Mỹ nhân đẹp nhất Philippines", nữ diễn viên Marian Rivera còn gây ấn tượng trong lòng công chúng bởi gu thời trang. Cô luôn giữ hình ảnh đẹp với những món đồ tinh tế, trong thời gian mang bầu cô cũng được đánh giá là mặc đẹp nhất trong giới giải trí nước này.'
    }
];

let perPage = 7;
let currentPage = 1;
let start = 0;
let end = perPage;

function getCurrentPage(currentPage) {
    start = (currentPage - 1) * perPage;
    end = currentPage * perPage;
}

const totalPages = Math.ceil(news.length / perPage);

const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');

function renderNews() {
    html = '';
    const contents = news.map((item, index) => {
        if (index >= start && index < end) {
            html += '<div class="item-new">';
            html += '<div class="img-item">';
            html += '<a href="' + item.link + '"><img src="' + item.image + '" alt=""></a>';
            html += '</div>';
            html += '<div class="info-item">';
            html += '<div class="title-item"><a href="'+ item.link+'">';
            html += '<h3>' + item.title + '</h3>';
            html += '</a></div>';
            html += '<div class="datetime-item">';
            html += '<p>' + item.datetime + '</p>';
            html += ' </div>';
            html += '<div class="content-item"><a href="'+ item.link +'">';
            html += '<p>' + item.content + '</p>';
            html += '</a></div>';
            html += '</div>';
            html += '</div>'
            return html;
        }
    })
    document.getElementById('list-news').innerHTML = html;
}
function renderListPage() {
    let html = '';
    html += `<li class="page-item active"><a class="page-link" href="#">${1}</a></li>`;
    for (let i = 2; i <= totalPages; i++) {
        html += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
    }
    document.getElementById('number-page').innerHTML = html;
}
function changePage() {
    const currentPages = document.querySelectorAll('.number-page li');
    for (let i = 0; i < currentPages.length; i++) {
        currentPages[i].addEventListener('click', () => {
            let value = i + 1;
            currentPage = value;
            $('.number-page li').removeClass('active');
            currentPages[i].classList.add('active');

            if (currentPage > 1 && currentPage < totalPages) {
                $('.btn-prev').removeClass('disabled');
                $('.btn-next').removeClass('disabled');
            }
            if (currentPage === 1) {
                $('.btn-prev').addClass('disabled');
            }
            if (currentPage === totalPages) {
                $('.btn-next').addClass('disabled');
            }

            getCurrentPage(currentPage);
            renderNews();
        })
    }
}

renderNews();
renderListPage();
changePage();

btnNext.addEventListener('click', () => {
    currentPage++;
    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
    if (currentPage === totalPages) {
        $('.btn-next').addClass('disabled');
    }

    $('.btn-prev').removeClass('disabled')
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage - 1})`).addClass('active');


    getCurrentPage(currentPage);
    renderNews();
})

btnPrev.addEventListener('click', () => {
    currentPage--;
    if (currentPage <= 1) {
        currentPage = 1;
    }
    if (currentPage === 1) {
        $('.btn-prev').addClass('disabled');
    }
    $('.btn-next').removeClass('disabled');
    $('.number-page li').removeClass('active');
    $(`.number-page li:eq(${currentPage - 1})`).addClass('active');

    getCurrentPage(currentPage);
    renderNews();
})

