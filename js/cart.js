var cart = [];
    function taoCart() {
      cart = [
        {
          'tensp': 'Giày thể thao',
          'gia': 340000,
          'hinh': 'img/product-1.jpg',
          'soluong': 1
        },
        {
          'tensp': 'Giày thời trang nam',
          'gia': 210000,
          'hinh': 'img/product-3.jpg',
          'soluong': 3
        },
        {
          'tensp': 'Áo hoodie cá tính',
          'gia': 320000,
          'hinh': 'img/product-4.jpg',
          'soluong': 5
        },
        {
          'tensp': 'Áo polo nam',
          'gia': 350000,
          'hinh': 'img/product-8.jpg',
          'soluong': 2
        }
      ];
      sessionStorage.setItem("cart", JSON.stringify(cart));
      alert('Đã tạo cart xong trong sessionStorage')
    }


    function formatTotal(total) {
      return total.toLocaleString('vi-VN', { minimumFractionDigits: 0 });
    }


    function hienCart() {
      var text = sessionStorage.getItem('spGioHang');
      var product = JSON.parse(text);
      console.log(product);
      var str = '';
      for (let i = 0; i < product.length; i++) {
        var sp = product[i];
        str += `<div class="row mb-4 d-flex justify-content-between align-items-center">
            <div class="rows col-md-2 col-lg-2 col-xl-2">
              <img src="${sp.hinh}" class="img-fluid rounded-3"">
            </div>
            <div class="col-md-3 col-lg-3 col-xl-3">
              <h5 class="text-black mb-0">${sp.tensp}</h5>
            </div>
            <div class="col-md-1 col-lg-1 col-xl-1 d-flex">
              <input onchange="doisoluong(this.value)" min="0" name="quantity" value="${sp.soluong}" type="number" class="form-control form-control-sm" />
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
              <h6 class="mb-0">${formatTotal(sp.gia)} VND</h6>
            </div>
            <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
      
              <h6 class="mb-0 tong">${formatTotal(sp.gia * sp.soluong)} VND</h6>

            </div>
          </div>
          <hr class="my-4">`
      }
      document.getElementById('giohang').innerHTML = str;
      document.getElementById('xoaCartText').innerHTML = '';
      document.getElementById('slsanpham').innerHTML = ` <p class="mb-0 text-muted slsanpham">${product.length} sản phảm</p>`;
      tinhTongTien();

    }

    function doisoluong(sl) {
      var soluong = event.target.value;
      var giaText = event.target.parentElement.nextElementSibling.innerText;
      var gia = parseFloat(giaText.replace(' VND', '').replace(/,/g, ''));
     


      
      var thanhTien = soluong * gia;
      var thanhTienFormatted = thanhTien.toFixed(3).toLocaleString('vi-VN', { minimumFractionDigits: 0 });
    
      event.target.parentElement.nextElementSibling.nextElementSibling.innerHTML = ` <h6 class="mb-0">${thanhTienFormatted} VND</h6>`;
      tinhTongTien();

      
    }



    function tinhTongTien() {
      var arr = document.getElementsByClassName('row');
      var tongTienGH = 0;

      for (let i = 0; i < arr.length; i++) {
        let row = arr[i];
        var tienText = row.getElementsByTagName('h6')[1].innerText;
        // Lấy giá trị số từ văn bản và loại bỏ " VND"
        var tien = parseInt(tienText.replace(' VND', '').replace(',', ''));

        // Kiểm tra xem giá trị tien có phải là một số hợp lệ không
        if (!isNaN(tien)) {
          tongTienGH += tien;
        }
      }
      console.log(tongTienGH)
      var tongTienGHFormatted = tongTienGH.toFixed(3).toLocaleString('vi-VN', { minimumFractionDigits: 0 });


      document.getElementById('tongtienthanhtoan').innerText = formatTotal(tongTienGHFormatted) + ' VND';

    }

    function xoaCart() {
      sessionStorage.removeItem('cart');
      document.getElementById('giohang').innerHTML = '';
      document.getElementById('xoaCartText').innerHTML = 'Giỏ hàng trống'
      document.getElementById('tongtienthanhtoan').innerText ='0 VND';
    }
    function kiemTra() {
      alert('Đã gọi hàm kiểm tra');
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('btnThanhToan').addEventListener('click', kiemTra);
});

  


