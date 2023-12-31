function showicon(obj) {
    obj.querySelector("#icons").style.display = "block";
}
function hideicon(obj) {
    obj.querySelector("#icons").style.display = "none";
}
function thich() {
    var obj = event.target;
    if (obj.src.endsWith('like2.png') == true) {
        obj.src = 'img/like1.png'
    } else {
        obj.src = 'img/like2.png'
    }
}

function showThongBao(tensp) {
    var notification = document.getElementById('notification');
    notification.classList.remove('hidden');
    notification.style.opacity = '1';

    setTimeout(function () {
        notification.style.opacity = '0'; // Biến mất dần
        setTimeout(function () {
            notification.classList.add('hidden');
        }, 1000); // Sau 1 giây, ẩn thông báo hoàn toàn
    }, 1000); // Hiển thị trong 1 giây
}


var cart = [];
var soluong = 0;
function chooseproduct(id) {
    soluong++;
    document.getElementById('thongbao').innerHTML = `Đã thêm ${tensp} vào giỏ hàng`;
    document.getElementById('cart-count').innerHTML = soluong;

    // Lưu sản phẩm đã chọn vào sessionStorage cho trang detail
    var productChoose = list_products[id];
    console.log(productChoose);
    sessionStorage.setItem('productChoose', JSON.stringify(productChoose));

     // Lưu sản phẩm đã chọn vào sessionStorage cho trang cart
    // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa
    var productIndex = cart.findIndex(item => item.id === id);
    if (productIndex !== -1) {
        // Nếu sản phẩm đã tồn tại trong giỏ hàng, tăng soluongsp lên 1
        cart[productIndex].soluong += 1;
    } else {
        // Nếu sản phẩm chưa tồn tại trong giỏ hàng, thêm sản phẩm mới vào giỏ hàng
        var newProduct = {
            id: id,
            tensp: productChoose.tensp,
            gia: productChoose.gia,
            hinh: productChoose.img,
            soluong: 1
        };
        cart.push(newProduct);
    }

    // Lưu mảng cart vào sessionStorage cho giỏ hàng
    sessionStorage.setItem('spGioHang', JSON.stringify(cart));

    showThongBao(tensp);
}


document.getElementById('addToCartBtn').addEventListener('click', function () {
    chooseproduct(id, tensp);
    showThongBao();
});

function chuyenTrang(id, tensp) {

    //lưu sản phẩm đã chọn vào  sesstionstorage
    var productChoose = list_products[id];
    console.log(productChoose);
    sessionStorage.setItem('productChoose', JSON.stringify(productChoose));
    window.location.href = "detail.html";

}

var index = 0;
function prev() {
    index--;
    if (index < 0) {
        index = list_imgslide.length - 1;
    }

    // Thêm lớp fade-out để tạo hiệu ứng chuyển đổi
    var imageElement = document.getElementById('image');
    imageElement.classList.add('fade-out');

    // Sử dụng setTimeout để cập nhật ảnh và mô tả sau khi hoàn thành hiệu ứng chuyển đổi
    setTimeout(function () {
        imageElement.src = list_imgslide[index];
        document.getElementById('mota').innerHTML = list_motaslide[index];

        // Xóa lớp fade-out để chuẩn bị cho lần chuyển tiếp theo
        imageElement.classList.remove('fade-out');
    }, 500); // Đợi 500ms (giống với thời gian transition) trước khi cập nhật ảnh
}

setInterval(prev, 3000);


function next() {
    index++;
    if (index == list_imgslide.length) {
        index = 0;
    }

    // Thêm lớp fade-out để tạo hiệu ứng chuyển đổi
    var imageElement = document.getElementById('image');
    imageElement.classList.add('fade-out');

    // Sử dụng setTimeout để cập nhật ảnh và mô tả sau khi hoàn thành hiệu ứng chuyển đổi
    setTimeout(function () {
        imageElement.src = list_imgslide[index];
        document.getElementById('mota').innerHTML = list_motaslide[index];

        // Xóa lớp fade-out để chuẩn bị cho lần chuyển tiếp theo
        imageElement.classList.remove('fade-out');
    }, 500); // Đợi 500ms (giống với thời gian transition) trước khi cập nhật ảnh
}
setInterval('next()', 3500)